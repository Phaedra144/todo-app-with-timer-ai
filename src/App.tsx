import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { TodoContainer } from "./TodoContainer";
import { TodoItem } from "./TodoItem";

function App() {
  const [todos] = useState([
    { id: 1, title: "Complete project proposal" },
    { id: 2, title: "Review code changes" },
    { id: 3, title: "Prepare presentation slides" },
    { id: 4, title: "Schedule team meeting" },
    { id: 5, title: "Update documentation" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TodoContainer>
          {todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} />
          ))}
        </TodoContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
