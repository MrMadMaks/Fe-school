import React from "react";
import Board from "../../components/Board/Board";
import { observer } from "mobx-react-lite";
import { events } from "../../store";

const Archive = observer(() => {

  const { archiveData } = events

  const archive = document.location.pathname;

  return (
    <Board mode={archive} events={archiveData} />
  )
})

export default Archive;
