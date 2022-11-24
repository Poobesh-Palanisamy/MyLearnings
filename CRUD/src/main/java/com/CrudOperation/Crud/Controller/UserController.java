package com.CrudOperation.Crud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CrudOperation.Model.User;
import com.CrudOperation.Service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return this.userService.addUser(user);

	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return this.userService.getUsers();

	}

	@GetMapping("/users/{userId}")
	public User getUser1(@PathVariable String userId) {
		return this.userService.getUser(Long.parseLong(userId));
	}

	@PutMapping("/user")
	public User UpdateUser(@RequestBody User user) {
		return this.userService.updateUser(user);
	}
	
	@DeleteMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
		return this.userService.deleteUser(Long.parseLong(userId));
}}
