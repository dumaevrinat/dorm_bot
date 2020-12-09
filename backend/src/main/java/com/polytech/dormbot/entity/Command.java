package com.polytech.dormbot.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@ToString
@Entity
@Table(name = "commands")
public class Command {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "main_name", nullable = false)
    private String name;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    @Column(name = "priority", nullable = false)
    private Integer priority;

    @OneToMany(mappedBy = "command", cascade = CascadeType.REMOVE)
    @Fetch(FetchMode.SUBSELECT)
    private List<CommandStatistic> commandStatistics;

    @OneToMany(mappedBy = "command", cascade = CascadeType.ALL, orphanRemoval = true)
    @Fetch(FetchMode.SUBSELECT)
    private List<CommandSynonym> commandSynonyms;

    @OneToMany(mappedBy = "command", cascade = CascadeType.ALL, orphanRemoval = true)
    @Fetch(FetchMode.SUBSELECT)
    private List<CommandResponse> commandResponses;
}
