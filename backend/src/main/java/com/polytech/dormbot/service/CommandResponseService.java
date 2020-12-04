package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.CommandResponse;
import com.polytech.dormbot.exception.NoSuchCommandResponseException;
import com.polytech.dormbot.repository.CommandResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandResponseService {
    private final CommandResponseRepository commandResponseRepository;

    @Autowired
    public CommandResponseService(CommandResponseRepository commandResponseRepository) {
        this.commandResponseRepository = commandResponseRepository;
    }

    public CommandResponse get(Long id) {
        return commandResponseRepository.findById(id).orElseThrow(NoSuchCommandResponseException::new);
    }

    public List<CommandResponse> getByCommandId(Long commandId) {
        return commandResponseRepository.findAllByCommand_Id(commandId);
    }

    public CommandResponse add(CommandResponse commandResponse) {
        return commandResponseRepository.save(commandResponse);
    }

    public void delete(Long id) {
        commandResponseRepository.deleteById(id);
    }

}
