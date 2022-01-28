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
public class NinjaTurtlesController {

    @Resource
    private NinjaTurtlesRepository ninjaTurtlesRepository;

}
