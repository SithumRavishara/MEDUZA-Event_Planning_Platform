package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
public class PlannerDAOHibernateIml implements PlannerDAO {

    private EntityManager entityManager;

    @Autowired
    public PlannerDAOHibernateIml(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public void save(Planner thePlanner) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(thePlanner);
    }

    @Override
    public void deleteById(String theName) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from planner where p_name=: plannerName");

        theQuery.setParameter("plannerName",theName);

        theQuery.executeUpdate();

    }

    @Override
    public List<Planner> findPlanners(String theName) {
        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("select p_name, quote, about, address, tel_number from Planner where p_name=: name");

        theQuery.setParameter("name",theName);

        List<Planner> planner = theQuery.getResultList();

//        Planner thePlanner = currentSession.get(Planner.class,theName);

        return planner;
    }
}
