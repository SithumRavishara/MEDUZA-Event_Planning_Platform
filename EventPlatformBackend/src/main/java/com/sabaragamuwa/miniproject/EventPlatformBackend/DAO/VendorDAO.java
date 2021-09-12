package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Vendor;

public interface VendorDAO {

    public  void save(Vendor theVendor);

    public void deleteByName(String theName);

    public Vendor findByName(String theName);
}
