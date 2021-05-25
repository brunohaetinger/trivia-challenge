import React, { createContext, useCallback, useContext, useState } from "react";

const QuizContext = createContext(undefined);

export const QuizProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);

  const fetchQuestions = useCallback(async () => {
    try {
      setIsLoading(true);
      const questionsResponse = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      const questions = await questionsResponse.json();
      setQuestions(questions.results);
    } catch (error) {
      console.error("Error while fetching Quiz", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const answerQuestion = (question, answer) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: question.question,
        isCorrect: question["correct_answer"] === answer,
      },
    ]);
  };

  const resetAnswers = useCallback(() => {
    setAnswers([]);
  }, [setAnswers]);

  return (
    <QuizContext.Provider
      value={{
        isLoading,
        fetchQuestions,
        questions,
        answerQuestion,
        answers,
        resetAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
