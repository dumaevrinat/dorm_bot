package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.Duty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DutyRepository extends CrudRepository<Duty, Long> {
}
