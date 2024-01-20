import styled from "styled-components";

const Title = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  color: #d70040;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: ${(props) => props.width}%;
  height: 300px;
  padding: 50px 30px;
  border-radius: 6px;
  margin: 10px;
  background-color: black;
  font-family: "Bricolage Grotesque", sans-serif;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      rgba(255, 40, 0, 0.5),
      rgba(248, 131, 121, 0.6)
    );
    ${Icon} {
      color: white;
    }
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    height: 100%;
  }
`;

const ServiceBox = ({ title, description, width, icon }) => {
  return (
    <Container width={width}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Container>
  );
};

export default ServiceBox;
