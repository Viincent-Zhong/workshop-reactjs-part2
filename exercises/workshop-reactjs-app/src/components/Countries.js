import { useEffect, useState } from "react";
import axios from 'axios';

function Countries() {
    const [pays, setPays] = useState(0);

    useEffect(() => {
        console.log('bite')
    });

    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        const donnes = res.data;
        setPays(donnes)
    })
    return (
        <div>
            <h1 className='App'>Countries</h1>
        </div>
    );
}

export default Countries