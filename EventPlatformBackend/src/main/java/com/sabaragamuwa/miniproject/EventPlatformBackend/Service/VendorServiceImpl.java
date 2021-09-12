package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.VendorDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Vendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class VendorServiceImpl implements VendorService {

    private VendorDAO vendorDAO;

    @Autowired
    public VendorServiceImpl(VendorDAO theVendorDAO) {
        vendorDAO = theVendorDAO;
    }

    @Override
    @Transactional
    public Vendor findByName(String theName) {
        return vendorDAO.findByName(theName);
    }

    @Override
    @Transactional
    public void save(Vendor theVendor) {
        vendorDAO.save(theVendor);
    }

    @Override
    @Transactional
    public void deleteByName(String theName) {
        vendorDAO.deleteByName(theName);
    }
}
