package com.CrudOperation.Crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CrudOperation.Model.User;

public interface UserDao extends JpaRepository<User, Long> {

}
