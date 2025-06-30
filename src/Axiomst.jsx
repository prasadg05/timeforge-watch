import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axiomst = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setdata(res.data))
            .catch(error => console.log(error));
    }, []); // Empty dependency array to ensure useEffect runs only once during component mount

    return (
        <div>
        <h1><center><b>***Export Data from API***</b></center></h1>
            <table>
                <thead>
                    <tr>
                        <th><h4>ID</h4></th>
                        <th><h4><pre>        Title</pre></h4></th>
                        <th><h4><pre>                  Description</pre></h4></th>
                        
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                           
                            <td>{a.title}</td>
                            <td>{a.body}</td>
                            {/* Add more table data cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Axiomst;
