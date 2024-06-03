import { useLocation, useNavigate } from "react-router-dom";
import "./Project.css";
import styled from "styled-components";
import { useState } from "react";

const MainImage = styled.img`
  width: 50%;
  height: 40%;
  margin: 10px;
  border-radius: 6px;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
`;

const MiniContainer = styled.div`
  white-space: nowrap;
  background: transparent;
  height: 100%;
  overflow-x: auto;
  display: flex;
`;

const MiniImageContainer = styled.div`
  box-shadow: 0 6px 8px 0 rgba(100, 149, 237, 0.6);
  margin: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`;

const MiniImage = styled.img`
  width: 100px;
  height: 120px;
  border-radius: 6px;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  text-align: left;
  font-weight: bold;
  margin: 20px 0px 10px 20px;
  border-radius: 10px;
  color: #0cafff;
  font-size: 14px;
  font-family: "Urbanist", sans-serif;

  &:hover {
    color: #126180;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  background-color: whitesmoke;
  overflow-x: hidden;
  margin-bottom: 20px;

  @media screen and (max-width: 568px) {
    ${MainImage} {
      width: 90%;
      height: 100%;
    }
    ${MiniImageContainer} {
      margin: 5px;
    }
    ${MiniImage} {
      width: 90px;
      height: 110px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 80px 20px 80px;
  font-size: 14px;

  @media screen and (max-width: 568px) {
    flex: 100%;
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  margin: 20px 0px 20px 0px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex: 60%;

  @media screen and (max-width: 568px) {
    flex: 100%;
  }
`;

const Stack = styled.div`
  background-color: whitesmoke;
  color: black;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
`;

const Back = styled.div`
  color: orangered;
  margin-left: 20px;
  position: fixed;
  top: 120px;
  left: 0;
  cursor: pointer;
  z-index: 12;
`;

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state;
  const [sliderdata, setSliderdata] = useState(project.images[0]);
  const navigate = useNavigate();

  const backClick = () => {
    navigate(-1);
  };

  document.title = "project details";

  const sliderClick = (index) => {
    setSliderdata(project.images[index]);
  };

  return (
    <div style={{ marginTop: 100 }}>
      <Title>{project.desc}</Title>
      <Back
        onClick={() => {
          backClick();
        }}
      >
        <i
          className="pi pi-arrow-left"
          style={{ fontSize: "2.0rem", color: "orangered" }}
        ></i>
      </Back>
      {project.images && (
        <Container>
          <MainImage src={sliderdata} alt="main" />
          <MiniContainer>
            {project.images.map((image, index) => (
              <MiniImageContainer
                key={index}
                onClick={() => {
                  sliderClick(index);
                }}
              >
                <MiniImage src={image} alt={`item ${index + 1}`} />
              </MiniImageContainer>
            ))}
          </MiniContainer>
        </Container>
      )}
      {project.link && (
        <ProjectLink href={project.link} target="_blank" rel="noreferrer">
          live view
        </ProjectLink>
      )}
      {project.github.length > 0 && (
        <ProjectLink href={project.github} target="_blank" rel="noreferrer">
          Github repo
        </ProjectLink>
      )}

      <Details>
        <p>{project.details}</p>
      </Details>
      <Wrapper>
        {project.stack.map((stack, index) => (
          <Stack key={index}>{stack}</Stack>
        ))}
      </Wrapper>
    </div>
  );
};

export default ProjectDetails;
