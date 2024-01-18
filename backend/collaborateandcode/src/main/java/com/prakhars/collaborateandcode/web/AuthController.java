package com.prakhars.collaborateandcode.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
// AuthController.java
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.prakhars.collaborateandcode.dto.LoginRequest;
import com.prakhars.collaborateandcode.models.Coder;
import com.prakhars.collaborateandcode.repository.CoderRepository;
import com.prakhars.collaborateandcode.service.UserInfoService;
import com.prakhars.collaborateandcode.utils.JwtService;

@CrossOrigin(maxAge = 3600)
@Controller
public class AuthController {

    @Autowired
    private final CoderRepository coderRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private UserInfoService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthController(CoderRepository coderRepository, PasswordEncoder passwordEncoder) {
        this.coderRepository = coderRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerCoder(@RequestBody Coder coder) {
        coder.setPassword(passwordEncoder.encode(coder.getPassword()));
        coderRepository.save(coder);
        return ResponseEntity.ok("Registration successful.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return ResponseEntity.ok(jwtService.generateToken(loginRequest.getUsername()));
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }
}
