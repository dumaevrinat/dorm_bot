package com.polytech.dormbot.api.v1.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Data
public class CommandData {
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private Boolean isActive;
    @NotNull
    private Integer priority;

    private List<CommandSynonymData> commandSynonyms;
    private List<CommandResponseData> commandResponses;
}
