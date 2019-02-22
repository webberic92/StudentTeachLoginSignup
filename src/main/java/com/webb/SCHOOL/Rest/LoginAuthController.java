package com.webb.SCHOOL.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webb.SCHOOL.Dto.UserDTO;
import com.webb.SCHOOL.Service.UserService;

@RestController
@RequestMapping("/authuser")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginAuthController {

    public UserService userService;

    @Autowired
    LoginAuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String acceptLoginRequestAndRespond(@RequestBody UserDTO dto) {
        String token = userService.getAuthTokenByUsernameAndPassword(dto.getUsername(), dto.getPassword());
        System.out.println(token);
        return token;
    }
}