//import styles from "./page.module.css";
import React from "react";
import Server from "../app/server/page";
import InputModal from "../app/Client/Inputmodal";
import {Input, Button, Form, Table} from "antd";
import {data, columns, addItem} from "./server/plants";


export default function Home({}) {

  return (
    <>

        <InputModal/>

    </>
  );
}