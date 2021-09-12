package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.EventsDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Events;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventServiceImpl implements EventsService {

    private EventsDAO eventsDAO;

    @Autowired
    public EventServiceImpl(EventsDAO theEventsDAO) {
        eventsDAO = theEventsDAO;
    }

    @Override
    @Transactional
    public Events findById(int theId) {
        return eventsDAO.findById(theId);
    }

    @Override
    @Transactional
    public void save(Events theEvent) {
        eventsDAO.save(theEvent);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        eventsDAO.deleteById(theId);
    }
}
