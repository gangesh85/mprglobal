import "./App.css";
import { Login } from "./Component/Login";
import { Home } from "./Component/Home";

function App() {
  const login = true;

  if (login) {
    return <Home />;
  } else {
    return <Login />;
  }
}

export default App;
