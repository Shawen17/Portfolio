import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  z-index: 3;
  color: white;
`;

const Container = styled.div`
  background-image: url(${(props) => props.backgroundimage});
  width: ${(props) => props.width}%;
  height: 500px;
  display: flex;
  border-radius: 6px;
  margin: 20px;
  background-size: cover; /* Optional: Adjust background-size as needed */

  &:hover {
    transform: scale(1.1);
    ${ProjectBody} {
      background-color: rgba(255, 40, 0, 0.2);
      width: 100%;
    }
  }

  @media screen and (max-width: 568px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ProjectDesc = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: break-word;
  width: 70%;
  margin-bottom: 40px;
`;

const ProjectButton = styled.button`
  border: 2px solid white;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  width: 120px;
  color: white;
  cursor: pointer;
`;

const Project = ({ item, width }) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/project-details", { state: item });
  };

  return (
    <Container backgroundimage={item.theme} width={width}>
      <ProjectBody>
        <ProjectTitle>{item.title}</ProjectTitle>
        <ProjectDesc>{item.desc}</ProjectDesc>
        <ProjectButton onClick={() => onButtonClick()}>
          view details
        </ProjectButton>
      </ProjectBody>
    </Container>
  );
};

export default Project;
