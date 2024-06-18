// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import DefaultLayout from "../components/DefaultLayout";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_ejz0yuc", // Replace with your EmailJS service ID
//         "template_6305coc", // Replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         "X2PgNkun9WTnClyO-" // Replace with your EmailJS user ID
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response.status, response.text);
//           alert("Your message has been sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Failed to send the email.", error);
//           alert("Failed to send the message. Please try again later.");
//         }
//       );
//   };

//   const formStyles = {
//     container: {
//       maxWidth: "600px",
//       margin: "0 auto",
//       padding: "20px",
//       backgroundColor: "#0D1B2A",
//       borderRadius: "10px",
//       color: "#FFFFFF",
//       fontFamily: "Arial, sans-serif",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "20px",
//       color: "#E0E1DD",
//     },
//     formGroup: {
//       marginBottom: "15px",
//     },
//     label: {
//       display: "block",
//       marginBottom: "5px",
//       fontSize: "14px",
//       color: "#A9A9A9",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       borderRadius: "5px",
//       border: "1px solid #2E3B4E",
//       backgroundColor: "#1B263B",
//       color: "#F1F1F1",
//       fontSize: "16px",
//       outline: "none",
//       transition: "border-color 0.2s",
//     },
//     textarea: {
//       width: "100%",
//       padding: "10px",
//       borderRadius: "5px",
//       border: "1px solid #2E3B4E",
//       backgroundColor: "#1B263B",
//       color: "#F1F1F1",
//       fontSize: "16px",
//       minHeight: "100px",
//       resize: "vertical",
//       outline: "none",
//       transition: "border-color 0.2s",
//     },
//     submitButton: {
//       width: "100%",
//       padding: "15px",
//       borderRadius: "5px",
//       border: "none",
//       backgroundColor: "#2E3B4E",
//       color: "#E0E1DD",
//       fontSize: "18px",
//       cursor: "pointer",
//       marginTop: "10px",
//       transition: "background-color 0.2s",
//     },
//     inputFocus: {
//       borderColor: "#67C8FF",
//     },
//     buttonHover: {
//       backgroundColor: "#67C8FF",
//     },
//   };

//   const handleFocus = (e) => {
//     e.target.style.borderColor = formStyles.inputFocus.borderColor;
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = "#2E3B4E";
//   };

//   const handleMouseEnter = (e) => {
//     e.target.style.backgroundColor = formStyles.buttonHover.backgroundColor;
//   };

//   const handleMouseLeave = (e) => {
//     e.target.style.backgroundColor = "#2E3B4E";
//   };

//   return (
//     <DefaultLayout>
//       <div style={{paddingTop: 40, textAlign: "center", backgroundColor: '#f0f2f5',
//               padding: 30,
//               borderRadius: 8,
//               boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'}}>
//         <h1 style={{color: "black"}}>Contact Us</h1>
//         <form onSubmit={handleFormSubmit}>
//           <div style={formStyles.formGroup}>
//             <label style={formStyles.label} htmlFor="name">
//               Name
//             </label>
//             <input
//               style={formStyles.input}
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//           </div>
//           <div style={formStyles.formGroup}>
//             <label style={formStyles.label} htmlFor="email">
//               Email
//             </label>
//             <input
//               style={formStyles.input}
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//           </div>
//           <div style={formStyles.formGroup}>
//             <label style={formStyles.label} htmlFor="subject">
//               Subject
//             </label>
//             <input
//               style={formStyles.input}
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleInputChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//           </div>
//           <div style={formStyles.formGroup}>
//             <label style={formStyles.label} htmlFor="message">
//               Message
//             </label>
//             <textarea
//               style={formStyles.textarea}
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//           </div>
//           <button
//             style={formStyles.submitButton}
//             type="submit"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default Contact;
// import React, { useState } from "react";
// import { Row, Col, Form, Input, Button, Anchor } from 'antd';
// import emailjs from "emailjs-com";
// import DefaultLayout from "../components/DefaultLayout";
// import TextArea from "antd/es/input/TextArea";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_ejz0yuc", // Replace with your EmailJS service ID
//         "template_6305coc", // Replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         "X2PgNkun9WTnClyO-" // Replace with your EmailJS user ID
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response.status, response.text);
//           alert("Your message has been sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Failed to send the email.", error);
//           alert("Failed to send the message. Please try again later.");
//         }
//       );
//   };

//   const formStyles = {
//     container: {
//       maxWidth: "600px",
//       margin: "0 auto",
//       padding: "20px",
//       backgroundColor: "#0D1B2A",
//       borderRadius: "10px",
//       color: "#FFFFFF",
//       fontFamily: "Arial, sans-serif",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "20px",
//       color: "#E0E1DD",
//     },
//     formGroup: {
//       marginBottom: "15px",
//     },
//     label: {
//       display: "block",
//       marginBottom: "5px",
//       fontSize: "14px",
//       color: "#A9A9A9",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       borderRadius: "5px",
//       border: "1px solid #2E3B4E",
//       backgroundColor: "#1B263B",
//       color: "#F1F1F1",
//       fontSize: "16px",
//       outline: "none",
//       transition: "border-color 0.2s",
//     },
//     textarea: {
//       width: "100%",
//       padding: "10px",
//       borderRadius: "5px",
//       border: "1px solid #2E3B4E",
//       backgroundColor: "#1B263B",
//       color: "#F1F1F1",
//       fontSize: "16px",
//       minHeight: "100px",
//       resize: "vertical",
//       outline: "none",
//       transition: "border-color 0.2s",
//     },
//     submitButton: {
//       width: "100%",
//       padding: "15px",
//       borderRadius: "5px",
//       border: "none",
//       backgroundColor: "#2E3B4E",
//       color: "#E0E1DD",
//       fontSize: "18px",
//       cursor: "pointer",
//       marginTop: "10px",
//       transition: "background-color 0.2s",
//     },
//     inputFocus: {
//       borderColor: "#67C8FF",
//     },
//     buttonHover: {
//       backgroundColor: "#67C8FF",
//     },
//   };

//   const handleFocus = (e) => {
//     e.target.style.borderColor = formStyles.inputFocus.borderColor;
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = "#2E3B4E";
//   };

//   const handleMouseEnter = (e) => {
//     e.target.style.backgroundColor = formStyles.buttonHover.backgroundColor;
//   };

//   const handleMouseLeave = (e) => {
//     e.target.style.backgroundColor = "#2E3B4E";
//   };

//   return (
//     <DefaultLayout>
//       <div style={{ paddingTop: 40, textAlign: 'center' }}>
//       <Row justify="center">
//         <Col lg={8} md={12} sm={20} xs={24}>
//           <Form
//             layout="vertical"
//             style={{
//               backgroundColor: '#f0f2f5',
//               padding: 30,
//               borderRadius: 8,
//               boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <h1 style={{ marginBottom: 30 }}>Contact us</h1>
//             <hr />
//             <Form.Item
//               name="name"
//               label="Name"
//               rules={[{ required: true, message: 'Please enter your Name!' }]}
//             >
//               <Input size="large" />
//             </Form.Item>
//             <Form.Item
//               name="email"
//               label="Email"
//               rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
//             >
//               <Input size="large" />
//             </Form.Item>
//             <Form.Item
//               name="subject"
//               label="Subject"
//               rules={[{ required: true, message: 'Please enter the subject!' }]}
//             >
//               <Input size="large" />
//             </Form.Item>
//             <Form.Item
//               name="messge"
//               label="Message"
//               rules={[{ required: true, message: 'Write your message here!' }]}
//             >
//               <TextArea rows={4} />
//             </Form.Item>
//             <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
//               Send Message
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//     </DefaultLayout>
//   );
// };

// export default Contact;
import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import DefaultLayout from "../components/DefaultLayout";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const success = () => {
    messageApi.open({
      type: "success",
      content: `Your message has been sent successfully! Redirecting you to home page...`,
      duration: 3,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    emailjs
      .send(
        "service_ejz0yuc", // Replace with your EmailJS service ID
        "template_6305coc", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "X2PgNkun9WTnClyO-" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          // alert("Your message has been sent successfully!");
          form.resetFields();
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send the email.", error);
          // alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <DefaultLayout>
      {contextHolder}
      <div style={{ textAlign: "center" }}>
        <Row justify="center">
          <Col lg={8} md={12} sm={20} xs={24}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFormSubmit}
              style={{
                backgroundColor: "#f0f2f5",
                padding: 30,
                borderRadius: 8,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h1 style={{ marginBottom: 30 }}>Contact us</h1>
              <hr />
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your Name!" }]}
              >
                <Input
                  size="large"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  { required: true, message: "Please enter the subject!" },
                ]}
              >
                <Input
                  size="large"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Write your message here!" },
                ]}
              >
                <TextArea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: "100%" }}
                onClick={success}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2159707637284!2d85.79765577469409!3d20.24987591407535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a3b9692fff%3A0x87cd0a356bbc39ce!2sITER%2C%20Siksha%20&#39;O&#39;%20Anusandhan!5e0!3m2!1sen!2sin!4v1718674487209!5m2!1sen!2sin"
          width="500"
          height="300"
          style={{border:0, marginTop: 50, borderRadius: 8, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'}}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
