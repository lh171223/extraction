package com.example.demo1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/data")
public class DataProcessController {

    @RequestMapping("/upload")
    public String upload() {

        return "pages/upload";
    }



}