package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class NinjaTurtles {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String artist;
    private String fish;
    private String color;
    private String description;

    public Long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getArtist(){
        return artist;
    }

    public String getFish(){
        return fish;
    }

    public String getColor(){
        return color;
    }

    public String getDescription(){
        return description;
    }

    public NinjaTurtles(){}

    public NinjaTurtles (String name, String artist, String fish, String color, String description) {
        this.name = name;
        this.artist = artist;
        this.fish = fish;
        this.color = color;
        this.description = description;
    }
}
