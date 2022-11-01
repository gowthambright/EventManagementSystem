package com.Event_Management_System.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Event_Management_System.entity.User;
import com.Event_Management_System.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")	
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
		
	}
	@PostMapping("/login")
	public User findByEmailAndPassword(@RequestBody User user) {
		return userService.loginRequest(user);	
	}
	
	@GetMapping("/login/{id}")
	public User getDetailById(@PathVariable int id) {
		return userService.getUserDetailsById(id);
	}
	@PutMapping("/updateUser/{id}")
	public User updateDetailsById(@PathVariable int id, @RequestBody  User user) {
		return userService.updateDetailsById(id, user);
	}
	@DeleteMapping("/deleteUser/{id}")
	public String deleteDetailsById(@PathVariable int id) {
		return userService.deleteDetailsById(id);
	}
	@GetMapping("/getAllDetails")
	public List<User> getAllDetails() {
		return userService.getAllDetails();
	}
	@GetMapping("/getAllDetail/{id}")
	public User getDetailsById(@PathVariable int id) {
		return userService.getDetailsById(id);
	}

}