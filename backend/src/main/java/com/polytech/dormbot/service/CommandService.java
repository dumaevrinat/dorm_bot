package com.polytech.dormbot.service;

import com.polytech.dormbot.entity.Command;
import com.polytech.dormbot.exception.NoSuchCommandException;
import com.polytech.dormbot.repository.CommandRepository;
import com.polytech.dormbot.repository.CommandResponseRepository;
import com.polytech.dormbot.repository.CommandSynonymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommandService {
    private final CommandRepository commandRepository;

    @Autowired
    public CommandService(
            CommandRepository commandRepository,
            CommandResponseRepository commandResponseRepository,
            CommandSynonymRepository commandSynonymRepository) {
        this.commandRepository = commandRepository;
    }

    public List<Command> getAll() {
        return (List<Command>) commandRepository.findAll();
    }

    public Command get(Long id) {
        return commandRepository.findById(id).orElseThrow(NoSuchCommandException::new);
    }

    @Transactional
    public Command save(Command command) {
        return commandRepository.save(command);
    }

    public void delete(Long id) {
        commandRepository.deleteById(id);
    }

}
