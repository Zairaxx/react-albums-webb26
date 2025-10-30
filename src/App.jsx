import './App.css'
import AlbumList from "./components/AlbumList";
function App() {
  const myAlbums = [];

  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList />
    </div>
  );
}

export default App