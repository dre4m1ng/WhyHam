package com.whyham;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/")
    public String login () {
        return "Login.html";
    }

    @GetMapping("/join/1")
    public String joinPage1 () {
        return "Join1.html";
    }

    @GetMapping("/join/2")
    public String joinPage2 () {
        return "Join2.html";
    }

    @GetMapping("/join/3")
    public String joinPage3 () {
        return "Join3.html";
    }

    @GetMapping("/main")
    public String mainPage () {
        return "main";
    }
}
