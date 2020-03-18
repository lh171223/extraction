package com.example.demo1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author lh
 * @version 1.0
 * @date 2020/3/18 13:48
 */

@Controller
@RequestMapping(value = "/extraction")
public class ExtractController {

    @RequestMapping(value = "/extract")
    public String extract(){
        return "/pages/extraction";
    }

}
