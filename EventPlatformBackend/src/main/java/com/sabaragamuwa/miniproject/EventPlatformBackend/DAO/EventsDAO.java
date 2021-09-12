package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Events;

public interface EventsDAO {

    public  void save(Events theEvent);

    public void deleteById(int theId);

    public Events findById(int theId);
}
