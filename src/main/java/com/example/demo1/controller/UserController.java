package com.example.demo1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author lh
 * @version 1.0
 * @date 2020/3/18 14:15
 */

@Controller
@RequestMapping(value = "/user")
public class UserController {

    @RequestMapping(value = "/register")
    public String register(){
        return "/pages/register";
    }

    @RequestMapping(value = "/login")
    public String login(){
        return "/pages/login";
    }

    @RequestMapping(value = "/password")
    public String password(){
        return "/pages/password";
    }

    @RequestMapping(value = "/manage")
    public String manage(){
        return "/pages/manage";
    }
}
