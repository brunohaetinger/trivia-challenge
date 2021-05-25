import { Redirect, useHistory } from "react-router";
import styled from "styled-components";
import Page from "../components/Page";
import QuestionAnswer from "../components/QuestionAnswer";
import SimpleButton from "../components/SimpleButton";
import { useQuizContext } from "../contexts/QuizContext";

const AnswerList = styled.ul`
  padding: 10px;
  overflow-wrap: anywhere;
`;

const ResultPage = () => {
  const history = useHistory();
  const { answers, resetAnswers } = useQuizContext();

  if (!answers.length) return <Redirect to="/" />;

  const playAgain = () => {
    resetAnswers();
    history.push("/");
  };

  const score = answers.reduce(
    (acc, answer) => acc + Number(answer.isCorrect),
    0
  );

  return (
    <Page>
      <Page.Header>
        <Page.Title>
          You scored
          <br />
          {score}/{answers.length}
        </Page.Title>
      </Page.Header>
      <Page.Content>
        <AnswerList>
          {answers.map((answer) => (
            <QuestionAnswer
              key={answer.question}
              question={answer.question}
              isCorrect={answer.isCorrect}
            />
          ))}
        </AnswerList>
      </Page.Content>
      <Page.Footer>
        <SimpleButton onClick={playAgain}>PLAY AGAIN?</SimpleButton>
      </Page.Footer>
    </Page>
  );
};

export default ResultPage;
