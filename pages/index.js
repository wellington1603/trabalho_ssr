import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Index = ({dados}) => (
    <div>
        <h1>produtos</h1>
        {console.log(dados)}

        <ListGroup>
            {dados.map(comentario => (
                <ListGroupItem>Nome: {comentario.nome} <br></br> Mensagem: {comentario.msg}</ListGroupItem>
            ))}
        
        
        </ListGroup>
    </div>
);


Index.getInitialProps = async() => {
    const response = await axios.get(
        'http://localhost:3001/'
    )
    
    return {dados: response.data}
}




export default Index;