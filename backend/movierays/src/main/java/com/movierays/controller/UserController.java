package com.movierays.controller;

import com.movierays.model.User;
import com.movierays.service.UserService;
import com.movierays.utils.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @GetMapping("/check-email")
    public ResponseEntity<Boolean> checkEmailExists(@RequestParam String email) {
        boolean exists = userService.emailExists(email);
        return ResponseEntity.ok(exists);
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        User createdUser = userService.registerUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestParam String email, @RequestParam String password) {
//        userActivityLogger.logActivity("user {} tried to log in");
        logger.info("user {} tried to log in", email);
        User user = userService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid email");
        }
        if (!user.getPassword().equals(password)) {
            return ResponseEntity.status(401).body("Invalid password");
        }
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        logger.info("user {} sucessfully logged in",email);
//        userActivityLogger.logActivity("user {} sucessfully logged in",email);
        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token) // Send the token
                .header("Access-Control-Expose-Headers", "Authorization") // Expose the header
                .body(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);

            return ResponseEntity.ok("Logged out successfully!");
        }
        return ResponseEntity.status(400).body("No valid token provided");
    }
    @PostMapping("/edit-profile")
    public ResponseEntity<User> editProfile(@RequestBody User user) {
        if (user.getId() == null) {
            return ResponseEntity.badRequest().body(null);
        }
        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }


}
