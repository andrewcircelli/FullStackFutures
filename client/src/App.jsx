import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ProfileCarousel from "./components/Carousel";
import AthleteHome from "./pages/AthleteHome";
// import Store into this component

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Header />
        </Container>
        <main>
          <Switch>
            <Route exact path={"/"}>
              <Container>
                <h1>My React App</h1>
              </Container>
            </Route>
            <Route exact path={"/profiles/:profileType"}>
              <AthleteHome />
            </Route>
            <Route exact path={"/profiles"}>
              <Container>
                <ProfileCarousel deviceType={"desktop"} />
              </Container>
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </main>
        <Container>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
