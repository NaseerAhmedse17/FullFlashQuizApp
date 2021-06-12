package com.example.quizappcreator.Model;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
public class QuizModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Quizid;
    private String Quiztitle;
    private int Quizpoints;
    private int Quiztime_allowed;
    @Temporal(TemporalType.DATE)

    private Date Quizdeadline;
    @OneToMany(cascade = {CascadeType.ALL})
    private Set<QuestionModel> QuizQuestion;
}
