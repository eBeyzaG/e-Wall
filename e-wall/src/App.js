import React from "react";
import SetTimer from "./features/timers/SetTimer";
import { 
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Wall from './containers/Wall';
import Home from "./containers/Home";
import AddTodoForm from "./features/todos/AddTodoForm";
import Result from "./containers/Result";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wall" element={<Wall />} />
          <Route exact path="/setTimer" element={<SetTimer />} />
          <Route exact path="/addTodo" element={<AddTodoForm />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
