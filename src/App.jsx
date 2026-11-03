import './App.css'
import AlbumList from "./components/AlbumList";
function App() {
    const myAlbums = [{
    name: "Seasons",
    tracks: ["Spring","Summer","Autumn","Winter"]
  },
  {
    name:"Weekdays",
    tracks:["Monday","Wednesday","Friday"]
  },
{
  name:"The Clock",
  tracks:["Morning","Midday","Nighttime"]
}];

  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList albums={myAlbums} />
    </div>
  );
}

export default App