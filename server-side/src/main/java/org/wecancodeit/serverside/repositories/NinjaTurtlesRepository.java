package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.models.NinjaTurtles;

import java.util.Optional;
@Repository
public interface NinjaTurtlesRepository extends CrudRepository<NinjaTurtles, Long>{
    Optional<NinjaTurtles> findByName(String ninjaTurtlesName);
}
