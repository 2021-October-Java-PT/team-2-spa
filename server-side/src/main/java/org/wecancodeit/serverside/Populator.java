package org.wecancodeit.serverside;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.NinjaTurtles;
import org.wecancodeit.serverside.repositories.NinjaTurtlesRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private NinjaTurtlesRepository ninjaTurtlesRepository;

    @Override
    public void run(String... args) throws Exception {

        NinjaTurtles michelangelo = new NinjaTurtles("Michaelangelo", "Orange", "./images/mikeyIMG.png");
        NinjaTurtles leonardo = new NinjaTurtles("Leonardo", "Blue", "./images/leonardoIMG.png");
        NinjaTurtles donatello = new NinjaTurtles("Donatello", "Purple", "./images/DonnyIMG.png");
        NinjaTurtles raphael = new NinjaTurtles("Raphael", "Red", "./images/raphaelIMG.png");

        ninjaTurtlesRepository.save(michelangelo);
        ninjaTurtlesRepository.save(leonardo);
        ninjaTurtlesRepository.save(donatello);
        ninjaTurtlesRepository.save(raphael);
    }
}
