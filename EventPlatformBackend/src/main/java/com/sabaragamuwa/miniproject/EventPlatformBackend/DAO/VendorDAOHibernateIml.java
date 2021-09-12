package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Planner;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Vendor;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class VendorDAOHibernateIml implements VendorDAO {

    private EntityManager entityManager;

    @Autowired
    public VendorDAOHibernateIml(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public void save(Vendor theVendor) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theVendor);
    }

    @Override
    public void deleteByName(String theName) {

        Session currentSession = entityManager.unwrap(Session.class);

        Query theQuery = currentSession.createQuery("delete from vendor where v_name=: vendorName");

        theQuery.setParameter("vendorName",theName);

        theQuery.executeUpdate();
    }

    @Override
    public Vendor findByName(String theName) {
        Session currentSession = entityManager.unwrap(Session.class);

        Vendor theVendor = currentSession.get(Vendor.class,theName);

        return theVendor;
    }
}
