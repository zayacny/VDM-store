import React, {useState} from "react";
import './index.css'

export default function UserText() {
  const [userText, setUserText] = useState('');

  return (
    <div className="block-user-text">
      <h1>What you think abou it?</h1>
        <input className="input-user-text" value={userText}
          onChange={e=> setUserText(e.target.value)}
        />
        <br></br>
        <button className="btn-post">Post</button>
    </div>
  );
}