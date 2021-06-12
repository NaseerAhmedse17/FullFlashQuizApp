package com.example.quizappcreator.Repository;

import com.example.quizappcreator.Model.QuestionModel;
import org.springframework.data.repository.CrudRepository;

public interface QuizQuestionRepo extends CrudRepository<QuestionModel,Integer> {
}
