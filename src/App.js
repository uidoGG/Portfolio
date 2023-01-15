import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer.js";
import Router from "../src/Services/Router.js";
import "../src/Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
