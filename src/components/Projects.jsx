import styled from "styled-components";
import { ProjectData } from "../data/ProjectData";
import Project from "./Project";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 40px 0px 40px 0px;
  box-sizing: border-box;
`;

const Heading = styled.h2`
  color: #0cafff;
  font-family: "Urbanist", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  &: hover {
    text-decoration: 2px underline white;
  }
`;

const Projects = () => {
  return (
    <>
      <Heading>Recent Projects</Heading>
      <Container>
        {ProjectData.map((item) => (
          <Project width={29} key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
