import './App.css';
import Gallery from "./components/gallery";
import Input from './components/input';

function App() {

  const images = [
    "./assets/image-1.jpg",
    "./assets/image-2.jpg",
    "./assets/image-3.jpg",
    "./assets/image-4.jpg",
    "./assets/image-5.jpg",
    "./assets/image-6.jpg",
  ];

  return (
    <div className="App">
      <Gallery images={images}/>
      {/* <Input /> */}
    </div>
  );
}

export default App;
