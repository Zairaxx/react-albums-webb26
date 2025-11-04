import { useState } from "react";

export default function Album({name,tracks}) {

  const [show, setShow] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
    return (
      <div className="Album">
        <h3 className="Album-title" onClick={() => { setShow(!show)}}>{name}</h3>

        
        {show && <ul> {tracks.map(track => <li>{track}</li>)} </ul>}
      </div>
    );
}