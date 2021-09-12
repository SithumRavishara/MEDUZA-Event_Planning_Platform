package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Activity;

public interface ActivityDAO {

    public void save(Activity theActivity);

    public Activity findById(int theId);

    public void deleteById(int theId);
}
