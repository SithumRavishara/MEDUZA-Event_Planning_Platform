package com.sabaragamuwa.miniproject.EventPlatformBackend.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "event")
public class Events {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private int event_id;

    @Column(name = "e_name")
    private String e_name;

    @Column(name = "e_description")
    private String e_description;

    @Column(name = "date")
    private Date date;

    @Column(name = "e_type")
    private String e_type;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id")
    private List<Activity> activities;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "planner_event",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "p_name")
    )
    private List<Planner> planners;

    public  void  addActivity(Activity tempActivity){
        if (activities == null){
            activities = new ArrayList<>();
        }
        activities.add(tempActivity);
    }

    public  void  addPlanner(Planner tempPlanner){
        if (planners == null){
            planners = new ArrayList<>();
        }
        planners.add(tempPlanner);
    }

    public Events() {
    }

    public Events(String e_name, String e_description, Date date, String e_type) {
        this.e_name = e_name;
        this.e_description = e_description;
        this.date = date;
        this.e_type = e_type;
    }

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public String getE_name() {
        return e_name;
    }

    public void setE_name(String e_name) {
        this.e_name = e_name;
    }

    public String getE_description() {
        return e_description;
    }

    public void setE_description(String e_description) {
        this.e_description = e_description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getE_type() {
        return e_type;
    }

    public void setE_type(String e_type) {
        this.e_type = e_type;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    public List<Planner> getPlanners() {
        return planners;
    }

    public void setPlanners(List<Planner> planners) {
        this.planners = planners;
    }

    @Override
    public String toString() {
        return "Events{" +
                "event_id=" + event_id +
                ", e_name='" + e_name + '\'' +
                ", e_description='" + e_description + '\'' +
                ", date=" + date +
                ", e_type='" + e_type + '\'' +
                ", activities=" + activities +
                '}';
    }
}
