package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.CommandData;
import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.entity.Command;
import com.polytech.dormbot.service.CommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/commands")
public class CommandController {
    private final CommandService commandService;
    private final Mapper mapper;

    @Autowired
    public CommandController(CommandService commandService, Mapper mapper) {
        this.commandService = commandService;
        this.mapper = mapper;
    }

    @GetMapping
    public List<CommandData> getAll(){
        return commandService.getAll()
                .stream()
                .map(mapper::convertToData)
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/{id}")
    public CommandData get(@PathVariable Long id) {
        Command command = commandService.get(id);

        return mapper.convertToData(command);
    }

    @PostMapping
    public CommandData save(@Validated @RequestBody CommandData commandData){
        Command command = mapper.convertToEntity(commandData);

        return mapper.convertToData(commandService.save(command));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        commandService.delete(id);
    }
}
