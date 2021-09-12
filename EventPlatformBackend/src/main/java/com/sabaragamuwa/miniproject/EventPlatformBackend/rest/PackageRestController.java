package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.PackageService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Package;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PackageRestController {

    private PackageService packageService;

    public PackageRestController(PackageService thePackageService) {
        packageService = thePackageService;
    }

    @GetMapping("/package/{theId}")
    public Package getPackage(@PathVariable int theId){

        Package thePackage = packageService.findById(theId);

        if (thePackage == null) {
            throw new RuntimeException("Package Id did not found" + theId);

        }
        return thePackage;
    }

    @PostMapping("/package")
    public Package addPackage(@RequestBody Package thePackage){

        thePackage.setPa_id(0);

        packageService.save(thePackage);
        return thePackage;
    }


    @DeleteMapping("/package/{theId}")
    public String deletePackage(@PathVariable int theId){

        Package thePackage = packageService.findById(theId);

        if (thePackage == null){
            throw  new RuntimeException("Package did not found "+ theId);

        }

        packageService.deleteById(theId);

        return "Deleted Employee Id:" + theId ;
    }
}

