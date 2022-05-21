import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form, Card } from 'react-bootstrap';

import { getAllOffres } from "../services/providerOffresService"
import { Offer } from "./offer";

function ProviderOffres() {
    let oo = [
        {
            "id": "12445241",
            "title": "12445244",
            "description": "12445244",
            "resources": [
                {
                    "cpu": "1551",
                    "ram": "1551",
                    "screen": "1551",
                    "resolution": "1551",
                    "qte": "1551"
                }
            ],
            "date": "12445244"

        },
        {
            "id": "1244524",
            "title": "12445244",
            "description": "12445244",
            "resources": [
                {
                    "cpu": "1551",
                    "ram": "1551",
                    "screen": "1551",
                    "resolution": "1551",
                    "qte": "1551"
                }
            ],
            "date": "12445244"

        },
        {
            "id": "124452",
            "title": "12445244",
            "description": "12445244",
            "resources": [
                {
                    "cpu": "1551",
                    "ram": "1551",
                    "screen": "1551",
                    "resolution": "1551",
                    "qte": "1551"
                }
            ],
            "date": "12445244"

        },
        {
            "id": "12444",
            "title": "12445244",
            "description": "12445244",
            "resources": [
                {
                    "cpu": "1551",
                    "ram": "1551",
                    "screen": "1551",
                    "resolution": "1551",
                    "qte": "1551"
                }
            ],
            "date": "12445244"

        }
    ]
    let [offres, setOffres] = useState([]);
    let [offre, setOffre] = useState();
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
