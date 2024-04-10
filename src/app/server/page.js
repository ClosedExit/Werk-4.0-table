"use server"
import React from "react"
import {Input, Button, Form, Table} from "antd";
import {columns} from "./plants";
import tableForm from "../Client/Inputmodal";


export default async function currPlants(){
 
return(
 
    <header>
        <Table 
        dataSource={[""]} 
        columns={columns} 
        pagination={false}
        
        >
        </Table>     

    </header>

    )
}

//import fs from "fs"               // was used for the dummy.json
//import path from "path"           // was used for the dummy.json

// the first attemd to render a table, before using ant-design
/*    
//const TableData = await fetch("https://jsonplaceholder.typicode.com/users",).then(res => res.json()
<thead>
    <tr>
        <th> Name </th>
        <th> username </th>
        <th> emailadresse </th>
    </tr>
</head>
<tbody>
    
            {TableData.map(item => (
                    <tr  key ={item.id}>
                    <td> {item.name}</td>
                    <td> {item.username}</td>
                    <td> {item.email}</td>
                    </tr>
                ))}

</tbody>
*/