import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from 'axios';

function Countries() {
    const [pays, setPays] = useState(0);

    const isInitialMount = useRef(true);
    
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
                const donnes = res.data;
                setPays(donnes)
                console.log(pays)
            })
        }
    });

    return (
        <div>
            <h1 className='App'>Countries</h1>
        </div>
    );
}

export default Countries