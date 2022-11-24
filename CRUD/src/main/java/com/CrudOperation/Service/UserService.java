package com.CrudOperation.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.CrudOperation.Model.User;

@Service
public interface UserService {
	
	public User addUser(User user);
	
	public List<User> getUsers();

	public User getUser(long userId);

	public User updateUser(User user);

	public User deleteUser(long userId);
	

}
