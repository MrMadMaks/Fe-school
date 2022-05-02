import React from "react";
import Board from "../../components/Board/Board";
import { observer } from "mobx-react-lite";

const Archive = observer(({ events }) => {

  const archiveCards = () => {
    return events.filter(card => card.archive)
  }

  const archive = document.location.pathname;

  return (
    <Board mode={archive} events={archiveCards()} />
  )
})

export default Archive;
