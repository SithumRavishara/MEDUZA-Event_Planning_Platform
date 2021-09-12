package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;

import java.util.List;

public interface UserService {

    public User findById(int theId);

    public void save(User theUser);

    public  void deleteById(int theId);

    public List<User> findByEmail(String email);

}
