import React from "react";
import { AppRoute } from "../../const";
import Filter from "../../components/Filter/Filter";
import Board from "../../components/Board/Board";

const Main = () => {

  const main = document.location.pathname;

  return (
    <>
      <Filter mode={main} />
      <Board mode={main} />
    </>
  )
}

export default Main;
