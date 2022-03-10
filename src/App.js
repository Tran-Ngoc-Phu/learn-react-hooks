import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
// import ColorBox from "./components/ColorBox/index.jsx";
import ToDoList from "./components/ToDoList/index.jsx";

function App() {
  // Set state and initalize the value
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "I love Easy Frontend!" },
    { id: 2, title: "We love Easy Frontend!" },
    { id: 3, title: "They love Easy Frontend!" },
  ]);
  // Remove a item when clicked
  const handleToDoClick = (id) => {
    // Clone the toDo list
    const newToDoList = [...toDoList];
    // Remove the clicked item
    const indexRemoveItem = newToDoList.findIndex((toDo) => toDo.id === id);
    newToDoList.splice(indexRemoveItem, 1);
    // Set new value for todo list
    setToDoList(newToDoList);
  };
  // Add new item to the list
  const onSubmitNewItem = (value) => {
    const newToDoList = [...toDoList];
    newToDoList.push({
      id: newToDoList.length + 1,
      ...value,
    });

    setToDoList(newToDoList);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <ColorBox></ColorBox> */}
      <ToDoList toDoList={toDoList} onRemoveItemClick={handleToDoClick} />
      <ToDoForm onSubmitNewItem={onSubmitNewItem} />
    </div>
  );
}

export default App;
