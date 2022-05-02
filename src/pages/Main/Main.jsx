import React from "react";
import Filter from "../../components/Filter/Filter";
import Board from "../../components/Board/Board";
import { observer } from "mobx-react-lite";

const Main = observer(({ events }) => {

  const main = document.location.pathname;

  return (
    <>
      <Filter mode={main} />
      <Board mode={main} events={events} />
    </>
  )
})

export default Main;
