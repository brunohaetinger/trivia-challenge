import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { QuizProvider } from "../../contexts/QuizContext";
import IntroPage from "../../pages/IntroPage";
import QuizPage from "../../pages/QuizPage";
import ResultPage from "../../pages/ResultPage";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  background-color: #e0e0e0;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <QuizProvider>
          <Switch>
            <Route exact path="/" component={IntroPage}></Route>
            <Route exact path="/quiz" component={QuizPage}></Route>
            <Route exact path="/quiz/result" component={ResultPage}></Route>
          </Switch>
        </QuizProvider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
