"use client"
import React from "react";
import {ref} from "react";
import {Input, Button, Form, DatePicker, Table} from "antd";

var arr=[]
let keycount = 4;
export default function tableForm (){

//console.log(event);
//arr.push(event);
//console.log(arr);
const data = [
    {
        plantname: "aplantname",
        sunlight: "sunlight",
        watering: "watering",
        price: "price",
        purchaseDate: "purchaseDate",
        key: "1"
    },
    {
        plantname: "bplantname2",
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
        key: "key",
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


const addItem=(event)=>{
   
    const newObj = {
        plantname: event.plantname,
        sunlight: event.sunlight,
        watering: event.watering,
        price: event.price,
        purchaseDate: event.purchaseDate,
        key: keycount
    }

keycount++;
console.log("new keycount is: "+keycount);

data.push(newObj);
console.log("Data array new looks like this: " + data[data.length-1].plantname)
}
    return (
<main>
<Table 
        dataSource={data} 
        columns={columns} 
        pagination
        >
            
</Table>
        <Form 
            onFinish={addItem}
            labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 12,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}>
                <Form.Item label="Plantname" name="plantname" required>
                    <Input placeholder="Plantname (e.g. Monstera Deliciosa)" allowClear required></Input>
                </Form.Item>
                    <Form.Item label="Sunlight" name="sunlight" required>
                <Input placeholder="Minimum sunlight exposure hours" maxLength={20} allowClear required></Input>
                    </Form.Item>
                <Form.Item label="Watering" name="water" required>
                    <Input placeholder="Times per week this Plant needs water" maxLength={20}allowClear></Input>
                </Form.Item>
                <Form.Item label="Price" name="price" required>
                <   Input placeholder="price" allowClear required></Input>
                </Form.Item>
                <Form.Item label="PurchaseDate" name="DatePicker" required>
                    <DatePicker required/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16,}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
        </Form>

</main>
    )
}


//const onsubmit= (event) => {console.log("submitted")}
// const data = fs.promises.writeFile(filePath, 'utf8');
// Parse the JSON data
// const TableData = JSON.parse(data);
// Return the parsed data