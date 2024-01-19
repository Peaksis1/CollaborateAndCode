package com.prakhars.collaborateandcode.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class JwtChecker {
    @Before("execution(* com.prakhars.collaborateandcode.web..*.*(..)) && !execution(* com.prakhars.collaborateandcode.web.AuthController.registerCoder(..)) && !execution(* com.prakhars.collaborateandcode.web.AuthController.login(..))")
    public void checkForJwt() {
        System.out.println("Controller is called");
    }
}
