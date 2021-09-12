package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Activity;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class ActivityDAOHibernateIml implements ActivityDAO {

    private EntityManager entityManager;

    @Autowired
    public ActivityDAOHibernateIml(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public void save(Activity theActivity) {

        Session currentSession = entityManager.unwrap(Session.class);

        currentSession.saveOrUpdate(theActivity);
    }

    @Override
    public Activity findById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Activity theActivity = currentSession.get(Activity.class,theId);

        return theActivity;
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from activity where ac_id=: activityId");

        theQuery.setParameter("activityId",theId);

        theQuery.executeUpdate();
    }
}
