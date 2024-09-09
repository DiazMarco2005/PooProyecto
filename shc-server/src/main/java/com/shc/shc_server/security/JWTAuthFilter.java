package com.shc.shc_server.security;

import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.TokenService;
import com.shc.shc_server.service.StudentService;
import com.shc.shc_server.service.CoordinatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JWTAuthFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private StudentService studentService;

    @Autowired
    private CoordinatorService coordinatorService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();
        if (path.startsWith("/api/auth/")) {
            filterChain.doFilter(request, response);
            return;
        }

        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            String email = tokenService.extractEmail(token);
            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                Student student = studentService.findByEmail(email);
                Coordinator coordinator = coordinatorService.findByEmail(email);
                if (tokenService.isTokenValid(token, student) |  tokenService.isTokenValid(token, student)) {
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(student, null, null);
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        }
        filterChain.doFilter(request, response);
    }
}