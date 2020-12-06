package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.CommandResponseData;
import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.entity.CommandResponse;
import com.polytech.dormbot.service.CommandResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/command_response")
public class CommandResponseController {
    private final CommandResponseService commandResponseService;
    private final Mapper mapper;

    @Autowired
    public CommandResponseController(CommandResponseService commandResponseService, Mapper mapper) {
        this.commandResponseService = commandResponseService;
        this.mapper = mapper;
    }

    @GetMapping
    public List<CommandResponseData> getCommandResponsesByCommandId(@RequestParam Long commandId){
        return commandResponseService.getByCommandId(commandId)
                .stream()
                .map(mapper::convertToData)
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/{id}")
    public CommandResponseData getSynonym(@PathVariable Long id) {
        return mapper.convertToData(commandResponseService.get(id));
    }

    @PostMapping
    public CommandResponseData addCommandResponse(@RequestBody CommandResponseData commandResponseData){
        CommandResponse commandResponse = mapper.convertToEntity(commandResponseData);

        return mapper.convertToData(commandResponseService.add(commandResponse));
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCommandResponse(@PathVariable Long id) {
        commandResponseService.delete(id);
    }
}
