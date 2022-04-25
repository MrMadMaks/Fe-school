import React from "react";
import Filter from "../../components/Filter/Filter";
import Board from "../../components/Board/Board";
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Main = observer(() => {

  const { notArchiveData } = events;

  const main = document.location.pathname;

  return (
    <>
      <Filter mode={main} />
      <Board mode={main} events={notArchiveData} />
    </>
  )
})

export default Main;
