package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.CommandSynonym;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandSynonymRepository extends CrudRepository<CommandSynonym, Long> {
    List<CommandSynonym> findAllByCommand_Id(Long id);

    void deleteAllByCommand_Id(Long commandId);
}
