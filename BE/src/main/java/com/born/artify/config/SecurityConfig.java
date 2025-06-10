package com.born.artify.config;

import com.born.artify.auth.handler.OAuth2LoginSuccessHandler;
import com.born.artify.auth.service.OauthUserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final OAuth2LoginSuccessHandler successHandler;
    private final OauthUserService oauthUserService;

    public SecurityConfig(OAuth2LoginSuccessHandler successHandler, OauthUserService oauthUserService) {
        this.successHandler = successHandler;
        this.oauthUserService = oauthUserService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // 시큐리티 설정
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, JwtAuthenticationFilter jwtFilter) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF 비활성화
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // ⭐ 세션 사용 안 함
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**","/login/oauth2/**","/main").permitAll()  // 인증 없이 접근 허용
                        .anyRequest().authenticated()                 // 나머지는 인증 필요
                )
                .httpBasic(Customizer.withDefaults())
                .oauth2Login(oauth2 -> oauth2
                        .userInfoEndpoint(userInfo -> userInfo.userService(oauthUserService)) // 사용자 정보 처리
                        .successHandler(successHandler) // OAuth 로그인 성공 시 처리 (JWT 발급 등)
                        .defaultSuccessUrl("/main", true) // 로그인 성공 후 /main 페이지로 리디렉션
                )
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        ; // 기본 인증 방식 (원래 있던 거)

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // configuration.setAllowedOrigins(List.of("http://localhost:3000")); // 허용할 오리진 (여러개 가능)
        configuration.addAllowedOriginPattern("*");  // 모든 도메인 허용
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // 허용할 HTTP 메서드
        configuration.setAllowedHeaders(List.of("*")); // 허용할 헤더
        configuration.setAllowCredentials(true); // 자격증명 허용 (쿠키, 인증정보)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // 모든 경로에 적용

        return source;
    }
}