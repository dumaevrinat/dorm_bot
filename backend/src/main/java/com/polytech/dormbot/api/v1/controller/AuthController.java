package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.api.v1.dto.UserData;
import com.polytech.dormbot.config.security.JwtTokenUtils;
import com.polytech.dormbot.entity.User;
import com.polytech.dormbot.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final JwtTokenUtils jwtTokenUtils;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final Mapper mapper;

    public AuthController(
            JwtTokenUtils jwtTokenUtils,
            UserService userService,
            AuthenticationManager authenticationManager,
            Mapper mapper) {
        this.jwtTokenUtils = jwtTokenUtils;
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.mapper = mapper;
    }

    @PostMapping("login")
    public ResponseEntity<Object> login(@RequestBody UserData userData) {
        try {
            Authentication authenticate = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            userData.getUsername(),
                            userData.getPassword())
                    );

            User user = (User) authenticate.getPrincipal();

            return ResponseEntity
                    .ok()
                    .body(jwtTokenUtils.generateAccessToken(user));

        } catch (BadCredentialsException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .build();
        }
    }

    @PostMapping("register")
    public ResponseEntity<Object> register(@RequestBody UserData userData) {
        User user = mapper.convertToEntity(userData);

        userService.add(user);

        return ResponseEntity.ok().build();
    }
}
