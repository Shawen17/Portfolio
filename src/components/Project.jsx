import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px 20px;
  z-index: 3;
  color: white;
`;

const Container = styled.div`
  width: ${(props) => props.width}%;
  height: 500px;
  display: flex;
  background-image: url(${(props) => props.backgroundImage});
  border-radius: 6px;
  margin: 20px;

  &:hover {
    transform: scale(1.1);
    ${ProjectBody} {
      background-color: rgba(255, 40, 0, 0.2);
      height: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ProjectDesc = styled.h3`
  text-align: center;
  word-break: break-word;
  width: 70%;
  margin-bottom: 30px;
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

const Project = ({
  backgroundImage,
  projectTitle,
  projectDescription,
  width,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Container backgroundImage={backgroundImage} width={width}>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <ProjectBody>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <ProjectDesc>{projectDescription}</ProjectDesc>
          <ProjectButton>view details</ProjectButton>
        </ProjectBody>
      </motion.div>
    </Container>
  );
};

export default Project;
