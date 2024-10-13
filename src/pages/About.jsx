import styled from "styled-components";

const Left = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.4em;
  color: white;
  font-family: "Urbanist", sans-serif;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(360deg);
    transition: 1s ease-in-out;
  }
`;

const ProfileImage = styled.img`
  height: 40%;
  width: 40%;
  border-radius: 40%;
`;
const Right = styled.div`
  width: 30%;
  padding: 10px;
  font-size: 14px;
  color: white;
  font-family: "Urbanist", sans-serif;
`;

const Title = styled.h2`
  margin-top: 100px;
  color: white;
  text-align: center;
`;

const ContactList = styled.div`
  margin-bottom: 5px;
`;

const Heading = styled.h4`
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

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 568px) {
    ${Left} {
      flex: 100%;
    }
    ${Right} {
      width: 100%;
    }
    ${ProfileContainer} {
      flex: 100%;
    }
  }
`;

const About = () => {
  document.title = "about";

  return (
    <>
      <Title>About Page</Title>

      <Container>
        <Left>
          I'm a dynamic full-stack developer with a powerhouse background in
          telecommunications. My journey kicked off as a Network Operation
          Engineer, where I took a 13-year-old manual fault alarm process and
          automated it, boosting network availability by 80%. From there, I
          dived into building desktop apps and real-time dashboards using Python
          heavyweights like Dash, Tkinter, Selenium, and Pandas. As my Python
          skills skyrocketed, I ventured into web development with Django,
          making waves in projects like dashme.ng (helping donate items) and
          missingperson.com.ng (connecting missing people with families). I'm a
          backend wizard, crafting optimized database queries, REST APIs, and
          even diving into the frontend with React. I've expanded my backend
          game with Flask, Node.js, and integrated web sockets, REST, and
          GraphQL APIs for seamless communication. I lead teams like a pro,
          rocking Agile, microservices, Docker containerization, and
          orchestrating containers with Kubernetes. My CI/CD pipelines with
          Jenkins are tight, and I love bringing cloud-native solutions to life
          on AWS, utilizing services like Lambda, EC2, S3, RDS, EKS, ECS and
          more.
        </Left>
        <ProfileContainer>
          <ProfileImage src="/img/profile.jpg" alt="profile" />
        </ProfileContainer>
        <Right>
          <Heading>Contact Details</Heading>
          <ContactList>
            <i className="pi pi-phone" style={{ fontSize: "1.0rem" }}></i> +1
            382 885 1095
          </ContactList>
          <ContactList>
            <i className="pi pi-envelope" style={{ fontSize: "1.0rem" }}></i>{" "}
            shawen022@yahoo.com{" "}
          </ContactList>
          <ContactList>
            <i className="pi pi-github" style={{ fontSize: "1.0rem" }}></i>{" "}
            https://github.com/shawen17{" "}
          </ContactList>
          <ContactList>
            <i className="pi pi-linkedin" style={{ fontSize: "1.0rem" }}></i>{" "}
            https://linkedin.com/in/waleola-johnson-850a433b{" "}
          </ContactList>
          <ContactList>
            <i className="pi pi-twitter" style={{ fontSize: "1.0rem" }}></i>{" "}
            https://www.twitter.com/shawen17{" "}
          </ContactList>
        </Right>
      </Container>
    </>
  );
};

export default About;
