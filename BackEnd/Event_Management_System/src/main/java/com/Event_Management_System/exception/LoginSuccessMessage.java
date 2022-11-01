package com.Event_Management_System.exception;

public class LoginSuccessMessage extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

public LoginSuccessMessage(String errorMessage) {
    super(errorMessage);
    
}
}
