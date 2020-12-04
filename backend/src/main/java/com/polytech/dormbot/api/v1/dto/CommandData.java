package com.polytech.dormbot.api.v1.dto;

import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class CommandData {
    private Long id;
    private String name;
    private Boolean isActive;
    private Integer priority;
    private List<CommandSynonymData> commandSynonyms;
    private List<CommandResponseData> commandResponses;
}
