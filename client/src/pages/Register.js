// import React from "react";
// import { Row, Col, Form, Input, Button, Anchor } from "antd";
// import { useDispatch } from "react-redux";
// import { userRegister } from "../redux/actions/userActions";

// function Register() {
//   const dispatch = useDispatch();

//   function onFinish(values) {
//     dispatch(userRegister(values));
//     console.log(values);
//   }

//   return (
//     <div>
//       <Row
//         gutter={16}
//         style={{
//           marginTop: 60,
//         }}
//       >
//         <Col lg={8}></Col>
//         <Col lg={8} className="login">
//           <Form layout="vertical" onFinish={onFinish}>
//             <h1>Register</h1>
//             <hr />
//             <Form.Item
//               name="username"
//               label="Username"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="email"
//               label="Email"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="phone"
//               label="Phone"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true }]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <Form.Item
//               name="cpassword"
//               label="Confirm password"
//               rules={[{ required: true }]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <button
//               type="primary"
//               style={{
//                 marginBottom: 4,
//               }}
//             >
//               Register
//             </button>
//             <br></br>
//             <Anchor
//               items={[
//                 {
//                   key: "login",
//                   href: "/login",
//                   title: "Click here to login",
//                 },
//               ]}
//             />
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Register;
import React from 'react';
import { Row, Col, Form, Input, Button, Anchor } from 'antd';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

function Register() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userRegister(values));
    console.log(values);
  };

  return (
    <div style={{ paddingTop: 40, textAlign: 'center' }}>
      <Row justify="center">
        <Col lg={8} md={12} sm={20} xs={24}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{
              backgroundColor: '#f0f2f5',
              padding: 30,
              borderRadius: 8,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h1 style={{ marginBottom: 30 }}>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm password"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
              Register
            </Button>
            <Anchor style={{ marginTop: 10 }}>
              <Anchor.Link href="/login" title="Click here to login" />
            </Anchor>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
