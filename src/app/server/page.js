"use server"
import React from "react"
import fs from "fs"
import path from "path"
import {Input, Button, Form, Table} from "antd";
import Client from "../Client/Inputmodal"

export default async function currPlants(){

const data = [
    {
        plantname: "plantname",
        sunlight: "sunlight",
        watering: "watering",
        price: "price",
        purchaseDate: "purchaseDate",
        key: "1"
    },
    {
        plantname: "plantname2",
        sunlight: "sunlight2",
        watering: "watering2",
        price: "price2",
        purchaseDate: "purchaseDate2",
        key: "2"
    },
    {
        plantname: "plantname3",
        sunlight: "sunlight3",
        watering: "watering3",
        price: "price3",
        purchaseDate: "purchaseDate3",
        key: "3"
    }
]

const columns = [
    {
        title: "Name",
        dataIndex: "plantname",
        key: "key"
    },
    {
        title: "Sunlight",
        dataIndex: "sunlight",
        key: "key"
    },
    {
        title: "Watering",
        dataIndex: "watering",
        key: "key"
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "key"
    },
    {
        title: "PurchaseDate",
        dataIndex: "purchaseDate",
        key: "key"
    }
]
const x = data;
const y = columns;
   
    return(
 
    <header>
        <Table 
        dataSource={data} 
        columns={columns} 
        pagination
        >
            
    
        </Table>
            
    </header>

    )
}
//export async function getServerSidePro() {
    // Fetch data from db.json
   // const data = await currPlants();
    
    // Pass fetched data to the component
    //return { props: { data } };
 // }
 export async function xy(event){
var arr = [];
       console.log(event);
       arr.push(event);
       console.log(arr);
   }
//const filePath = path.join(process.cwd(), 'src', 'app', 'server', 'db.json');
//const data = await fs.promises.readFile(filePath, 'utf8');
//Parse the JSON dataconst TableData = JSON.parse(data);     
//const TableData = await fetch("https://jsonplaceholder.typicode.com/users",).then(res => res.json()
/* <tbody>
            {TableData.map(item => (
                    <tr  key ={item.id}>
                    <td> {item.name}</td>
                    <td> {item.username}</td>
                    <td> {item.email}</td>
                    </tr>
                ))}

</tbody>*/