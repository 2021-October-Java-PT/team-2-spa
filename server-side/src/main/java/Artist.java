import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Artist {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String description;
    @Lob
    private String works;

    public Artist(String name, String description, String works ) {
        this.name = name;
        this.description = description;
        this.works = works;
    }

    public Artist() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getEducationWebsiteUrl() {
        return works;
    }
}
