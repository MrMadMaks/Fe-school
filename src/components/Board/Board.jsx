import React from "react";
import Card from "../Card/Card";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Sort from "../Sort/Sort";

const Board = ({ mode, events }) => {

  const showSort = () => {
    if (mode === '/') {
      return <Sort />
    }
  }

  const renderCards = () => {
    return events.map(event => <Card {...event} key={event._id} />)
  }

  return (
    <section className="board">
      {showSort()}
      <div className="board__events">
        {renderCards()}
      </div>
      <LoadMoreBtn />
    </section>
  )
}

export default Board;
