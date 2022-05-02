import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Archive from "../../pages/Archive/Archive";
import Main from "../../pages/Main/Main";
import Form from "../../pages/Form/Form"
import Header from "../Header/Header";
import Page404 from "../Page404/Page404";
import { observer } from "mobx-react-lite";
import { events } from "../../store/index.js";

const { data } = events;

const App = observer(() => {
  return (

    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path={'/'} element={<Layout />} >
        <Route index element={<Main events={data} />} />
        <Route path={'archive'} element={<Archive events={data} />} />
        <Route path={'event'}>
          <Route path=":id" element={<Form events={data} />} />
          <Route path="" element={<Form />} />
        </Route>
      </Route>
    </Routes>
  );
})

function Layout() {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Outlet />
      </section>
    </>
  )
}

export default App;
