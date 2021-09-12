package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.ActivityDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ActivityServiceImpl implements ActivityService {

    private ActivityDAO activityDAO;

    @Autowired
    public ActivityServiceImpl(ActivityDAO theActivityDAO) {
        activityDAO = theActivityDAO;
    }

    @Override
    @Transactional
    public void save(Activity theActivity) {
        activityDAO.save(theActivity);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        activityDAO.deleteById(theId);
    }

    @Override
    @Transactional
    public Activity findById(int theId) {
        return activityDAO.findById(theId);
    }
}
