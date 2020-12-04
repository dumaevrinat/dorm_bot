package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.Command;
import com.polytech.dormbot.entity.CommandResponse;
import com.polytech.dormbot.entity.CommandSynonym;
import com.polytech.dormbot.exception.NoSuchCommandException;
import com.polytech.dormbot.repository.CommandRepository;
import com.polytech.dormbot.repository.CommandResponseRepository;
import com.polytech.dormbot.repository.CommandSynonymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CommandService {
    private final CommandRepository commandRepository;
    private final CommandResponseRepository commandResponseRepository;
    private final CommandSynonymRepository commandSynonymRepository;

    @Autowired
    public CommandService(
            CommandRepository commandRepository,
            CommandResponseRepository commandResponseRepository,
            CommandSynonymRepository commandSynonymRepository) {
        this.commandRepository = commandRepository;
        this.commandResponseRepository = commandResponseRepository;
        this.commandSynonymRepository = commandSynonymRepository;
    }

    public List<Command> getAll() {
        return commandRepository.findAll();
    }

    public Command get(Long id) {
        return commandRepository.findById(id).orElseThrow(NoSuchCommandException::new);
    }

    public Command add(Command command) {
        Command savedCommand = commandRepository.save(command);

        Set<CommandResponse> responses = savedCommand.getCommandResponses()
                .stream()
                .peek(response -> response.setCommand(savedCommand))
                .collect(Collectors.toSet());

        Set<CommandSynonym> synonyms = savedCommand.getCommandSynonyms()
                .stream()
                .peek(synonym -> synonym.setCommand(savedCommand))
                .collect(Collectors.toSet());

        savedCommand.setCommandResponses(new HashSet<>(commandResponseRepository.saveAll(responses)));
        savedCommand.setCommandSynonyms(new HashSet<>(commandSynonymRepository.saveAll(synonyms)));

        return savedCommand;
    }

    public void delete(Long id) {
        commandRepository.deleteById(id);
    }

}
