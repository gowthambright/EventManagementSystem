package com.Event_Management_System.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Event_Management_System.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	Optional<User> findByEmail(String email);
	
	Optional<User> findByEmailAndPassword(String email,String password);
}
