import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className='text-decoration-none'>
      <div className="mb-2" style={{ margin: '10px', width: '300px' }}>
        <Card style={{ width: '100%', height: '430px' }}>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={item.img}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center'>{item.title}</Card.Title>
            <div className="d-flex justify-content-center align-items-center">
              <Button variant="dark">VER PRODUCTO</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default Item;