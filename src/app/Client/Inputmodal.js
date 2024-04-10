"use client"
import React from "react";
import { useState } from "react";
import {Input, Button, Form, DatePicker, Table, Modal} from "antd";
import {data, columns} from "../server/plants";


export default function tableForm (){       

// renders preexisting list-entries
const [dummyData, addItem] = useState(data);//dummyData is the new array with data as initialstate and addItem a function for updating

// rerenders old list-entries and adds a new list-entrie, but without changing the original data
// triggert on onFinish/submit
const addPlant = (formValues)=>{            //formValues is the {values}-object handed with the onFinish-event
    const newPlant =                        //this {values}-object needs to be modified with a key before it can be added 
    {
        ...formValues,                      //existings key-values 
        purchaseDate: purchaseDate.value,   //.value had to be added, because the purchaseDate wasn't rendering
        key: (dummyData.length+1).toString()};   //add a unique key to each plant-object

    addItem((exPlants) => {                 //to also render the existing entries
    return[...exPlants, newPlant]           //return the array with existing entries + newPlant
    })
    form.resetFields();                     // reset formfields
};
const[form] = Form.useForm();               //defines the used form as a form to be able to use the resetFields function

//renders table and form
return (
<>
    <Table 
        dataSource={dummyData} 
        columns={columns} 
        pagination
        >      
    </Table>

        <Form 
            form={form}
            onFinish={addPlant}
            labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 18,
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
                <Form.Item label="Watering" name="watering" required>
                    <Input placeholder="Times per week this Plant needs water" maxLength={20}allowClear></Input>
                </Form.Item>
                <Form.Item label="Price in €" name="price" type="number" required>
                <   Input placeholder="price" allowClear required></Input>
                </Form.Item>
                <Form.Item label="PurchaseDate" name="purchaseDate" required>
                    <DatePicker required/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16,}}>
                    <Button type="primary" htmlType="submit" >Submit</Button>
                </Form.Item>
        </Form>

</>
    )
}
