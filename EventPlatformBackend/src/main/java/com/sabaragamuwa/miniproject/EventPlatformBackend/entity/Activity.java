package com.sabaragamuwa.miniproject.EventPlatformBackend.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "activity")
public class Activity {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ac_id")
    private int ac_id;

    @Column(name = "ac_name")
    private String ac_name;

    @Column(name = "ac_description")
    private String ac_description;

    @Column(name = "ac_type")
    private String ac_type;

    @Column(name = "estimate_bdg")
    private double estimate_bdg;

    @Column(name = "priority_bdg")
    private double priority_bdg;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "vendor_activity",
            joinColumns = @JoinColumn(name = "ac_id"),
            inverseJoinColumns = @JoinColumn(name = "v_name")
    )
    private List<Vendor> vendors;

    public  void  addPlanner(Vendor tempVendor){
        if (vendors == null){
            vendors = new ArrayList<>();
        }
        vendors.add(tempVendor);
    }
//    @ManyToOne( cascade = CascadeType.ALL)
//    @JoinColumn(name = "event_id")
//    private Events event_id;

    public Activity() {
    }

    public Activity(String ac_name, String ac_description, String ac_type, double estimate_bdg, double priority_bdg) {
        this.ac_name = ac_name;
        this.ac_description = ac_description;
        this.ac_type = ac_type;
        this.estimate_bdg = estimate_bdg;
        this.priority_bdg = priority_bdg;
    }

    public int getAc_id() {
        return ac_id;
    }

    public void setAc_id(int ac_id) {
        this.ac_id = ac_id;
    }

    public String getAc_name() {
        return ac_name;
    }

    public void setAc_name(String ac_name) {
        this.ac_name = ac_name;
    }

    public String getAc_description() {
        return ac_description;
    }

    public void setAc_description(String ac_description) {
        this.ac_description = ac_description;
    }

    public String getAc_type() {
        return ac_type;
    }

    public void setAc_type(String ac_type) {
        this.ac_type = ac_type;
    }

    public double getEstimate_bdg() {
        return estimate_bdg;
    }

    public void setEstimate_bdg(double estimate_bdg) {
        this.estimate_bdg = estimate_bdg;
    }

    public double getPriority_bdg() {
        return priority_bdg;
    }

    public void setPriority_bdg(double priority_bdg) {
        this.priority_bdg = priority_bdg;
    }


    public List<Vendor> getVendors() {
        return vendors;
    }

    public void setVendors(List<Vendor> vendors) {
        this.vendors = vendors;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "ac_id=" + ac_id +
                ", ac_name=" + ac_name +
                ", ac_description=" + ac_description +
                ", ac_type=" + ac_type +
                ", estimate_bdg=" + estimate_bdg +
                ", priority_bdg=" + priority_bdg +
                '}';
    }
}
