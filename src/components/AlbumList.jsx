import Album from "./Album";

export default function AlbumList({albums}) {

  return (
    <div>
      <h3>Album List</h3>
      {albums.map(album => <Album name={album.name} tracks={album.tracks}/>)}
    </div>
  );
}