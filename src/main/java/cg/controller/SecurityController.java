package cg.controller;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class SecurityController {
    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("security/index");
    }

    @GetMapping("/view")
    public ModelAndView view() {
        return new ModelAndView("security/view");
    }

    @GetMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("security/login");
    }

    @GetMapping("/error")
    public ModelAndView error() {
        //Get page error then login failed
        return new ModelAndView("security/error");
    }

    @GetMapping("/user")
    public ModelAndView user(Principal principal) {
        // Get authenticated user name from Principal
        System.out.println(principal.getName());
        return new ModelAndView("security/user");
    }

    @GetMapping("/admin")
    public ModelAndView admin() {
        // Get authenticated user name from SecurityContext
        SecurityContext context = SecurityContextHolder.getContext();
        System.out.println(context.getAuthentication().getName());
        return new ModelAndView("security/admin");
    }
}
