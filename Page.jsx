import React from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Avatar,
  Badge,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const OtpPage = () => {
  const navigate = useNavigate();

  // Navigate to otpPage on form submission
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/SignupPage"); // Ensure the path matches what's in App.jsx
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ background: "#fff", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              c<span style={{ color: "#1890ff" }}>u</span>vette
            </h1>
          </div>
        </Header>

        <Content style={{ padding: "50px" }}>
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Col span={12}>
              <p style={{ textAlign: "left" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>

            <Col span={8}>
              <Card>
                <h2>Sign Up</h2>
                <p>Lorem Ipsum is simply dummy text</p>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Email ID" name="email">
                    <Input placeholder="email otp" />
                  </Form.Item>
                  {/* <Form.Item>
                    <Button type="primary" block>
                      Verify
                    </Button>
                  </Form.Item> */}

                  <Form.Item label="Mobile OTP" name="otp">
                    <Input placeholder="Enter OTP" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      verify
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

// Make sure this export is present
export default OtpPage;
