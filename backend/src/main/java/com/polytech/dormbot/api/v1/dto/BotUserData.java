package com.polytech.dormbot.api.v1.dto;

import lombok.Data;

import java.util.Set;

@Data
public class BotUserData {
    private Long id;
    private String fullName;
    private Long vkId;
    private Integer roomNumber;
    private String phoneNumber;
    private Set<RegistrationData> registrations;
}
