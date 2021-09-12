package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Activity;

public interface ActivityService {
    public  void save(Activity theActivity);

    public void deleteById(int theId);

    public Activity findById(int theId);
}
