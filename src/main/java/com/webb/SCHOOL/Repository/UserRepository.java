package com.webb.SCHOOL.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.webb.SCHOOL.Entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {


}


