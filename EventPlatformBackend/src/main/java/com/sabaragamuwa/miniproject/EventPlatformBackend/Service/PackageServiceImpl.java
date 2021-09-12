package com.sabaragamuwa.miniproject.EventPlatformBackend.Service;

import com.sabaragamuwa.miniproject.EventPlatformBackend.DAO.PackageDAO;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PackageServiceImpl implements PackageService {

    private PackageDAO packageDAO;

    @Autowired
    public PackageServiceImpl(PackageDAO thePackageDAO) {
        packageDAO = thePackageDAO;
    }

    @Override
    @Transactional
    public void save(Package thePackage) {
        packageDAO.save(thePackage);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        packageDAO.deleteById(theId);
    }

    @Override
    @Transactional
    public Package findById(int theId) {
        return packageDAO.findById(theId);
    }
}
