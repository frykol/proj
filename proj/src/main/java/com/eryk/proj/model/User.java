package com.eryk.proj.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;
    private String username;
    private String email;
    private String description;

    public User() { }

    public User(String username, String email, String description){
        this.username = username;
        this.email = email;
        this.description = description;
    }
}
