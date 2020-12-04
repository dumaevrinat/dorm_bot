package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.BotUser;
import com.polytech.dormbot.exception.NoSuchBotUserException;
import com.polytech.dormbot.repository.BotUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BotUserService {
    private final BotUserRepository botUserRepository;

    @Autowired
    public BotUserService(BotUserRepository botUserRepository) {
        this.botUserRepository = botUserRepository;
    }

    public BotUser get(Long id) {
        return botUserRepository.findById(id).orElseThrow(NoSuchBotUserException::new);
    }

    public BotUser add(BotUser botUser) {
        return botUserRepository.save(botUser);
    }

    public void delete(Long id) {
        botUserRepository.deleteById(id);
    }
}