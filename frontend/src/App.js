import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import JumbotronHome from "./components/JumbotronHome/JumbotronHome";
import PageRoute from "./routes/PageRoute";
import './index.css';



function App() {
  return (
    <div>
      <BrowserRouter>

      <Header />
      <PageRoute/>
      Nibas
        
      
    
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
