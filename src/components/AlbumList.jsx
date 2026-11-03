import Album from "./Album";

export default function AlbumList({albums}) {
  return (
    <div className="AlbumList">
      <h3>Album List</h3>
      {albums.map((album,i) => <Album key={i} name={album.name} tracks={album.tracks}/>)}
    </div>
  );
}