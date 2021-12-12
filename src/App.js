import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
//component
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
// function

function App() {
  return (
    <Provider store={store}>
      <div className="todoapp">
        <Header/>
        <Todolist/>
        <Footer/>
      </div>
    </Provider>

  );
}

export default App;
