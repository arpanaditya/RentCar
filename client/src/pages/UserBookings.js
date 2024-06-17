import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Card, Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';

function UserBookings() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings/getallbookings');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  const reversedData = data.slice().reverse();

  return (
    <DefaultLayout>
      <div style={{ backgroundColor: '#F8F9FA', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Bookings</h1>
        <Row justify="center">
          <Col lg={20} sm={24}>
            {loading ? (
              <div style={{ textAlign: 'center' }}>
                <Spin size="large" />
              </div>
            ) : reversedData && reversedData.length > 0 ? (
              reversedData.map((item, index) => (
                <Card
                  type="inner"
                  className="w-100 mt-3 mb-3"
                  title={`Transaction id : ${item.transactionId}`}
                  key={item._id || index} // Use a unique key
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                  <Row className="m-2">
                    <Col lg={7} sm={24}>
                      <p>Total days : <b>{item.totalHours}</b></p>
                      <p>Rent per day : <b>{item.car?.rentPerHour}</b></p>
                      <p>Total Amount : <b>{item.totalAmount}</b></p>
                    </Col>
                    <Col lg={10} sm={24}>
                      <p>Name : <b>{item.car?.name}</b></p>
                      <p>From : <b>{item.bookedTimeSlots?.from}</b></p>
                      <p>To : <b>{item.bookedTimeSlots?.to}</b></p>
                      <p>Date of booking : <b>{moment(item.createdAt).format('MMM DD yyyy')}</b></p>
                    </Col>
                    <Col lg={7} sm={24}>
                      {item.car && item.car.image ? (
                        <img src={item.car.image} height="150" alt="CarImage" style={{ borderRadius: '8px' }} />
                      ) : (
                        <p>No image available</p>
                      )}
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <p>No bookings available</p>
            )}
          </Col>
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default UserBookings;
