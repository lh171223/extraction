package com.example.demo1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
//@MapperScan("com.example.demo1.dao")//{"com.example.demo1.config","com.example.demo1.dao"}
public class Demo1Application {
    public static void main(String[] args) {
        SpringApplication.run(Demo1Application.class, args);
    }

    @RequestMapping("/")
    public String login(){
        return "index";
    }

}