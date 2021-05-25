import parse from "html-react-parser";
import styled from "styled-components";

const QuestionAnswerWrapper = styled.li`
  display: flex;
  flex-direction: row;
  color: grey;

  &::before {
    content: "${({ isCorrect }) => {
      return isCorrect ? "+" : "-";
    }}";
    font-size: xxx-large;
    padding: 0 30px;
    width: 35px;
    font-family: monospace;
  }
`;

const Description = styled.h2`
  margin-top: 0;
`;

const QuestionAnswer = ({ question, isCorrect }) => {
  return (
    <QuestionAnswerWrapper isCorrect={isCorrect}>
      <Description>{parse(question)}</Description>
    </QuestionAnswerWrapper>
  );
};

export default QuestionAnswer;
