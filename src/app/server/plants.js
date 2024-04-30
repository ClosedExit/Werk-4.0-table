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


export function getPlants(){
        return data;
       };

export function getColumns () {
    return columns;
}

export const getDataPro = () => {
    var dataPro = new Promise(function(resolve, reject){
        if(data.length > 0){resolve(data)}
        setTimeout(() => reject("Too much data"), 3000);})    
    .then(data => console.log ("it worked" + data))
    .catch(error => console.log("The array might be empty"))
    .finally(() => console.log("Bearbeitung beendet"));
}

export async function currPlants(){
// ich muss die get plants datei erstmal als ein promise machen um dann async und await nutzen zu können
    const existingData = await getPlants();
    console.log(existingData);
    return existingData;
}
export async function currPlantsPro(){
    // ich muss die get plants datei erstmal als ein promise machen um dann async und await nutzen zu können
        const existingData = await getDataPro();
        console.log(existingData);
        return existingData;
    }
        
        export async function currColumns(){
        const existingColumns = await getColumns().map(objekt => col.title);
        }
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
