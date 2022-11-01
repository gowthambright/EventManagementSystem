package com.Event_Management_System.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Event_Management_System.entity.User;
import com.Event_Management_System.exception.CustomException;
import com.Event_Management_System.exception.LoginExceptionMessage;
import com.Event_Management_System.exception.LoginSuccessMessage;
import com.Event_Management_System.repository.UserRepository;


@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	
	public  User createUser(User details) {
		Optional<User> user = userRepository.findByEmail(details.getEmail());
		
		if(user.isPresent()) {
			throw new CustomException("Email Already Exist");
		}
		return userRepository.save(details);
		
	}
	public User loginRequest(User user) {		
		Optional<User> login = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
		if (login.isPresent()) {
			throw new LoginSuccessMessage("successfully logged in");	
		}else {
		    throw new LoginExceptionMessage("User not found");
		}
	}
	
    public User getUserDetailsById(int id) {
    	return userRepository.findById(id).orElse(null);
    }
    
	public User updateDetailsById(int id,User detail) {
		User existingDetails=userRepository.findById(id).orElse(null);
		if(id==existingDetails.getId()) {
			existingDetails.setFirstName(detail.getFirstName());
			existingDetails.setLastName(detail.getLastName());
			existingDetails.setAge(detail.getAge());
			existingDetails.setGender(detail.getGender());
			existingDetails.setDateOfBirth(detail.getDateOfBirth());
			existingDetails.setEmail(detail.getEmail());
			existingDetails.setPassword(detail.getPassword());
			existingDetails.setAddressLine1(detail.getAddressLine1());
			existingDetails.setAddressLine2(detail.getAddressLine2());
			existingDetails.setCity(detail.getCity());
			existingDetails.setDistrict(detail.getDistrict());
			existingDetails.setPincode(detail.getPincode());
			existingDetails.setState(detail.getState());
			existingDetails.setPhoneNumber(detail.getPhoneNumber());
			return userRepository.save(existingDetails);
		}else {
			return existingDetails;
		}
        }
		public String deleteDetailsById(int id) {
			userRepository.deleteById(id);
			return "Removed id "+id;
		}
		public List<User> getAllDetails() {
			return userRepository.findAll();
		}
		public User getDetailsById(int id) {
			return userRepository.findById(id).orElse(null);
		}	
}