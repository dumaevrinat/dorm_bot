package com.polytech.dormbot.api.v1.dto;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

import java.util.Map;

@Data
public class KeyboardData {
        private Long id;
        private String name;
        private JsonNode data;
}
