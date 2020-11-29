package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.api.v1.dto.BotUserData;
import com.polytech.dormbot.entity.BotUser;
import com.polytech.dormbot.service.BotUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/{id}")
    public BotUserData getBotUser(@PathVariable Long id) {
        return mapper.convertToData(botUserService.getBotUser(id));
    }

    @PostMapping
    public BotUserData addBotUser(@RequestBody BotUserData botUserData){
        BotUser botUser = mapper.convertToEntity(botUserData);
        return mapper.convertToData(botUserService.addBotUser(botUser));
    }

    @DeleteMapping(value = "/{id}")
    public void deleteDuty(@PathVariable Long id) {
        botUserService.deleteBotUser(id);
    }
}
