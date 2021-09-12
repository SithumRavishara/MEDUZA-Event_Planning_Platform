package com.sabaragamuwa.miniproject.EventPlatformBackend.DAO;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Package;

public interface PackageDAO {

    public  void save(Package thePackage);

    public void deleteById(int theId);

    public Package findById(int theId);
}
