package com.example.quizappcreator.Repository;

import com.example.quizappcreator.Model.QuizModel;
import org.springframework.data.repository.CrudRepository;

public interface QuizRepo extends CrudRepository<QuizModel,Integer> {
}
