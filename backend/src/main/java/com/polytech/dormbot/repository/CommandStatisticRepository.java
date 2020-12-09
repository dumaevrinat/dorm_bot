package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.CommandStatistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandStatisticRepository extends CrudRepository<CommandStatistic, Long> {
}
