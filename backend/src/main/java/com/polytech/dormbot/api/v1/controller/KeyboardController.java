package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.DutyData;
import com.polytech.dormbot.api.v1.dto.KeyboardData;
import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.entity.Duty;
import com.polytech.dormbot.entity.Keyboard;
import com.polytech.dormbot.service.KeyboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/keyboard")
public class KeyboardController {

    public final KeyboardService keyboardService;
    public final Mapper mapper;

    @Autowired
    public KeyboardController(KeyboardService keyboardService, Mapper mapper) {
        this.keyboardService = keyboardService;
        this.mapper = mapper;
    }

    @GetMapping
    public List<KeyboardData> getAll(){
        return keyboardService.getAll()
                .stream()
                .map(mapper::convertToData)
                .collect(Collectors.toList());
    }

    @PostMapping
    public KeyboardData save(@RequestBody KeyboardData keyboardData){
        Keyboard keyboard = mapper.convertToEntity(keyboardData);
        return mapper.convertToData(keyboardService.save(keyboard));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        keyboardService.delete(id);
    }
}
