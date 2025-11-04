export default function Album({name,tracks}) {

    return (
      <div className="Album">
        <h3 className="Album-title">{name}</h3> {/* Byt ut mot en variabel. */}
        <ul>
          {tracks.map(track => <li>{track}</li>)}
        </ul>
      </div>
    );
}