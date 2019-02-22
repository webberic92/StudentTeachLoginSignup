package com.webb.SCHOOL.Service;
import com.webb.SCHOOL.Entity.User;


public interface UserService {

	 User findUserByUserId(int theId);

	 User saveUser(User user);

	 String getAuthTokenByUsernameAndPassword(String username, String password);

	}
