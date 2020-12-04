package com.polytech.dormbot.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@Table(name = "users")
public class BotUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "vk_id", nullable = false)
    private Long vkId;

    @Column(name = "room_number", nullable = false)
    private Integer roomNumber;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "type", nullable = false)
    private String type;

    @OneToMany(mappedBy = "botUser", cascade = CascadeType.REMOVE)
    @Fetch(FetchMode.SUBSELECT)
    private List<Registration> registrations;
}
