import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Typography } from "antd";

const { Title } = Typography;

const Cancel = () => {
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
            Payment Unsuccessful! Please Retry
          </Title>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Your payment could not be processed successfully. Please retry your payment.
          </p>
          <p style={{ fontSize: "16px" }}>
            If the problem persists, please contact customer support.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cancel;