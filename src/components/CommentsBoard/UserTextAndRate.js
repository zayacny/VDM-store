import React, {useState} from "react";
import RatingMovie from './RatingMovie'
import { Box } from '@mui/material';

export default function UserText() {
  const [userText, setUserText] = useState('');

  return (
    <Box
      sx={{
        m: 3,
        p: 2,
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "info.light",
        borderRadius: "6px",
        boxShadow: 1,
      }}
    >
      <div>
        <RatingMovie value="1" />
      </div>
      <input style={{
        width: "45%",
        height: "2em"
        }} placeholder="Please, share your thoughts..." value={userText} onChange={(e) => setUserText(e.target.value)} />
      <button style={{
        width: "20%",
        height: "2em"
      }}>Post</button>
    </Box>
  );
}