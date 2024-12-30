import React, { useEffect, useRef } from "react";
import "./player.css";
import { useRecoilValue } from "recoil";
import { radioStore } from "../../stores/radioStore";

function Player() {
  let radio = useRecoilValue(radioStore);
  let player = useRef();

  useEffect(() => {
    if (radio.state === "play") {
      player.current.play();
    } else if (radio.state === "pause") {
      player.current.pause();
    } else if (radio.state === "stop") {
      player.current.pause();
    }
  }, [radio.state]);

  return (
    <div className="bg-white p-4 player ">
      <div className="flex justify-between gap-4 items-center">
        <div>{radio.name}</div>
        <audio
          src={radio.url}
          controls
          className="flex-1 bg-white"
          autoPlay
          ref={player}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
