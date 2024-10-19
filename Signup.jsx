import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  // Navigate to otpPage on form submission
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        values
      );
      if (response.status === 200) {
        message.success("Sign up successful! OTP sent to your email.");
        navigate("/OtpPage");
      } else {
        message.error("Error during sign-up.");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Sign up failed!");
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left side text section */}
      <div style={{ flex: 1, padding: "50px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
          c<span style={{ color: "#1890ff" }}>u</span>vette
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
      </div>

      {/* Sign Up Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div
          style={{
            padding: "30px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <p style={{ textAlign: "center" }}>
            Lorem Ipsum is simply dummy text
          </p>

          <Form
            name="signUp"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Phone no."
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input placeholder="Phone no." />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please input your company name!" },
              ]}
            >
              <Input placeholder="Company Name" />
            </Form.Item>

            <Form.Item
              label="Company Email"
              name="companyEmail"
              rules={[
                { required: true, message: "Please input your company email!" },
                { type: "email", message: "The input is not valid E-mail!" },
              ]}
            >
              <Input placeholder="Company Email" />
            </Form.Item>

            <Form.Item
              label="Employee Size"
              name="employeeSize"
              rules={[
                { required: true, message: "Please input the employee size!" },
              ]}
            >
              <Input placeholder="Employee Size" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Proceed
              </Button>
            </Form.Item>

            <p style={{ textAlign: "center" }}>
              By clicking on proceed you will accept our{" "}
              <a href="#">Terms & Conditions</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
