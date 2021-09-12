package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Package;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class PackageDAOHibernateIml implements PackageDAO {

    private EntityManager entityManager;

    @Autowired
    public PackageDAOHibernateIml(EntityManager theEntityManager) {
        this.entityManager = theEntityManager;
    }

    @Override
    public void save(Package thePackage) {
        Session currentSession = entityManager.unwrap(Session.class);

        currentSession.saveOrUpdate(thePackage);
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from package where pa_id=: packId");

        theQuery.setParameter("packId",theId);

        theQuery.executeUpdate();
    }

    @Override
    public Package findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);

        Package thePackage = currentSession.get(Package.class,theId);

        return thePackage;
    }
}
