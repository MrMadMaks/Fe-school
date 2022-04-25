import React from "react";
import Board from "../../components/Board/Board";
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Archive = observer(() => {

  const { archiveData } = events;

  const archive = document.location.pathname;

  return (

    <Board mode={archive} events={archiveData} />

  )
})

export default Archive;
