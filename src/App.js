import "./App.css";
import Projects from "./components/Projects";
import Layout from "./hoc/Layout";
import Services from "./components/Services";

function App() {
  return (
    <Layout>
      <Services />
      <Projects />
    </Layout>
  );
}

export default App;
