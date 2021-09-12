package com.sabaragamuwa.miniproject.EventPlatformBackend.entity;

import javax.persistence.*;

@Entity
@Table(name = "package")
public class Package {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pa_id")
    private int pa_id;

    @Column(name = "topic")
    private String topic;

    @Column(name = "s_description")
    private String s_description;

    @Column(name = "price")
    private double price;

    @Column(name = "rules")
    private String rules;

//    @ManyToOne( cascade = CascadeType.ALL)
//    @JoinColumn(name = "v_name")
//    private Vendor v_name;

    public Package() {
    }

    public Package(String topic, String s_description, double price, String rules) {
        this.topic = topic;
        this.s_description = s_description;
        this.price = price;
        this.rules = rules;
    }

    public int getPa_id() {
        return pa_id;
    }

    public void setPa_id(int pa_id) {
        this.pa_id = pa_id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getS_description() {
        return s_description;
    }

    public void setS_description(String s_description) {
        this.s_description = s_description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }


    @Override
    public String toString() {
        return "Package{" +
                "pa_id=" + pa_id +
                ", topic='" + topic + '\'' +
                ", s_description='" + s_description + '\'' +
                ", price=" + price +
                ", rules='" + rules + '\'' +
                '}';
    }
}
