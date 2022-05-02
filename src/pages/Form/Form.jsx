import React from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import Filter from "../../components/Filter/Filter";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";

const Form = observer(({ events }) => {

  return (
    <>
      <Filter mode={AppRoute.EVENT} />
      <AddEvent events={events} />
    </>
  )
})

export default Form;
