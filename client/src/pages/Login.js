// import React from 'react';
// import { Row, Col,Form,Input, Button, Anchor } from 'antd';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../redux/actions/userActions';




// function Login(){
//         const dispatch = useDispatch();

    
//         function onFinish(values){
//             dispatch(userLogin(values));
//             console.log(values);
//         }

//     return(
//         <div  >
//             <Row  gutter={16} style={{
//                 marginTop:100
//             }}>
//                 <Col lg={8}></Col>
//                 <Col lg={8} className='login'>
//                 <Form layout="vertical" onFinish={onFinish}>
//                 <h1>Login</h1>
//                 <hr />
//                 <Form.Item name='username' label='Username' rules={[{required: true}]}>
//                 <Input/>
//                 </Form.Item>
//                 <Form.Item name='password' label='Password' rules={[{required: true}]}>
//                 <Input.Password/>
//                 </Form.Item>
//                 <button type="primary">Login</button>
//                 <br>
//                 </br>
//                 <Anchor
//                     items={[
//                     {
//                         key: 'register',
//                         href: '/register',
//                         title: 'Click here to register',
//                     }
//                     ]}
//                 />
//                 </Form>
//                 </Col>
           
//             </Row>
//         </div>
//     )
// }

// export default Login;
import React from 'react';
import { Row, Col, Form, Input, Button, Anchor } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';

function Login() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userLogin(values));
    console.log(values);
  };

  return (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
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
            <h1 style={{ marginBottom: 30 }}>Login</h1>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
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
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
                Login
              </Button>
            </Form.Item>
            <Anchor>
              <Anchor.Link href="/register" title="Click here to register" />
            </Anchor>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

