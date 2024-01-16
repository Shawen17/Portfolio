import { useState } from "react";
import styled from "styled-components";
import ServiceBox from "./ServiceBox";
import { services } from "../data/ProjectData";
import { motion, AnimatePresence } from "framer-motion";

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

const SubTitle = styled.p`
  font-size: 18px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.5);
  word-break: break-word;
  width: 60%;
  text-align: center;
  margin-bottom: 30px;
`;

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container>
      <Title>My Awesome Expertise</Title>
      <SubTitle>
        From Backend Structure and logic, Frontend aethestics development, to
        deployment on Cloud. You are covered
      </SubTitle>
      <Main>
        {services.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <ServiceBox
              width={29}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <ServiceBox
                width={29}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </Main>
    </Container>
  );
};

export default Services;
