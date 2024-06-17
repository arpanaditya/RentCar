// import { Button, Col, Form, Input, Row } from "antd";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import DefaultLayout from "../components/DefaultLayout";
// import Spinner from "../components/Spinner";
// import { addCar } from "../redux/actions/carsActions";

// function AddCar() {
//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.alertsReducer);

//   const onFinish = (values) => {
//     values.bookedTimeSlots = [];

//     dispatch(addCar(values));

//     console.log("Success:", values);
//   };

//   return (
//     <DefaultLayout>
//       {loading && <Spinner />}
//       <Row justify="center mt-5">
//         <Col lg={12} sm={24}>
//           <Form className="p-2" layout="vertical" onFinish={onFinish}>
//             <h1>Add car</h1>
//             <Form.Item
//               label="Car name"
//               name="name"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the car name!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Image URL"
//               name="image"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the image!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Rent Per Day"
//               name="rentPerHour"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the rent!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Capacity"
//               name="capacity"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the capacity!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Fuel Type"
//               name="fuelType"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the fuel type!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item>
//               <div className="text-right">
//                 <Button type="primary" htmlType="submit">
//                   Add car
//                 </Button>
//               </div>
//             </Form.Item>
//           </Form>
//         </Col>
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default AddCar;
import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { addCar } from '../redux/actions/carsActions';

function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  const onFinish = (values) => {
    values.bookedTimeSlots = [];

    dispatch(addCar(values));

    console.log('Success:', values);
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center" className="mt-5">
        <Col lg={12} sm={24}>
          <Form
            className="p-2"
            layout="vertical"
            onFinish={onFinish}
            style={{ backgroundColor: '#F8F9FA', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <h1>Add Car</h1>
            <Form.Item
              label="Car Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input the car name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Image URL"
              name="image"
              rules={[
                {
                  required: true,
                  message: 'Please input the image URL!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Rent Per Hour"
              name="rentPerHour"
              rules={[
                {
                  required: true,
                  message: 'Please input the rent per hour!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Capacity"
              name="capacity"
              rules={[
                {
                  required: true,
                  message: 'Please input the capacity!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Fuel Type"
              name="fuelType"
              rules={[
                {
                  required: true,
                  message: 'Please input the fuel type!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <div className="text-right">
                <Button type="primary" htmlType="submit">
                  Add Car
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default AddCar;
