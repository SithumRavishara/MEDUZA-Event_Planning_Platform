package com.sabaragamuwa.miniproject.EventPlatformBackend.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "vendor")
public class Vendor {

    @Id
    @Column(name = "v_name",nullable = false)
    private String v_name;

    @Column(name = "quote")
    private String quote;

    @Column(name = "address")
    private String address;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "fb_link")
    private String fb_link;

    @Column(name = "inst_link")
    private String inst_link;

    @Column(name = "linked_link")
    private String linked_link;

    //, referencedColumnName = "id"   (join column ake tibbe)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user_id;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "v_name")
    private List<Package> packages;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "vendor_activity",
            joinColumns = @JoinColumn(name = "v_name"),
            inverseJoinColumns = @JoinColumn(name = "ac_id")
    )
    private List<Activity> activities;

    public  void  addPackage(Package tempActivity){
        if (packages == null){
            packages = new ArrayList<>();
        }
        packages.add(tempActivity);
    }

    public Vendor() {
    }

    public Vendor(String v_name, String quote, String address, String telephone, String fb_link, String inst_link, String linked_link, User user_id) {
        this.v_name = v_name;
        this.quote = quote;
        this.address = address;
        this.telephone = telephone;
        this.fb_link = fb_link;
        this.inst_link = inst_link;
        this.linked_link = linked_link;
        this.user_id = user_id;
    }

    public List<Package> getPackages() {
        return packages;
    }

    public void setPackages(List<Package> packages) {
        this.packages = packages;
    }

    public String getV_name() {
        return v_name;
    }

    public void setV_name(String v_name) {
        this.v_name = v_name;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getFb_link() {
        return fb_link;
    }

    public void setFb_link(String fb_link) {
        this.fb_link = fb_link;
    }

    public String getInst_link() {
        return inst_link;
    }

    public void setInst_link(String inst_link) {
        this.inst_link = inst_link;
    }

    public String getLinked_link() {
        return linked_link;
    }

    public void setLinked_link(String linked_link) {
        this.linked_link = linked_link;
    }

    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    @Override
    public String toString() {
        return "Vendor{" +
                "v_name='" + v_name + '\'' +
                ", quote='" + quote + '\'' +
                ", address='" + address + '\'' +
                ", telephone='" + telephone + '\'' +
                ", fb_link='" + fb_link + '\'' +
                ", inst_link='" + inst_link + '\'' +
                ", linked_link='" + linked_link + '\'' +
                ", user_id=" + user_id +
                ", packages=" + packages +
                '}';
    }
}
