import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form, Card } from 'react-bootstrap';

import { getAllOffres } from "../services/providerOffresService"
import { Offer } from "./offer";

function ProviderOffres() {
    
    let [offres, setOffres] = useState([]);
    let [count, setCount] = useState();

    

    useEffect(()=>{
        getAllOffres().then((res)=>{
            setOffres(res)
            setCount(res.length)
            console.log(offres)
        })
    },[10])
    return (
        <React.Fragment>
            <Container fluid className="mt-5 row">
                <h2 className="col-12">Count of offres : {count} </h2>
                <hr />
                {
                    offres.map((offre) => (
                        <Offer key={offre.id} value={offre} />
                    ))
                }
            </Container>
        </React.Fragment>
    );
}
export default ProviderOffres;
