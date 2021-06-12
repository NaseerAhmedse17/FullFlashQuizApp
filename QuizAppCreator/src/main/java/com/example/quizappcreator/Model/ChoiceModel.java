package com.example.quizappcreator.Model;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class ChoiceModel {
    public ChoiceModel(int id, String choicebody, Boolean iscorrect) {
        this.id = id;
        this.choicebody = choicebody;
        this.iscorrect = iscorrect;
    }

    public ChoiceModel() {
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String choicebody;
    private Boolean iscorrect;

}
