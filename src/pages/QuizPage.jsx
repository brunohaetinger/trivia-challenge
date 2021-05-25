import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Page from "../components/Page";
import QuestionCard from "../components/QuizCard";
import SimpleButton from "../components/SimpleButton";
import { useQuizContext } from "../contexts/QuizContext";

const QuizPage = () => {
  const history = useHistory();
  const { isLoading, questions, answerQuestion, resetAnswers, fetchQuestions } =
    useQuizContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    resetAnswers();
  }, [questions]);

  const handleOptionSelection = (answer) => {
    answerQuestion(questions[currentQuestionIndex], answer);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      history.push("/quiz/result");
    } else {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  if (
    isLoading ||
    !questions ||
    currentQuestionIndex === null ||
    currentQuestionIndex >= questions.length
  )
    return <Page.Title>Loading...</Page.Title>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Page>
      <Page.Header>
        <Page.Title>{currentQuestion?.category}</Page.Title>
      </Page.Header>
      <Page.Content>
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      </Page.Content>
      <Page.Footer>
        <SimpleButton onClick={() => handleOptionSelection("False")}>
          FALSE
        </SimpleButton>
        <SimpleButton onClick={() => handleOptionSelection("True")}>
          TRUE
        </SimpleButton>
      </Page.Footer>
    </Page>
  );
};

export default QuizPage;
