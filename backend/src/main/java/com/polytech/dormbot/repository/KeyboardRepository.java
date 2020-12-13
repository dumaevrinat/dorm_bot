package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.Keyboard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyboardRepository extends CrudRepository<Keyboard, Long> {
}
