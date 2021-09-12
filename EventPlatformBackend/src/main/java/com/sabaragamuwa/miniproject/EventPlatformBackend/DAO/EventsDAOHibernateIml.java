package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Events;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class EventsDAOHibernateIml implements EventsDAO {

    private EntityManager entityManager;

    @Autowired
    public EventsDAOHibernateIml(EntityManager theEntityManager) {
        this.entityManager = theEntityManager;
    }

    @Override
    public void save(Events theEvent) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theEvent);
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from Events where event_id=: eventId");

        theQuery.setParameter("eventId", theId);

        theQuery.executeUpdate();
    }

    @Override
    public Events findById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Events theEvent = currentSession.get(Events.class, theId);

        return theEvent;

    }
}
