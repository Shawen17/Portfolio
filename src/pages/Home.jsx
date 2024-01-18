import Services from "../components/Services";
import Projects from "../components/Projects";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 150px;
`;

const Home = () => {
  return (
    <Container>
      <Services />
      <Projects />
    </Container>
  );
};

export default Home;
