import React from "react";
import {Admin, Resource, ListGuesser} from "react-admin";
import dataProvider from "./dataProvider";
import Dashboard from "./dashboard";

function App() {
  return (
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser}/>
      </Admin>
  )
}


export default App;
