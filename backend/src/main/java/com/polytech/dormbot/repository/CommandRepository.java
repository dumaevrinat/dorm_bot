package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.Command;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandRepository extends CrudRepository<Command, Long> {
}
