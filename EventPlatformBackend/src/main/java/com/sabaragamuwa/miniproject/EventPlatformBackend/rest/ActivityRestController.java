package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.ActivityService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Activity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ActivityRestController {

    private ActivityService activityService;

    public ActivityRestController(ActivityService theActivityService) {
        activityService = theActivityService;
    }

    @GetMapping("/activity/{theId}")
    public Activity getUser(@PathVariable int theId){

        Activity theActivity = activityService.findById(theId);

        if (theActivity == null) {
            throw new RuntimeException("Activity Id did not found" + theId);

        }
        return theActivity;
    }

    @PostMapping("/activity")
    public Activity addActivity(@RequestBody Activity theActivity){

        theActivity.setAc_id(0);

        activityService.save(theActivity);
        return theActivity;
    }

//    @PutMapping("/users")
//    public User updateUser(@RequestBody User theUser){
//
//        userService.save(theUser);
//
//        return theUser;
//    }

    @DeleteMapping("/activity/{theId}")
    public String deleteUser(@PathVariable int theId){

        Activity theActivity = activityService.findById(theId);

        if (theActivity == null){
            throw  new RuntimeException("Activity did not found "+ theId);

        }

        activityService.deleteById(theId);

        return "Deleted Activity Id:" + theId ;
    }

}
