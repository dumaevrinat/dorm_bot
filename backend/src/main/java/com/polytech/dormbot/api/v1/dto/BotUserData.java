package com.polytech.dormbot.api.v1.dto;

import lombok.Data;
import javax.validation.constraints.NotNull;

import java.util.Set;

@Data
public class BotUserData {
    private Long id;
    @NotNull
    private String fullName;
    @NotNull
    private Long vkId;
    @NotNull
    private Integer roomNumber;
    @NotNull
    private String phoneNumber;
    @NotNull
    private String type;
    @NotNull
    private Set<RegistrationData> registrations;
}
