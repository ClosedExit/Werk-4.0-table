import React from "react";

export let data = [
        {
            plantname: "Rose",
            sunlight: "sunlight",
            watering: "watering",
            price: "price",
            purchaseDate: "purchaseDate",
            key: "1"
        },
        {
            plantname: "Palme",
            sunlight: "sunlight",
            watering: "watering",
            price: "price",
            purchaseDate: "purchaseDate",
            key: "2"
        },

    ]


export let columns = [
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
 //// attempt to render the upperpart on the serverside while rendering a separate table underneath without titles, to create a illusion of one table, since a serverside table can't be dynamicly 
 /*
    export let columnsNoT = [
        {
            title:"",
            dataIndex: "plantname",
            key: "key"
        },
        {
            title:"",
            dataIndex: "sunlight",
            key: "key"
        },
        {
            title:"",
            dataIndex: "watering",
            key: "key"
        },
        {
            title:"",
            dataIndex: "price",
            key: "key"
        },
        {
            title:"",
            dataIndex: "purchaseDate",
            key: "key"
        }
    ]
*/
    export default data;