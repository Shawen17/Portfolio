import styled from "styled-components";
import ServiceBox from "./ServiceBox";
import { services } from "../data/ProjectData";

const Container = styled.div`
  margin: 20px 10px 10px 30px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: white;
  font-weight: bolder;
  font-family: "Bricolage Grotesque", sans-serif;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.5);
  word-break: break-word;
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 568px) {
    width: 100%;
  }
`;

const Services = () => {
  return (
    <Container>
      <Title>My Awesome Expertise</Title>
      <SubTitle>
        From Backend Structure and logic, Frontend aethestics development, to
        deployment on Cloud. You are covered
      </SubTitle>
      <Main>
        {services.map((item) => (
          <ServiceBox
            key={item.id}
            width={31}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Main>
    </Container>
  );
};

export default Services;
