package com.Event_Management_System.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class ErrorHandling {

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> CustomExceptionHandling(CustomException exception){
		ErrorMessage errorDetails = 
				new ErrorMessage(exception.getMessage());
		return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(LoginExceptionMessage.class)
	public ResponseEntity<?> LoginExceptionHandling(LoginExceptionMessage exception){
		ErrorMessage errorDetails = 
				new ErrorMessage(exception.getMessage());
		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(LoginSuccessMessage.class)
	public ResponseEntity<?> LoginSuccessMessageHandling(LoginSuccessMessage exception){
		ErrorMessage errorDetails = 
				new ErrorMessage(exception.getMessage());
		return new ResponseEntity<>(errorDetails, HttpStatus.OK);
	}
		
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> globalExceptionHandling(Exception exception){
		ErrorMessage errorDetails = 
				new ErrorMessage( exception.getMessage());
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}
}

