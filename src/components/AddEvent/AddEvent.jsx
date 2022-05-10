import React from "react";
import { useParams, } from "react-router-dom";
import moment from "moment";
import { useState } from "react";

const AddEvent = ({ events }) => {


  const { id } = useParams();

  const [inputValue, setInputValue] = useState({
    theme: id ? events.filter(card => card._id === id)[0].theme : '',
    comment: id ? events.filter(card => card._id === id)[0].comment : '',
    date: id ? moment(events.filter(card => card._id === id)[0].date).format("YYYY-MM-DDThh:mm") : '',
  })

  const handleFieldChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleToAdd = (e) => {
    e.preventDefault();
    events.addEvent({ ...inputValue })
  }

  const handleToEdit = (e) => {
    e.preventDefault();
    events.editEvent({ ...inputValue })
  }


  function renderTitle() {
    return id ? <h2 className="board__title">Редактировать</h2> : <h2 className="board__title">Добавить</h2>;
  }

  function renderBtn() {
    return id ? <button type="submit" className="btn-submit" onClick={handleToEdit}>Редактировать</button> : <button type="submit" className="btn-submit" onClick={handleToAdd}>Добавить</button>;
  }

  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit}>
        {renderTitle()}
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
            onChange={handleFieldChange}
            value={inputValue.theme}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
            onChange={handleFieldChange}
            value={inputValue.comment}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            onChange={handleFieldChange}
            value={inputValue.date}
          />
        </fieldset>
        <div className="btns">
          {renderBtn()}
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>

  )
}

export default AddEvent;
