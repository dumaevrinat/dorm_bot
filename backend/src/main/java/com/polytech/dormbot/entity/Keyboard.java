package com.polytech.dormbot.entity;

import com.fasterxml.jackson.databind.JsonNode;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "keyboards")
@TypeDef(
        typeClass = JsonStringType.class,
        defaultForType = JsonNode.class
)
public class Keyboard {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(columnDefinition = "json", name = "data", nullable = false)
    private JsonNode data;
}
