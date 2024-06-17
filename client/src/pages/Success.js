// import React from "react";
// import DefaultLayout from "../components/DefaultLayout";
// import { Typography } from "antd";

// const { Title } = Typography;

// const Success = () => {
//   return (
//     <DefaultLayout>
//       <div
//         style={{
//           backgroundColor: "#F8F9FA",
//           height: "70vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ maxWidth: "600px", padding: "20px" }}>
//           <Title level={2} style={{ marginBottom: "20px" }}>
//             Payment Successful! Thank You
//           </Title>
//           <p style={{ fontSize: "18px", marginBottom: "20px" }}>
//             Your payment has been successfully processed. Thank you for booking
//             with us.
//           </p>
//           <p style={{ fontSize: "16px" }}>
//             We look forward to serving you again in the future.
//           </p>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default Success;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For react-router-dom v6
import DefaultLayout from "../components/DefaultLayout";
import { Typography } from "antd";

const { Title } = Typography;

const Success = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigate]);
  useEffect(() => {
    setTimeout(() => {
      count > 0 && setCount(count - 1);
    }, 1000);
  });

  return (
    <DefaultLayout>
      <div
        style={{
          backgroundColor: "#F8F9FA",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", padding: "20px" }}>
          <Title level={2} style={{ marginBottom: "20px" }}>
            Payment Successful! Thank You
          </Title>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Your payment has been successfully processed. Thank you for booking
            with us.
          </p>
          <p style={{ fontSize: "16px" }}>
            We look forward to serving you again in the future.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Redirecting you to homepage in {count}...
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Success;
