package com.sabaragamuwa.miniproject.EventPlatformBackend.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "planner")
public class Planner {

    @Id
    @Column(name = "p_name",nullable = false)
    private String p_name;

    @Column(name = "quote")
    private String quote;

    @Column(name = "about")
    private String about;

    @Column(name = "address")
    private String address;

    @Column(name = "tel_number")
    private String tel_number;

    @Column(name = "fb_link")
    private String fb_link;

    @Column(name = "inst_link")
    private String inst_link;

    @Column(name = "linked_link")
    private String linked_link;

//    , referencedColumnName = "id"   (join column ake tibbe)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "id" )
    private User user_id;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "planner_event",
            joinColumns = @JoinColumn(name = "p_name"),
            inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private List<Events> events;

    public Planner() {
    }

    public Planner(String p_name, String quote, String about, String address, String tel_number, String fb_link, String inst_link, String linked_link, User user_id) {
        this.p_name = p_name;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.tel_number = tel_number;
        this.fb_link = fb_link;
        this.inst_link = inst_link;
        this.linked_link = linked_link;
        this.user_id = user_id;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTel_number() {
        return tel_number;
    }

    public void setTel_number(String tel_number) {
        this.tel_number = tel_number;
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

    public List<Events> getEvents() {
        return events;
    }

    public void setEvents(List<Events> events) {
        this.events = events;
    }

    @Override
    public String toString() {
        return "Planner{" +
                "p_name='" + p_name + '\'' +
                ", quote='" + quote + '\'' +
                ", about='" + about + '\'' +
                ", address='" + address + '\'' +
                ", tel_number='" + tel_number + '\'' +
                ", fb_link='" + fb_link + '\'' +
                ", inst_link='" + inst_link + '\'' +
                ", linked_link='" + linked_link + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
