package com.born.artify.domain.user.controller;
import com.born.artify.domain.user.dto.CreateUserDTO;
import com.born.artify.domain.user.dto.UserInfoResDTO;
import com.born.artify.domain.user.service.UserService;
import com.born.artify.domain.user.entity.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.Map;

@Controller
//@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 이거 삭제?
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/auth/signup")
    public ResponseEntity<Map<String, Object>> signUp(@Valid @RequestBody CreateUserDTO request) {
        System.out.println(request);
        User newUser = userService.createUser(request);

        Map<String, Object> result = new HashMap<>();
        result.put("status", 200);
        result.put("msg", "성공적으로 가입되었습니다.");

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/api/user/me")
    public ResponseEntity<Map<String, Object>> getUserInfo() {

        String email = "choihs980924@gmail.com";
        User user = userService.getUser(email);

        UserInfoResDTO res = new UserInfoResDTO(
                user.getProfile_url(),
                user.getUpdated_at(),
                user.getCreatedAt(),
                user.getCollection_id(),
                user.getEmail(),
                user.getUserName()
        );

        Map<String, Object> result = new HashMap<>();
        result.put("status", 200);
        result.put("msg", "정보 조회 성공");
        result.put("data", res);

        return ResponseEntity.ok().body(result);
    }
}