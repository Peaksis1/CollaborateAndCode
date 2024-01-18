package com.prakhars.collaborateandcode.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.prakhars.collaborateandcode.dto.RegistrationRequest;
import com.prakhars.collaborateandcode.models.Coder;
import com.prakhars.collaborateandcode.repository.CoderRepository;

public class AuthService {
    @Autowired
    private final CoderRepository coderRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public AuthService(CoderRepository coderRepository, PasswordEncoder passwordEncoder) {
        this.coderRepository = coderRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registerUser(RegistrationRequest registrationRequest) {
        Coder coder = new Coder();
        coder.setUsername(registrationRequest.getUsername());
        coder.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));

        // Additional registration logic, if needed

        coderRepository.save(coder);
    }

}
