import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05012A";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            ></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
          {/* <TextForm /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
