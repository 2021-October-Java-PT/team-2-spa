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

        NinjaTurtles michelangelo = new NinjaTurtles("Michaelangelo", "Michaelangelo", "//fill in fish", "Orange", "//fill in description", "//fill in image");
        ninjaTurtlesRepository.save(michelangelo);

        NinjaTurtles leonardo = new NinjaTurtles("Leonardo", "Leonardo da Vinci", "//fill in fish", "Blue", "//fill in description", "//fill in image");
        ninjaTurtlesRepository.save(leonardo);

        NinjaTurtles donatello = new NinjaTurtles("Donatello", "Donato di Niccolo di Betto Bardi aka Donatello", "//fill in fish", "Purple", "//fill in description", "fill in image");
        ninjaTurtlesRepository.save(donatello);

        NinjaTurtles raphael = new NinjaTurtles("Raphael", "Raffaello Sanzio da Urbino aka Raphael", "//fill in fish", "Red", "//fill in description", "fill in image");
        ninjaTurtlesRepository.save(raphael);

        ninjaTurtlesRepository.save(michelangelo);
        ninjaTurtlesRepository.save(leonardo);
        ninjaTurtlesRepository.save(donatello);
        ninjaTurtlesRepository.save(raphael);
    }
}
