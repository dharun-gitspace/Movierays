package com.movierays.service;

import com.movierays.model.User;
import com.movierays.repository.UserRepository;
import com.movierays.utils.JwtUtil;
import com.movierays.utils.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;

    public User registerUser(User user) {
        user.setPassword(user.getPassword());
        String role = checkRole(user.getEmail());
        user.setRole(role);
        return userRepository.save(user);
    }

    private String checkRole(String email) {
        Pattern pattern = Pattern.compile("@movierays.com", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        boolean matchFound = matcher.find();
        if(matchFound) {
            return Role.ADMIN.toString();
        } else {
            return Role.USER.toString();
        }
    }

    public User login(String email, String password) {

        User user = userRepository.findByEmail(email);
        if (user != null && password.equals(user.getPassword())) {
            return user;
        }
        return null;
    }

    public boolean emailExists(String email) {
        User user = userRepository.findByEmail(email);
        return user != null; // Return false if user is null (email does not exist)
    }
    public User findByEmail(String email) {
        // Retrieve user by email from the database
        return userRepository.findByEmail(email); // This assumes you have a method in your repository
    }
    public User updateUser(User user) {
        // Find the existing user by ID or email
        User existingUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Update user details
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());

        // If the password is changed, hash the new password
        if (!user.getPassword().isEmpty()) {
            existingUser.setPassword(user.getPassword());
        }

        return userRepository.save(existingUser); // This will update the user in the database
    }

}