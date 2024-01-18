package com.prakhars.collaborateandcode.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prakhars.collaborateandcode.models.Coder;

public interface CoderRepository extends JpaRepository<Coder, Long> {
    Optional<Coder> findByUsername(String username);
}
