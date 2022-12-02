import { ContentContainer } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <ContentContainer />
      <Footer/>
    </div>
  );
}

export default App;
