// import React from "react";
// import DefaultLayout from "../components/DefaultLayout";

// const success = () => {
//   return (
//     <div>
//       <DefaultLayout>Payment Successful! Thank You</DefaultLayout>
//     </div>
//   );
// };

// export default success;
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Typography } from "antd";

const { Title } = Typography;

const Success = () => {
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Success;
