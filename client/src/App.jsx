import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { Container } from "./components/Grid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ProfileCarousel from "./components/Carousel";
<<<<<<< HEAD
import Profile from "./pages/Profiles";
// import Jumbotron from "./components/Jumbotron";
=======
import Home from "./pages/Home";
>>>>>>> 243317274a2ba24ecd6469c0e9bedbd38373a1f2

// import Store into this component

function App() {
  // const chooseHomePage = function () {
  //   switch (profileType.profileType) {
  //     case "athlete":
  //       return <AthleteHome />;
  //     case "student":
  //       return <StudentHome />;
  //     case "cadet":
  //       return <CadetHome />;
  //     default:
  //       return <ProfileCarousel deviceType={"desktop"} />;
  //   }
  // };
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
              <Home />
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
