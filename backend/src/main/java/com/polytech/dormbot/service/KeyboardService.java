package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.Command;
import com.polytech.dormbot.entity.Keyboard;
import com.polytech.dormbot.exception.NoSuchCommandException;
import com.polytech.dormbot.repository.KeyboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class KeyboardService {
    public final KeyboardRepository keyboardRepository;

    @Autowired
    public KeyboardService(KeyboardRepository keyboardRepository) {
        this.keyboardRepository = keyboardRepository;
    }

    public List<Keyboard> getAll() {
        return (List<Keyboard>) keyboardRepository.findAll();
    }

    @Transactional
    public Keyboard save(Keyboard keyboard) {
        return keyboardRepository.save(keyboard);
    }

    public void delete(Long id) {
        keyboardRepository.deleteById(id);
    }
}
