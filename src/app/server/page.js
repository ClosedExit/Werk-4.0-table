"use server"
export default async function NewPlant(){
    console.log("hi")
    const TableData = await fetch("https://jsonplaceholder.typicode.com/users",)
   .then(res => res.json())


    return(
<>
        <table>
            <tr>
                <th> Names</th>
                <th> Username </th>
                <th> e-mailadress </th>
            </tr>
 
    
            {TableData.map(item => (
                    <tr  key ={item.id}>
                    <td> {item.name}</td>
                    <td> {item.username}</td>
                    <td> {item.email}</td>
                    </tr>
                ))}
    
        </table>
</>
    )
}