package com.eryk.proj.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String m){
        super(m);
    }
}
