package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.CommandSynonym;
import com.polytech.dormbot.exception.NoSuchCommandException;
import com.polytech.dormbot.exception.NoSuchCommandSynonymException;
import com.polytech.dormbot.repository.CommandRepository;
import com.polytech.dormbot.repository.CommandSynonymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandSynonymService {
    private final CommandSynonymRepository commandSynonymRepository;
    private final CommandRepository commandRepository;

    @Autowired
    public CommandSynonymService(
            CommandSynonymRepository commandSynonymRepository,
            CommandRepository commandRepository) {
        this.commandSynonymRepository = commandSynonymRepository;
        this.commandRepository = commandRepository;
    }

    public CommandSynonym get(Long id) {
        return commandSynonymRepository.findById(id).orElseThrow(NoSuchCommandSynonymException::new);
    }

    public List<CommandSynonym> getByCommandId(Long commandId) {
        return commandSynonymRepository.findAllByCommand_Id(commandId);
    }

    public CommandSynonym save(CommandSynonym commandSynonym) {
        if (!commandRepository.existsById(commandSynonym.getCommand().getId())) {
            throw new NoSuchCommandException();
        }

        return commandSynonymRepository.save(commandSynonym);
    }

    public void delete(Long id) {
        commandSynonymRepository.deleteById(id);
    }
}
