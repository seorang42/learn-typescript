import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  return (
    <form className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
    </form>
  );
}

export default App;
