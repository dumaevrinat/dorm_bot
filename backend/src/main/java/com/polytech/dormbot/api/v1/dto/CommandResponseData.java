package com.polytech.dormbot.api.v1.dto;

import lombok.Data;

@Data
public class CommandResponseData {
    private Long id;
    private String response;
    private Long commandId;
}
