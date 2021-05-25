import styled from "styled-components";
import parse from "html-react-parser";

const CardBox = styled.div`
  border: 1px solid black;
  max-width: 400px;
  min-height: 200px;
  align-content: center;
  text-align: center;
  align-items: center;
  display: flex;
`;

const Description = styled.p`
  padding: 10px;
`;

const QuestionCard = ({ question, questionIndex, totalQuestions }) => {
  return (
    <>
      <CardBox>
        <Description>{parse(question.question)}</Description>
      </CardBox>
      <p>
        {questionIndex + 1} of {totalQuestions}
      </p>
    </>
  );
};

export default QuestionCard;
