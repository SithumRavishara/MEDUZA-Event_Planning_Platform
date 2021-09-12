package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.UserDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.DTO.UserDTO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.UserService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private UserService userService;

    public UserRestController(UserService theUserService) {
        userService = theUserService;
    }

    @GetMapping("/user/{userId}")
    public User getUser(@PathVariable int userId){

        User theUser = userService.findById(userId);

        if (theUser == null) {
            throw new RuntimeException("User Id did not found" + userId);

        }
        return theUser;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/users")
    public User addUser(@RequestBody User theUser){

        theUser.setId(0);

        userService.save(theUser);
        return theUser;
    }

//    @PutMapping("/users")
//    public User updateUser(@RequestBody User theUser){
//
//        userService.save(theUser);
//
//        return theUser;
//    }

    @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable int userId){

        User theUser = userService.findById(userId);

        if (theUser == null){
            throw  new RuntimeException("Employee did not found "+ userId);
        }

        userService.deleteById(userId);

        return "Deleted Employee Id:" + userId ;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/userLogin")
    public List<User> getUserByEmail(@RequestParam String email, @RequestParam String password) {

        User findUser = null;
        List<UserDTO> allNewUsers = new ArrayList<>();
        List<User> theUserLog = userService.findByEmail(email);
        System.out.println(theUserLog);

//        if (theUserLog.size() != 0) {
//            for(User newUser : theUserLog) {
//                if(newUser[2] != null ) {
//                    if(newUser.getPassword() == password){
//                        UserDTO userDTO = new UserDTO();
//                        userDTO.setId(newUser.getId());
//                        userDTO.setEmail(newUser.getEmail());
//                        userDTO.setRole(newUser.getRole());
//                        allNewUsers.add(userDTO);
//                    }
//                }
//            }
////            throw new RuntimeException("User Id did not found" + theUser);
//        }
        return theUserLog;
    }

}
