package com.sabaragamuwa.miniproject.EventPlatformBackend.rest;

import com.sabaragamuwa.miniproject.EventPlatformBackend.Service.VendorService;
import com.sabaragamuwa.miniproject.EventPlatformBackend.entity.Vendor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class VendorRestController {

    private VendorService vendorService;

    public VendorRestController(VendorService theVendorService) {
        vendorService = theVendorService;
    }

    @GetMapping("/vendor/{vendorName}")
    public Vendor getVendor(@PathVariable String vendorName){

        Vendor theVendor = vendorService.findByName(vendorName);

        if (theVendor == null) {
            throw new RuntimeException("Vendor Name did not found" + vendorName);

        }
        return theVendor;
    }

    @PostMapping("/vendor")
    public Vendor addVendor(@RequestBody Vendor theVendor){

        theVendor.setV_name(null);

        vendorService.save(theVendor);
        return theVendor;
    }

    @PutMapping("/vendor")
    public Vendor updateVendor(@RequestBody Vendor theVendor){

        vendorService.save(theVendor);

        return theVendor;
    }

    @DeleteMapping("/vendor/{vendorName}")
    public String deleteVendor(@PathVariable String vendorName){

        Vendor theVendor = vendorService.findByName(vendorName);

        if (theVendor == null){
            throw  new RuntimeException("Vendor did not found "+ vendorName);

        }

        vendorService.deleteByName(vendorName);

        return "Deleted Vendor Name:" + vendorName ;
    }
}
