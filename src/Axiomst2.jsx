import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Axiomst from './Axiomst';
function Axiomst2() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setdata(res.data))
            .catch(err => console.log(err));

    },[])
    return (
        <div>
        <p style={{color:"black" ,fontWeight:"700" ,fontSize:"50px", fontFamily:"sans-serif" , textAlign:"center",textShadow:"1px 1px 10px solid cyan"}} >January Month Sales</p>
            <table class="table table-striped table-dark border-1" style={{margin:"20px", border:"1px solid orange" , borderCollapse:"collapse"}}>
                <thead class="thead-dark">
                    <tr>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Id</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Title</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Price</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Description</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Category</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Image</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Rate</th>
                        <th style={{fontWeight:"30px" ,fontSize:"23px", color:"yellow" , textAlign:"center"}} scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a) => {
                            return (
                                <tr>
                                    <td style={{color:"azure"}}>{a.id}</td>
                                    <td style={{color:"azure"}}>{a.title}</td>
                                    <td style={{color:"azure"}}>{a.price}</td>
                                    <td style={{color:"azure"}}>{a.description}</td>
                                    <td style={{color:"azure"}}>{a.category}</td>
                                    <td> <img src={a.image} style={{width:"150px" , height:"150px" , objectFit:"cover" , objectPosition:"center center", border: "4px solid transparent" , borderRadius: "10px", filter:"blur(1px)"}} alt="xxxx" /> </td>
                                    <td style={{color:"azure"}}>{a.rating.rate}</td>
                                    <td style={{color:"azure"}}>{a.rating.count}</td>
                                </tr>
                                
                            )
                            
                        })
                    }

                </tbody>
            </table>
            
    )
}

export default Axiomst2