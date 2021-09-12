package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Vendor;

public interface VendorService {

    public Vendor findByName(String theName);

    public void save(Vendor theVendor);

    public  void deleteByName(String theName);
}
