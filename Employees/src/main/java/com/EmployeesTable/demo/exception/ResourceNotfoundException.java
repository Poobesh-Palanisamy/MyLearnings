package com.EmployeesTable.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND) 
public class ResourceNotfoundException extends RuntimeException{


	private static final long serialVersionUID = 1L;

	public ResourceNotfoundException (String message) {
		super(message);
	}

	public ResourceNotfoundException(Long id) {
		// TODO Auto-generated constructor stub
	}
}
