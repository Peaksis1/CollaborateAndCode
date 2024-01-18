package com.prakhars.collaborateandcode.models;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class CodeRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomId;

    @ManyToMany
    @JoinTable(name = "coder_code_room", joinColumns = @JoinColumn(name = "code_room_id"), inverseJoinColumns = @JoinColumn(name = "coder_id"))
    private Set<Coder> coders = new HashSet<>();

    @OneToMany(mappedBy = "codeRoom")
    private Set<CodeSnippet> codeSnippets = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public Set<Coder> getCoders() {
        return coders;
    }

    public void setCoders(Set<Coder> coders) {
        this.coders = coders;
    }

    public Set<CodeSnippet> getCodeSnippets() {
        return codeSnippets;
    }

    public void setCodeSnippets(Set<CodeSnippet> codeSnippets) {
        this.codeSnippets = codeSnippets;
    }

}
