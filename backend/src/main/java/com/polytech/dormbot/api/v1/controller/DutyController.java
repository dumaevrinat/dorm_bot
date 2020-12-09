package com.polytech.dormbot.api.v1.controller;

import com.polytech.dormbot.api.v1.dto.DutyData;
import com.polytech.dormbot.api.v1.dto.Mapper;
import com.polytech.dormbot.entity.Duty;
import com.polytech.dormbot.service.DutyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin()
@RequestMapping("/api/v1/duty")
public class DutyController {
    private final DutyService dutyService;
    private final Mapper mapper;

    @Autowired
    public DutyController(DutyService dutyService, Mapper mapper) {
        this.dutyService = dutyService;
        this.mapper = mapper;
    }

    @GetMapping
    public List<DutyData> getAll(){
        return dutyService.getAll()
                .stream()
                .map(mapper::convertToData)
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/{id}")
    public DutyData get(@PathVariable Long id) {
        return mapper.convertToData(dutyService.get(id));
    }

    @PostMapping
    public DutyData save(@RequestBody DutyData dutyData){
        Duty duty = mapper.convertToEntity(dutyData);
        return mapper.convertToData(dutyService.save(duty));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        dutyService.delete(id);
    }
}
