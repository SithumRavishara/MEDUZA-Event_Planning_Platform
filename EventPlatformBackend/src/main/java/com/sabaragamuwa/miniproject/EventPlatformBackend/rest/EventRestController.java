package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.ActivityService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.EventsService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Events;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EventRestController {

    private EventsService eventsService;

    public EventRestController(EventsService theEventService) {
        eventsService = theEventService;
    }

    @GetMapping("/events/{theId}")
    public Events getEvent(@PathVariable int theId){

        Events theEvents = eventsService.findById(theId);

        if (theEvents == null) {
            throw new RuntimeException("Event Id did not found" + theId);

        }
        return theEvents;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/events")
    public Events addEvent(@RequestBody Events theEvent){

        theEvent.setEvent_id(0);

        eventsService.save(theEvent);
        return theEvent;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/events")
    public String deleteEvent(@RequestParam int theId) {

        Events theEvent = eventsService.findById(theId);

        if (theEvent == null){
            throw  new RuntimeException("Event did not found "+ theId);

        }

       eventsService.deleteById(theId);

        return "Deleted Event Id:" + theId ;
    }
}
