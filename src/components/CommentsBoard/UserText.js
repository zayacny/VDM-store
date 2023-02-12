import React, {useState} from "react";
import './index.css'
import RatingMovie from './RatingMovie'

export default function UserText() {
  const [userText, setUserText] = useState('');

  return (
    <>
      <h1>What you think abou it?</h1>
        <RatingMovie value="1"/>
        <input value={userText}
          onChange={e=> setUserText(e.target.value)}
        />
        <br></br>
        <button>Post</button>
    </>
  );
}