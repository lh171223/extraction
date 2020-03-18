package com.example.demo1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author lh
 * @version 1.0
 * @date 2020/3/18 14:14
 */
@Controller
@RequestMapping(value = "/person")
public class PersonController {

    @RequestMapping(value = "/personal")
    public String upload(){
        return "/pages/person";
    }

}
