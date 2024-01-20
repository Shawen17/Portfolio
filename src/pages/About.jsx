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
          A versatile full-stack developer with a robust telecommunications
          background. My journey began as a Network Operation Engineer, where my
          passion for task automation led to a significant accomplishment:
          automating a 13-year manual fault alarm escalation process, resulting
          in an 80% improvement in network availability. I extended my skills to
          develop desktop applications and real-time analysis dashboards using
          Python libraries such as Dash, Tkinter, Selenium, Pandas, and PyGUI.
          As my proficiency in Python grew, I ventured into web development with
          the Django Framework, contributing to various commercial and personal
          projects. Notable among them are dashme.ng, a platform facilitating
          the pickup of donated items, and missingperson.com.ng, a platform
          aiding in the search for missing individuals and reuniting families.
          Within the Django framework, I excelled in backend model development,
          database query optimization, and REST API creation. To further enhance
          my skill set, I delved into frontend development using React,
          seamlessly integrating it with backend functionalities through APIs
          and websockets. I have successfully led teams using Agile methodology,
          employing containerization with Docker, implementing CI/CD tools like
          Jenkins, conducting unit tests with Jest, and utilizing Git for
          version control and collaborative development. My expertise extends to
          deploying applications on cloud platforms.
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
            https://linkedin.com/in/oluwaseun-johnson-850a433b{" "}
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
