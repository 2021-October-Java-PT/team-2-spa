package org.wecancodeit.serverside.models;

import javax.persistence.*;

@Entity
public class NinjaTurtles {

    @Id
    @GeneratedValue
    private Long turtleId;
    private String name;
    private String color;
    private String turtleImage;

    public NinjaTurtles(String name, String color, String turtleImage) {
        this.name = name;
        this.color = color;
        this.turtleImage = turtleImage;
    }

    public Long getTurtleId() {
        return turtleId;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }


    public String getTurtleImage() {
        return turtleImage;
    }

    public NinjaTurtles(){}

}
