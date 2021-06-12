package com.example.quizappcreator.Model;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class QuestionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(columnDefinition="TEXT")
    private String Questiondes;
    private int Questionpoints;
    private String Questiontype;
    @OneToMany(cascade = {CascadeType.ALL})
    private Set<ChoiceModel> Questionchoices;

    public QuestionModel(int id, String Questiondes, int Questionpoints, String Questiontype, Set<com.example.quizappcreator.Model.ChoiceModel> Questionchoices) {
        this.id = id;
        this.Questiondes = Questiondes;
        this.Questionpoints = Questionpoints;
        this.Questiontype = Questiontype;
        this.Questionchoices = Questionchoices;
    }

    public QuestionModel() {
    }
}
