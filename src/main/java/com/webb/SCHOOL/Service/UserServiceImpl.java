package com.webb.SCHOOL.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webb.SCHOOL.Dao.UserDao;
import com.webb.SCHOOL.Entity.User;


@Service
public class UserServiceImpl implements UserService{
    private UserDao userDAO;

    @Autowired
    public UserServiceImpl(UserDao userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    @Transactional
    public User findUserByUserId(int theId) {
        return userDAO.getOne(theId);
    }

    @Override
    @Transactional
    public User saveUser(User user) {
        return userDAO.save(user);
    }

    @Override
    @Transactional
    public String getAuthTokenByUsernameAndPassword(String username, String password) {
        User user;

        user = userDAO.findByEmailAndPasswordEquals(username, password);

        return Integer.toString(user.getUserid());
    }
}