package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.CommandResponse;
import com.polytech.dormbot.exception.NoSuchCommandException;
import com.polytech.dormbot.exception.NoSuchCommandResponseException;
import com.polytech.dormbot.repository.CommandRepository;
import com.polytech.dormbot.repository.CommandResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandResponseService {
    private final CommandResponseRepository commandResponseRepository;
    private final CommandRepository commandRepository;

    @Autowired
    public CommandResponseService(
            CommandResponseRepository commandResponseRepository,
            CommandRepository commandRepository) {
        this.commandResponseRepository = commandResponseRepository;
        this.commandRepository = commandRepository;
    }

    public CommandResponse get(Long id) {
        return commandResponseRepository.findById(id).orElseThrow(NoSuchCommandResponseException::new);
    }

    public List<CommandResponse> getByCommandId(Long commandId) {
        return commandResponseRepository.findAllByCommand_Id(commandId);
    }

    public CommandResponse save(CommandResponse commandResponse) {
        if (!commandRepository.existsById(commandResponse.getCommand().getId())) {
            throw new NoSuchCommandException();
        }

        return commandResponseRepository.save(commandResponse);
    }

    public void delete(Long id) {
        commandResponseRepository.deleteById(id);
    }

}
