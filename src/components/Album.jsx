import { useState } from "react";

export default function Album({name,tracks}) {

  // Syntax för att skapa state
  // const [state, setState] = useState(startvärde)
  // Det enda sättet vi får ändra på state är med setState-funktionen
  const [show, setShow] = useState(true);
  
  //Exempel om vi skulle ha fler states i komponenten t.ex darkMode.
  const [darkMode, setDarkMode] = useState(false);
  
  
    return (
      <div className="Album">
        {/* När vi klickar på h3:an kör vi en funktion som togglar setShow mellan true och false */}
        <h3 className="Album-title" onClick={() => { setShow(!show)}}>{name}</h3>

        {/* Loopar ut alla tracks */}
        {show && <ul> {tracks.map(track => <li>{track}</li>)} </ul>}
      </div>
    );
}