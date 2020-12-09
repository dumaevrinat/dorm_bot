package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.BotUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BotUserRepository extends CrudRepository<BotUser, Long> {
}
