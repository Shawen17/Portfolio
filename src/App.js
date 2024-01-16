import "./App.css";
import Projects from "./components/Projects";
import Layout from "./hoc/Layout";
import ServiceBox from "./components/ServiceBox";

function App() {
  return (
    <Layout>
      <ServiceBox
        width={30}
        title="Backend Developer"
        description="Developing Backend models, data structure, logic and optimization"
      />
      {/* <Projects /> */}
    </Layout>
  );
}

export default App;
