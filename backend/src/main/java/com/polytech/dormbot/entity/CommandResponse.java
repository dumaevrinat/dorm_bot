package com.polytech.dormbot.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "command_responses")
public class CommandResponse {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "response", nullable = false)
    private String response;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "command_id", referencedColumnName = "id", nullable = false)
    private Command command;
}
