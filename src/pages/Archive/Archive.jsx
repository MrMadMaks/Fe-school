import React from "react";
import Board from "../../components/Board/Board";
import { AppRoute } from "../../const";

const Archive = () => {

  const archive = document.location.pathname;

  return (
    <Board mode={archive} />
  )
}

export default Archive;
