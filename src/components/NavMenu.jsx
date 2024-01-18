import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 70%;
  margin-left: auto;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 30%;
`;

const NavMenu = () => {
  return (
    <Container>
      <Left>
        <Link to="/">Resume</Link>
        <Link to="/">Contact</Link>
      </Left>
      <Right>
        <a href="/" target="_blank" style={{ margin: 5 }}>
          <i className="pi pi-github" style={{ fontSize: "1.5rem" }}></i>
        </a>

        <Link className="mb-1 nav-item nav-link" to="">
          <i className="pi pi-linkedin" style={{ fontSize: "1.5rem" }}></i>
        </Link>
      </Right>
    </Container>
  );
};

export default NavMenu;
