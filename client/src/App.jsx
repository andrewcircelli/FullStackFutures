import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid"
import Header from "./components/Header";
import Footer from "./components/Footer"
import AthleteProfileCard from "./components/AthleteProfileCard"
import PageNotFound from "./components/PageNotFound";
import ProfileCarousel from "./components/Carousel";

// import Store into this component

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Header />
        </Container>
        <Switch>
          <Route exact path={"/"}>
            My React App
          </Route>
          <Route exact path="/profiles">
            <Container>
                <ProfileCarousel deviceType={"desktop"}>
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                  <AthleteProfileCard />
                </ProfileCarousel>
            </Container>
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Container>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
