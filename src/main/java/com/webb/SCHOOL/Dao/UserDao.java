package com.webb.SCHOOL.Dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webb.SCHOOL.Entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>{

    User findByEmailAndPasswordEquals(String email, String password);

}
