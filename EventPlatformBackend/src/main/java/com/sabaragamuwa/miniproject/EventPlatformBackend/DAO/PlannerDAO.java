package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;

import java.util.List;

public interface PlannerDAO {
    public  void save(Planner thePlanner);

    public void deleteById(String theName);

    public List<Planner> findPlanners(String theName);
}
