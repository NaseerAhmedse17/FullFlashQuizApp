package com.example.quizappcreator.Repository;

import com.example.quizappcreator.Model.ChoiceModel;
import org.springframework.data.repository.CrudRepository;

public interface QuestionChoiceRespository extends CrudRepository<ChoiceModel,Integer> {
}
