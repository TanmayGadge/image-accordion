import "./App.css";
import Gallery from "./components/gallery";
import Input from "./components/input";
import images from './components/images';

function App() {
  

  return (
    <div className="App">
      <header>This is the header.</header>
      <main>
        <Gallery images={images} />
      </main>
      <footer>
        <Input />
      </footer>
    </div>
  );
}

export default App;
