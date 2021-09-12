package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.PlannerDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlannerServiceImpl implements PlannerService {

    private PlannerDAO plannerDAO;

    @Autowired
    public PlannerServiceImpl(PlannerDAO thePlannerDAO) {
        plannerDAO = thePlannerDAO;
    }

    @Override
    @Transactional
    public List<Planner> findByName(String theName) {
        return plannerDAO.findPlanners(theName);
    }

    @Override
    @Transactional
    public void save(Planner thePlanner) {
        plannerDAO.save(thePlanner);
    }

    @Override
    @Transactional
    public void deleteByName(String theName) {
        plannerDAO.deleteById(theName);
    }
}
