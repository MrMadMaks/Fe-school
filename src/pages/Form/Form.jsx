import React from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import Filter from "../../components/Filter/Filter";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";
import { events } from "../../store";

const Form = observer(() => {

  const { data } = events

  return (
    <>
      <Filter mode={AppRoute.EVENT} />
      <AddEvent events={data} />
    </>
  )
})

export default Form;
