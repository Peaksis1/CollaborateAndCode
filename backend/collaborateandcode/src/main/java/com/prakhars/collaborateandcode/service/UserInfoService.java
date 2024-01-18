package com.prakhars.collaborateandcode.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.prakhars.collaborateandcode.models.Coder;
import com.prakhars.collaborateandcode.repository.CoderRepository;

@Service
public class UserInfoService implements UserDetailsService {

    @Autowired
    private CoderRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Optional<Coder> userDetail = repository.findByUsername(username);

            return new User(userDetail.get().getUsername(), userDetail.get().getPassword(), new ArrayList<>());
        } catch (Exception e) {
            throw new UsernameNotFoundException("User not found " + username);
        }
    }

}
