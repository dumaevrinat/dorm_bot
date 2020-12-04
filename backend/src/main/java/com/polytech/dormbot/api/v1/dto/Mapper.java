package com.polytech.dormbot.api.v1.dto;

import com.polytech.dormbot.entity.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    private final ModelMapper modelMapper;

    @Autowired
    public Mapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public CommandData convertToData(Command command) {
        return modelMapper.map(command, CommandData.class);
    }
    
    public Command convertToEntity(CommandData commandData) {
        return modelMapper.map(commandData, Command.class);
    }

    public CommandStatisticData convertToData(CommandStatistic commandStatistic) {
        CommandStatisticData commandStatisticData = modelMapper.map(commandStatistic, CommandStatisticData.class);
        commandStatisticData.setCommandId(commandStatistic.getCommand().getId());
        
        return commandStatisticData;
    }

    public CommandStatistic convertToEntity(CommandStatisticData commandStatisticData) {
        CommandStatistic commandStatistic = modelMapper.map(commandStatisticData, CommandStatistic.class);
        
        Command command = new Command();
        command.setId(commandStatisticData.getCommandId());
        commandStatistic.setCommand(command);
        
        return commandStatistic;
    }

    public CommandSynonymData convertToData(CommandSynonym commandSynonym) {
        CommandSynonymData commandSynonymData = modelMapper.map(commandSynonym, CommandSynonymData.class);
        commandSynonymData.setCommandId(commandSynonym.getCommand().getId());

        return commandSynonymData;
    }

    public CommandSynonym convertToEntity(CommandSynonymData commandSynonymData) {
        CommandSynonym commandSynonym = modelMapper.map(commandSynonymData, CommandSynonym.class);

        Command command = new Command();
        command.setId(commandSynonymData.getCommandId());
        commandSynonym.setCommand(command);

        return commandSynonym;
    }

    public CommandResponseData convertToData(CommandResponse commandResponse) {
        CommandResponseData commandResponseData = modelMapper.map(commandResponse, CommandResponseData.class);
        commandResponseData.setCommandId(commandResponse.getCommand().getId());

        return commandResponseData;
    }

    public CommandResponse convertToEntity(CommandResponseData commandResponseData) {
        CommandResponse commandResponse = modelMapper.map(commandResponseData, CommandResponse.class);

        Command command = new Command();
        command.setId(commandResponseData.getCommandId());
        commandResponse.setCommand(command);

        return commandResponse;
    }
    
    public DutyData convertToData(Duty duty) {
        return modelMapper.map(duty, DutyData.class);
    }
    
    public Duty convertToEntity(DutyData dutyData) {
        return modelMapper.map(dutyData, Duty.class);
    }

    public RegistrationData convertToData(Registration registration) {
        RegistrationData registrationData = modelMapper.map(registration, RegistrationData.class);
        registrationData.setBotUserId(registration.getBotUser().getId());

        return registrationData;
    }

    public Registration convertToEntity(RegistrationData registrationData) {
        Registration registration = modelMapper.map(registrationData, Registration.class);

        BotUser botUser = new BotUser();
        botUser.setId(registrationData.getBotUserId());
        registration.setBotUser(botUser);

        return registration;
    }

    public BotUserData convertToData(BotUser botUser) {
        return modelMapper.map(botUser, BotUserData.class);
    }

    public BotUser convertToEntity(BotUserData botUserData) {
        return modelMapper.map(botUserData, BotUser.class);
    }

    public UserData convertToData(User user) {
        return modelMapper.map(user, UserData.class);
    }

    public User convertToEntity(UserData userData) {
        return modelMapper.map(userData, User.class);
    }
}
