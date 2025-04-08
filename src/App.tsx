import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useState } from "react";

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMiddleVisible, setIsMiddleVisible] = useState(false);

  return (
    <div className="">
      <NavBar
        isAboutVisible={isAboutVisible}
        isContactVisible={isContactVisible}
        isMiddleVisible={isMiddleVisible}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setIsMiddleVisible={setIsMiddleVisible}
              setIsContactVisible={setIsContactVisible}
              setIsAboutVisible={setIsAboutVisible}
            />
          }
        />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
