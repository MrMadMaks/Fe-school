import React from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import Filter from "../../components/Filter/Filter";
import { AppRoute } from "../../const";
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Form = observer(() => {

  const { dataList } = events;

  return (
    <>
      <Filter mode={AppRoute.EVENT} />
      <AddEvent events={dataList} />
    </>
  )
})

export default Form;
