import React, { useState } from "react";

import { Todo } from "./view/Todo";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input";

import "./App.css";

const ALL_TAB = "all";
const COMPELETED_TAB = "completed";
const INCOMPLETED_TAB = "incompleted";

const TABS = [ALL_TAB, COMPELETED_TAB, INCOMPLETED_TAB];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentTab, setCurrentTab] = useState(ALL_TAB);

  const handleTodoChange = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(updatedTodos);
  };

  const handleTodoDelete = (todoId) => {
    const updatedTodos = todos.filter(({ id }) => id !== todoId);

    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const lastItemId = todos[todos.length - 1]?.id || 0;
      const updatedTodos = [
        ...todos,
        { id: lastItemId + 1, checked: false, label: e.target.value },
      ];

      setTodos(updatedTodos);
      setInputValue("");
    }
  };

  const getFilteredTodos = () => {
    switch (currentTab) {
      case COMPELETED_TAB:
        return todos.filter(({ checked }) => checked);
      case INCOMPLETED_TAB:
        return todos.filter(({ checked }) => !checked);
      case ALL_TAB:
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <h2>TODO's</h2>
      <Input
        className="input-wrapper"
        placeholder="Add new task..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="tabs-wrapper">
        <Tabs tabs={TABS} currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>

      {filteredTodos.length > 0
        ? filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleTodoChange={handleTodoChange}
              handleTodoDelete={handleTodoDelete}
            />
          ))
        : "Nothing in this category..."}
    </div>
  );
};

export default App;
