import React from "react";
import { Layout, Row, Col, Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const SignupPage = () => {
  const navigate = useNavigate();

  // Navigate to dashboard on button click
  const handleProceed = () => {
    navigate("/Dash"); // Ensure the path matches what's in App.jsx
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* Header */}
        <Header style={{ backgroundColor: "#fff", padding: "0 50px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              c<span style={{ color: "#1890ff" }}>u</span>vette
            </h1>
            <div style={{ fontSize: "16px" }}>Contact</div>
          </div>
        </Header>

        {/* Content Section */}
        <Content style={{ padding: "50px" }}>
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            {/* Left Section - Description */}
            <Col span={10} style={{ paddingRight: "20px" }}>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </Col>

            {/* Right Section - Verified Message */}
            <Col span={8}>
              <Card
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text
                </p>

                {/* Verification Message */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <CheckCircleOutlined
                    style={{ fontSize: "48px", color: "green" }}
                  />
                  <h3 style={{ color: "green", marginTop: "10px" }}>
                    Verified!
                  </h3>
                  <p>
                    Your email and mobile number have been successfully
                    verified.
                  </p>
                </div>

                <Button type="primary" block onClick={handleProceed}>
                  Proceed to Dashboard
                </Button>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default SignupPage;
