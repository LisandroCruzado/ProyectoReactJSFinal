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
          <Card.Body className='d-flex flex-column justify-content-between'>
            <div className='d-flex flex-column align-items-center'>
              <Card.Title className='text-center mb-0'>{item.title}</Card.Title>
              <div className="mt-3">
                <Button variant="dark">VER PRODUCTO</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default Item;
