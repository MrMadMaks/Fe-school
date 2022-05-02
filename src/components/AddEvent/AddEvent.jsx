import React from "react";
import { useParams, } from "react-router-dom";
import moment from "moment";
import { events } from '../../store/index';
import { useState } from "react";

const AddEvent = () => {
  const { id } = useParams();

  const [inputValue, setInputValue] = useState({
    theme: '',
    comment: '',
    date: '',

    renderTheme() {
      if (id) {
        const card = events.filter(card => card._id === id)[0]
        return card.theme
      } else {
        return ''
      }
    },
    renderComment() {
      if (id) {
        const card = events.filter(card => card._id === id)[0]
        return card.comment
      } else {
        return ''
      }
    },

    renderDate() {
      if (id) {
        const card = events.filter(card => card._id === id)[0]
        const formatDate = moment(card.date).format("YYYY-MM-DDThh:mm")
        return formatDate
      } else {
        return ''
      }
    }
  })

  const handleFieldChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  function renderTitle() {
    return id ? <>Редактирование события</> : <>Добавление события</>;
  }

  function renderBtn() {
    return id ? <>Редактировать</> : <>Добавить</>;
  }

  //function renderTheme() {
  //  if (id) {
  //    const card = events.filter(card => card._id === id)[0]
  //    return card.theme
  //  } else {
  //    return ''
  //  }
  //}

  //function renderComment() {
  //  if (id) {
  //    const card = events.filter(card => card._id === id)[0]
  //    return card.comment
  //  } else {
  //    return ''
  //  }
  //}

  //function renderDate() {
  //  if (id) {
  //    const card = events.filter(card => card._id === id)[0]
  //    const formatDate = moment(card.date).format("YYYY-MM-DDThh:mm")
  //    return formatDate
  //  } else {
  //    return ''
  //  }
  //}

  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit} >
        <h2 className="board__title">{renderTitle()}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            value={inputValue.theme}
            onChange={handleFieldChange}
            required></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
            value={inputValue.comment}
            onChange={handleFieldChange}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            value={inputValue.date}
            onChange={handleFieldChange}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{renderBtn()}</button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default AddEvent;
