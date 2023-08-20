import "./App.css";
import AddPostForm from "./features/post/AddPostForm";
import Postlists from "./features/post/Postlists";
// import Counter from "./features/counter/Counter";

function App() {

  return (
    <main className="App">
      
      < AddPostForm />
      < Postlists />
      {/* <Counter /> */}
    </main>
  );
}

export default App; 