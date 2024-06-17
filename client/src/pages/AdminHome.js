import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, deleteCar } from '../redux/actions/carsActions';
import { Col, Row, Card, Button, Popconfirm, Spin } from 'antd';
import {
  DeleteFilled,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function AdminHome() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  function handleDeleteCar(carId) {
    dispatch(deleteCar({ carid: carId }));
  }

  return (
    <DefaultLayout>
      <div style={{ backgroundColor: '#F8F9FA', padding: '20px' }}>
        {loading && <Spin size="large" />}
        <Row justify="center" gutter={[16, 16]}>
          {cars.map((car) => (
            <Col
              key={car._id}
              lg={5}
              sm={12}
              xs={24}
              style={{ padding: '5px', margin: '5px' }}
            >
              <Card
                hoverable
                style={{ width: 240, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                cover={<img alt="car" src={car.image} className="card-img" />}
              >
                <Meta title={car.name} description={`Rs. ${car.rentPerHour}`} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <Popconfirm
                    title="Are you sure to delete this car?"
                    onConfirm={() => handleDeleteCar(car._id)}
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    placement="topRight"
                  >
                    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />
                  </Popconfirm>
                  <Link to={`/editcar/${car._id}`}>
                    <EditOutlined style={{ color: 'blue', cursor: 'pointer' }} />
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default AdminHome;
