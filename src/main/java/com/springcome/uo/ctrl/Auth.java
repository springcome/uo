package com.springcome.uo.ctrl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class Auth {
	
	@RequestMapping("/login")
	public ResponseEntity<?> login(String username, String password) {
		return null;
	}
}
