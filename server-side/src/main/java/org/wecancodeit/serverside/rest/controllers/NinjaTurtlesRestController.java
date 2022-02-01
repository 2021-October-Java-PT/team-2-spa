package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.NinjaTurtles;
import org.wecancodeit.serverside.repositories.NinjaTurtlesRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController
@CrossOrigin
public class NinjaTurtlesRestController {

    @Resource
    private NinjaTurtlesRepository ninjaTurtlesRepository;

    @GetMapping("/api/ninjaTurtles")
    public Collection<NinjaTurtles> getNinjaTurtles() {
        return (Collection<NinjaTurtles>) ninjaTurtlesRepository.findAll();
    }

    @GetMapping("/api/ninjaTurtles/{turtleId}")
    public Optional<NinjaTurtles> getNinjaTurtles(@PathVariable Long turtleId) {
        return ninjaTurtlesRepository.findById(turtleId);
    }

    @PostMapping("/api/ninjaTurtles/add-ninjaTurtles")
    public Collection<NinjaTurtles> addNinjaTurtles(@RequestBody String body) throws JSONException {
        JSONObject newNinjaTurtles = new JSONObject(body);
        String ninjaTurtlesName = newNinjaTurtles.getString("name");
        boolean ninjaTurtlesIsSelected = newNinjaTurtles.getBoolean("isSelected");
        Optional<NinjaTurtles> ninjaTurtlesToAddOpt = ninjaTurtlesRepository.findByName("ninjaTurtlesName");
        if (ninjaTurtlesToAddOpt.isEmpty()) {
            NinjaTurtles ninjaTurtlesToAdd = new NinjaTurtles();
            ninjaTurtlesRepository.save(ninjaTurtlesToAdd);
        }
        return (Collection<NinjaTurtles>) ninjaTurtlesRepository.findAll();

    }
    @PutMapping("/api/ninjaTurtles/{turtleId}/select-ninjaTurtles/")
    public Collection <NinjaTurtles> selectNinjaTurtles(@PathVariable Long turtleId, @RequestBody String body) throws JSONException {
        JSONObject newNinjaTurtles = new JSONObject(body);
        boolean ninjaTurtlesIsSelected = newNinjaTurtles.getBoolean("isSelected");
        Optional<NinjaTurtles> ninjaTurtlesToSelectOpt = ninjaTurtlesRepository.findById(turtleId);

        if(ninjaTurtlesToSelectOpt.isPresent()) {
            ninjaTurtlesToSelectOpt.get().setSelected(ninjaTurtlesIsSelected);
            ninjaTurtlesRepository.save(ninjaTurtlesToSelectOpt.get());
        }
        return (Collection<NinjaTurtles>) ninjaTurtlesRepository.findAll();
    }

    @DeleteMapping("/api/ninjaTurtles/{turtleId}/delete-ninjaTurtles")
    public Collection <NinjaTurtles> deleteNinjaTurtles(@PathVariable Long turtleId) throws JSONException {
        Optional<NinjaTurtles> ninjaTurtlesToDeleteOpt = ninjaTurtlesRepository.findById(turtleId);
        if(ninjaTurtlesToDeleteOpt.isPresent()){
            ninjaTurtlesRepository.delete(ninjaTurtlesToDeleteOpt.get());
        }
        return (Collection<NinjaTurtles>) ninjaTurtlesRepository.findAll();
    }
}
