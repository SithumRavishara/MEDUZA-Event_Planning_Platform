package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;

import java.util.List;

public interface PlannerService {

    public List<Planner> findByName(String theName);

    public void save(Planner thePlanner);

    public  void deleteByName(String theName);
}
