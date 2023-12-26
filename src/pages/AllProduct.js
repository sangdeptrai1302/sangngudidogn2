import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";


function AllProduct(){
    const[products,setProducts]= useState([]);
    useEffect( ()=>{
        axios.get("http://localhost:8080/api/products").then((response)=>{
            setProducts( (data)=>{
                return response.data;
            });
        });
     
    },[]);
    return(
        <>
        <Row md={4} className="g-4 mt-1">
            {products.map ((sv)=>{
                return(
                    <Col key={sv.id}>
                        <Card>
                            <Card.Img variant="top" src={sv.photo}/>
                            <Card.Body>
                                <Card.Title>{sv.title}</Card.Title>
                                <Card.Text>
                                    <b>thông số kỹ thuật:</b>{sv.description}
                                </Card.Text>
                                <Card.Text><b>Giá:</b> {sv.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}

        </Row>
        </>
       
    );
}

export default AllProduct;