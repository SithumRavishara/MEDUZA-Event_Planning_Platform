package com.sabaragamuwa.miniproject.EventPlatformBackend.DTO;

public class PlannerDTO {
    int user_id;
    String p_name;
    String quote;
    String about;
    String address;
    String tel_number;
    String fb_link;
    String inst_link;
    String linked_link;


    public PlannerDTO() {
    }

    public PlannerDTO(int user_id, String p_name, String quote, String about, String address, String tel_number, String fb_link, String inst_link, String linked_link) {
        this.user_id = user_id;
        this.p_name = p_name;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.tel_number = tel_number;
        this.fb_link = fb_link;
        this.inst_link = inst_link;
        this.linked_link = linked_link;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
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
}
