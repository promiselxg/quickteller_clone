import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="app__content">
        <Card />
      </main>
    </div>
  );
}

export default App;
