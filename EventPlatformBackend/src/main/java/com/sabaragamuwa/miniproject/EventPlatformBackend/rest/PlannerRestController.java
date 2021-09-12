package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DTO.PlannerDTO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.PlannerService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.UserService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apis")
public class PlannerRestController {

    private PlannerService plannerService;

    @Autowired
    private UserService userService;

    public PlannerRestController(PlannerService thePlannerService) {
        plannerService = thePlannerService;
    }

    @GetMapping("/planner/{plannerName}")
    public Planner getUser(@PathVariable String plannerName){

        List<Planner> thePlanner = plannerService.findByName(plannerName);

        if (thePlanner == null) {
            throw new RuntimeException("Planner Name did not found" + plannerName);

        }
        return null;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/planner")
    public Planner addPlanner(@RequestBody PlannerDTO thePlanner){

//        thePlanner.setP_name(null);

        Planner planner = new Planner();

        User user = new User();

        user = userService.findById(thePlanner.getUser_id());

        planner.setUser_id(user);
        planner.setAbout(thePlanner.getAbout());
        planner.setP_name(thePlanner.getP_name());
        planner.setAddress(thePlanner.getAddress());
        planner.setQuote(thePlanner.getQuote());
        planner.setFb_link(thePlanner.getFb_link());
        planner.setInst_link(thePlanner.getInst_link());
        planner.setLinked_link(thePlanner.getLinked_link());
        planner.setTel_number(thePlanner.getTel_number());

        List<Planner> tempPlanner = plannerService.findByName(thePlanner.getP_name());

        if (tempPlanner.size() != 0) {

            return  null;
//            throw new RuntimeException("Planner Name Alreay Exists. Please enter another one!");
        } else {
            plannerService.save(planner);
            return planner;
        }

    }

    @PutMapping("/planner")
    public Planner updatePlanner(@RequestBody Planner thePlanner){

        plannerService.save(thePlanner);

        return thePlanner;
    }

    @DeleteMapping("/planner/{plannerName}")
    public String deletePlanner(@PathVariable String plannerName){

        List<Planner> thePlanner = plannerService.findByName(plannerName);

        if (thePlanner == null){
            throw  new RuntimeException("Planner did not found "+ plannerName);

        }

        plannerService.deleteByName(plannerName);

        return "Deleted Planner Name:" + plannerName ;
    }
}
