package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.BotUser;
import com.polytech.dormbot.exception.NoSuchUserException;
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

    public BotUser getBotUser(Long id) {
        return botUserRepository.findById(id).orElseThrow(NoSuchUserException::new);
    }

    public BotUser addBotUser(BotUser botUser) {
        return botUserRepository.save(botUser);
    }

    public void deleteBotUser(Long id) {
        botUserRepository.deleteById(id);
    }
}
