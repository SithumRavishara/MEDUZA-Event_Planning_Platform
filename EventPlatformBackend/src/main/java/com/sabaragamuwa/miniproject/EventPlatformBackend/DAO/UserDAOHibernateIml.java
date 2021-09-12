package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
public class UserDAOHibernateIml implements UserDAO{

    private EntityManager entityManager;

    @Autowired
    public UserDAOHibernateIml(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public void save(User theUser) {

        Session currentSession = entityManager.unwrap(Session.class);

        currentSession.saveOrUpdate(theUser);
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from User where id=: userId");

        theQuery.setParameter("userId",theId);

        theQuery.executeUpdate();

    }

    @Override
    public User findById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        User theUser = currentSession.get(User.class,theId);

        return theUser;
    }

    @Override
    public List<User> findByEmail(String email) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("select id, email, password, role from User where email=: email");

        theQuery.setParameter("email",email);

       List<User> user = theQuery.getResultList();

        return user;
    }
}
