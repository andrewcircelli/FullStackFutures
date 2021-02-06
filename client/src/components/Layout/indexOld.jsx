import React, { useContext } from "react";
import { Container, Row, Col } from "../Grid";
import Header from "./HeaderOld";
import Footer from "../Footer";
import {
  ThemeContext,
  THEMELIST,
  ThemeProvider,
} from "../../contexts/ThemeContext";

function LayoutComponent({ children }) {
  const { theme } = useContext(ThemeContext);
  const classNameValue =
    theme === THEMELIST.LIGHT
      ? "overflow-auto bg-danger"
      : "overflow-auto bg-warning";
  return (
    <div className={classNameValue}>
      <div>
        <Container>
          <Row>
            <Col size="12">
              <Header />
            </Col>
          </Row>
        </Container>
        {children}
        <Container>
          <Row>
            <Col size="12">
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const Layout = ({ children }) => (
  <ThemeProvider defaultTheme={THEMELIST.LIGHT}>
    <LayoutComponent>{children}</LayoutComponent>
  </ThemeProvider>
);

export default Layout;
