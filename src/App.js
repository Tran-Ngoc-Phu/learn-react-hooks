import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import queryString from "query-string";
// import ToDoForm from "./components/ToDoForm";
// import ColorBox from "./components/ColorBox/index.jsx";
// import ToDoList from "./components/ToDoList/index.jsx";

function App() {
  // Set state and initalize the value
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "I love Easy Frontend!" },
    { id: 2, title: "We love Easy Frontend!" },
    { id: 3, title: "They love Easy Frontend!" },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

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

  // Fetch the data for the post list
  async function fetchData() {
    try {
      const paramString = queryString.stringify(filters);
      fetch(`http://js-post-api.herokuapp.com/api/posts?${paramString}`)
        .then((response) => response.json())
        .then((data) => {
          setPagination(data.pagination);
          return setPostList(data.data);
        });
    } catch (error) {
      console.log("Failed to fetch the post list", error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleChangePage = (newPage) => {
    setFilter({
      ...filters,
      _page: newPage,
    });
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <ColorBox></ColorBox> */}
      {/* <ToDoList toDoList={toDoList} onRemoveItemClick={handleToDoClick} /> */}
      {/* <ToDoForm onSubmitNewItem={onSubmitNewItem} /> */}
      <PostList postList={postList} />
      <Pagination pagination={pagination} onChangePage={handleChangePage} />
    </div>
  );
}

export default App;
