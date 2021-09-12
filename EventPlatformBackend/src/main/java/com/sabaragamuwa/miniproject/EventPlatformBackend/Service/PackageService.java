package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Package;

public interface PackageService {

    public  void save(Package thePackage);

    public void deleteById(int theId);

    public Package findById(int theId);
}
