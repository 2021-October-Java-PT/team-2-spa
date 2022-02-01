package org.wecancodeit.serverside.models;

import javax.persistence.*;

@Entity
public class NinjaTurtles {

    @Id
    @GeneratedValue
    private Long turtleId;

    @Lob
    private String name;
    private String artist;
    private String fish;
    private String color;
    private String description;
    private String turtleImage;
    private boolean isSelected;

    public Long getTurtleId() {
        return turtleId;
    }

    public String getName() {
        return name;
    }

    public String getArtist() {
        return artist;
    }

    public String getFish() {
        return fish;
    }

    public String getColor() {
        return color;
    }

    public String getDescription() {
        return description;
    }

    public String getTurtleImage() {
        return turtleImage;
    }

    public boolean getSelected() { return isSelected;}

    public void setSelected(boolean ninjaTurtlesIsSelected) {
        this.isSelected = ninjaTurtlesIsSelected;
    }

    public NinjaTurtles(){}


    public NinjaTurtles(String name, String artist, String fish, String color, String description, String turtleImage, boolean isSelected) {
        this.name = name;
        this.artist = artist;
        this.fish = fish;
        this.color = color;
        this.description = description;
        this.turtleImage = turtleImage;
        this.isSelected = isSelected;
    }
}
