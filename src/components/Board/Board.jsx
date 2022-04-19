import React from "react";
import { AppRoute } from "../../const";
import Card from "../Card/Card";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Sort from "../Sort/Sort";

const Board = ({ mode }) => {

  const showSort = () => {
    if (mode === '/') {
      return <Sort />
    }
  }

  const showLoadMoreBtn = () => {
    if (mode === '/' || mode === '/archive') {
      return <LoadMoreBtn />
    }
  }

  return (
    <section className="board">
      {showSort()}
      <div className="board__events">
        <Card />
      </div>
      {showLoadMoreBtn()}
    </section>
  )
}

export default Board;
