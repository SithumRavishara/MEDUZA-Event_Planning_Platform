package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Events;

public interface EventsService {

    public Events findById(int theId);

    public void save(Events theEvent);

    public  void deleteById(int theId);
}
