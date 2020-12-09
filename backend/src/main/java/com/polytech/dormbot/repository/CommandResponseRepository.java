package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.CommandResponse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandResponseRepository extends CrudRepository<CommandResponse, Long> {
    List<CommandResponse> findAllByCommand_Id(Long id);

    void deleteAllByCommand_Id(Long commandId);
}
