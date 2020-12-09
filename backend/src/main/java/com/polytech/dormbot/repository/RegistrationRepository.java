package com.polytech.dormbot.repository;

import com.polytech.dormbot.entity.Registration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationRepository extends CrudRepository<Registration, Long> {

    List<Registration> findAllByBotUser_Id(Long id);
}
