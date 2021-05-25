import { Link } from "react-router-dom";
import styled from "styled-components";
import Page from "../components/Page";
import SimpleButton from "../components/SimpleButton";

const Text = styled.p`
  text-align: center;
  font-size: x-large;
  font-weight: 500;
`;

const IntroPage = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Welcome to the Trivia Challenge!</Page.Title>
      </Page.Header>
      <Page.Content>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
      </Page.Content>
      <Page.Footer>
        <Link to="/quiz">
          <SimpleButton>BEGIN</SimpleButton>
        </Link>
      </Page.Footer>
    </Page>
  );
};

export default IntroPage;
