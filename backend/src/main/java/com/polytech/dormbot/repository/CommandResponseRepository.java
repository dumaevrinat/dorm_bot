package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.CommandResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandResponseRepository extends JpaRepository<CommandResponse, Long> {
    List<CommandResponse> findAllByCommand_Id(Long id);
}
