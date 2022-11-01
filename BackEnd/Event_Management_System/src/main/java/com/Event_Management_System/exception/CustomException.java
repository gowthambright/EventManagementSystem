package com.Event_Management_System.exception;

public class CustomException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public CustomException(String errorMessage) {
	    super(errorMessage);
	    
	}

}
