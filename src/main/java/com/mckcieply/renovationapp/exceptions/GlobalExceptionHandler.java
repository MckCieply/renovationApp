package com.mckcieply.renovationapp.exceptions;

import jakarta.validation.ConstraintViolationException;
import org.aspectj.apache.bcel.classfile.Method;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.Date;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionMessage constraintViolationException(ConstraintViolationException ex) {
        return new ExceptionMessage(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                ex.getConstraintViolations().stream().map(error -> error.getMessage()).toList()
        );
    }
}