package com.webb.SCHOOL.Rest;

import com.webb.SCHOOL.Entity.User;
import com.webb.SCHOOL.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/adduser")
    @ResponseBody
    public User addUser(@RequestBody User user) {

        user.setUserid(0);

        userService.saveUser(user);

        return user;
    }

    @GetMapping("/users/{theId}")
    @ResponseBody
    public User findUserById(@PathVariable("theId") int theId) {

        User theUser = userService.findUserByUserId(theId);

        if (theUser == null) {
            throw new RuntimeException("User ID not found -" + theId);
        }
        return theUser;
    }
}