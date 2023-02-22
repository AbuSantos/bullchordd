import Layout from "./layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Audionav from "./components/navigation/Audionav/Audionav";

function App() {
  return (
    <Router>
      <Layout />
      <Audionav />
    </Router>
  );
}

export default App;
