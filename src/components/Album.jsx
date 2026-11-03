import { useState } from "react";

export default function Album({name,tracks}) {

  const [show,setShow] = useState(true);

    return (
      <div className="Album">
        <button onClick={() => {setShow(!show)}}>{show ? "Dölj" : "Visa"} album</button>
        { show && <>
          <h3 className="Album-title">{name}</h3> 
          <ul>
            {tracks.map((track,i) => <li key={i}>{track}</li>)}
          </ul>
        </>
        }
      </div>
    );
}