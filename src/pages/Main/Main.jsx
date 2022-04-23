import React from "react";
import Filter from "../../components/Filter/Filter";
import Board from "../../components/Board/Board";

const Main = ({ events }) => {

  const main = document.location.pathname;

  return (
    <>
      <Filter mode={main} />
      <Board mode={main} events={events} />
    </>
  )
}

export default Main;
