package com.Event_Management_System.exception;


public class LoginExceptionMessage extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	public LoginExceptionMessage(String errorMessage) {
	    super(errorMessage);
	    
	}

}
