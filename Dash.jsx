import React, { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Dropdown,
} from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const Dash = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const onFinish = (values) => {
    console.log("Form Submitted: ", values);
  };

  // Handle logout
  const handleLogout = () => {
    navigate("/"); // Navigate to the signup page
  };

  // Dropdown menu for Contact
  const contactMenu = (
    <Menu>
      <Menu.Item key="1" icon={<PhoneOutlined />}>
        +123 456 789
      </Menu.Item>
      <Menu.Item key="2" icon={<MailOutlined />}>
        contact@cuvette.com
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider theme="light" width={80}>
        <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
          <Menu.Item key="1" icon={<HomeOutlined />} />
        </Menu>
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="logo"
            style={{
              marginLeft: "20px",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#1d2b4d",
            }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              c<span style={{ color: "#1890ff" }}>u</span>vette
            </h1>
          </div>

          {/* Dropdown for Contact and Logout */}
          <Dropdown overlay={contactMenu} placement="bottomRight" arrow>
            <Button style={{ marginRight: "20px" }}>Contact</Button>
          </Dropdown>
        </Header>

        {/* Content */}
        <Content style={{ padding: "24px", background: "#fff" }}>
          {/* Button to toggle form visibility */}
          {!isFormVisible && (
            <Button
              type="primary"
              style={{ marginBottom: "20px" }}
              onClick={() => setIsFormVisible(true)} // Show the form when clicked
            >
              Create Interview
            </Button>
          )}

          {/* Render form only when isFormVisible is true */}
          {isFormVisible && (
            <Form
              name="create-interview"
              layout="vertical"
              onFinish={onFinish}
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <Form.Item
                label="Job Title"
                name="jobTitle"
                rules={[
                  { required: true, message: "Please enter the job title" },
                ]}
              >
                <Input placeholder="Enter Job Title" />
              </Form.Item>

              <Form.Item
                label="Job Description"
                name="jobDescription"
                rules={[
                  {
                    required: true,
                    message: "Please enter the job description",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Enter Job Description" />
              </Form.Item>

              <Form.Item
                label="Experience Level"
                name="experienceLevel"
                rules={[
                  { required: true, message: "Please select experience level" },
                ]}
              >
                <Select placeholder="Select Experience Level">
                  <Option value="junior">Junior</Option>
                  <Option value="mid">Mid</Option>
                  <Option value="senior">Senior</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Add Candidate"
                name="candidateEmail"
                rules={[
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input placeholder="xyz@gmail.com" />
              </Form.Item>

              <Form.Item
                label="End Date"
                name="endDate"
                rules={[
                  { required: true, message: "Please select the end date" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dash;
