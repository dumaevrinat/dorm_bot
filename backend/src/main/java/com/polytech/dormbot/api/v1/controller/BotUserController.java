package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.BotUserData;
import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.entity.BotUser;
import com.polytech.dormbot.service.BotUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/bot_users")
public class BotUserController {
    private final BotUserService botUserService;
    private final Mapper mapper;

    @Autowired
    public BotUserController(BotUserService botUserService, Mapper mapper) {
        this.botUserService = botUserService;
        this.mapper = mapper;
    }

    @GetMapping
    public List<BotUserData> getAll() {
        return botUserService.getAll()
                .stream()
                .map(mapper::convertToData)
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/{id}")
    public BotUserData get(@PathVariable Long id) {
        return mapper.convertToData(botUserService.get(id));
    }

    @PostMapping
    public BotUserData save(@Validated @RequestBody BotUserData botUserData) {
        BotUser botUser = mapper.convertToEntity(botUserData);
        return mapper.convertToData(botUserService.save(botUser));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        botUserService.delete(id);
    }
}
