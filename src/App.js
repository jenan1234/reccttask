
import React from "react";
 import Task1 from"./components/task1"
import Task2 from"./components/task2"
import Task3 from "./components/task3"
import Task4 from"./components/task4"
import Task5 from"./components/task5"
 import Task6 from"./components/task6"
 import Task7 from"./components/task7"
 import Task8 from"./components/task8"
 import Task9 from"./components/task9"
 import Task10 from"./components/task10"
import Task11 from"./components/task11"
 import Task12 from"./components/task12"
 import Task13 from"./components/task13"
  // import Task14 from"./components/task14"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChildComponent from "./ChildComponent";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <ChildComponent />
    </div>
  );
};
export default App;
