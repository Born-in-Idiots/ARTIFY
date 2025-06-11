package com.born.artify.auth.controller;

import com.born.artify.auth.dto.EmailReqDTO;
import com.born.artify.auth.dto.LoginReqDTO;
import com.born.artify.auth.dto.TokenResDTO;
import com.born.artify.auth.service.AuthService;

import com.born.artify.config.JwtProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@Controller
public class AuthController {

    private final JwtProvider jwtTokenProvider;
    private final AuthService authService;

    public AuthController(JwtProvider jwtTokenProvider, AuthService authService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authService = authService;
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<Map<String, Object>>login(@RequestBody LoginReqDTO request) {
        TokenResDTO token = authService.login(request);

        Map<String, Object> result = new HashMap<>();
        result.put("status", 200);
        result.put("msg", "성공적으로 가입되었습니다.");

        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token.getAccessToken())
                .header("Refresh-Token", token.getRefreshToken())
                .body(result);
    }


    @PostMapping("/api/auth/email/check")
    public ResponseEntity<Map<String, Object>>existCheckEmail(@RequestBody EmailReqDTO request) {
        boolean isExistEmail = authService.existEmailCheck(request);

        Map<String, Object> result = new HashMap<>();

        if(isExistEmail) {
            result.put("status", 401);
            result.put("msg", "이미 사용중인 이메일입니다.");
        }else{
            result.put("status", 200);
            result.put("msg", "이메일을 사용하실 수 있습니다.");
        }

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/main")
    public ResponseEntity<Map<String, Object>>mainTest() throws IOException {

       Map<String, Object> result = new HashMap<>();

       result.put("status", 200);
       result.put("msg", "성공적으로 가입되었습니다.");

       return ResponseEntity.ok().body(result);
    }

}
