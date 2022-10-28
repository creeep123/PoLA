import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Button, List, Modal } from "antd";
import { Col, Row } from "antd";
import CourseList from "../../components/courseList";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InboxOutlined, CameraOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const { Header, Content, Footer, Sider } = Layout;

const props = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  method: "GET", //totally for mock
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setSuccess(true);
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Content
      style={{
        margin: "0 16px",
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        <Row
          style={{
            backgroundColor: "#F5F5F7",
            borderRadius: "20px",
          }}
          justify={"center"}
        >
          <Col span={10}>
            <Row>
              <Col span={20}>
                <img
                  width="80%"
                  src={
                    success
                      ? require("./assets/successPic.png")
                      : require("./assets/defultPic.png")
                  }
                  alt="DefaultPic"
                  style={{
                    marginTop: "65px",
                    marginLeft: "65px",
                  }}
                ></img>
              </Col>
            </Row>
            <Row justify={"center"}>
              <Button
                type="primary"
                shape="round"
                style={{
                  // marginLeft: "100px",
                  marginTop: "30px",
                  marginBottom: "40px",
                }}
                onClick={showModal}
              >
                Generate Avator
              </Button>
            </Row>
          </Col>

          <Col
            span={13}
            style={{
              backgroundColor: "#D9D9D9",
              marginTop: "60px",
              marginBottom: "100px",
              borderRadius: "20px",
            }}
          >
            <Row
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <p>Name: Jack</p>
            </Row>
            <Row
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <p>Id: 123456</p>
            </Row>
            <Row
              style={{
                marginTop: "40px",
                marginLeft: "40px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <p>Email: Jack@gmail.com</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            span={12}
            style={{
              marginTop: "30px",
              paddingLeft: "85px",
              backgroundColor: "#F5F5F7",
              borderRadius: "20px",
            }}
          >
            <img
              width="90%"
              src={require("./assets/hour.png")}
              alt="DefaultPic"
              style={{
                marginTop: "65px",
                marginLeft: "5px",
                marginBottom: "60px",
              }}
            ></img>
          </Col>
          <Col span={10}>
            <img
              width="100%"
              src={require("./assets/YOUR STATISTICS SECTION.png")}
              alt="DefaultPic"
              style={{
                marginTop: "65px",
                marginLeft: "65px",
              }}
            ></img>
          </Col>
        </Row>
      </div>

      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Dragger {...props} style={{ marginTop: "40px", marginBottom: "40px" }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          {/* <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p> */}
        </Dragger>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#F3F3F3",
            marginBottom: "20px",
          }}
        ></div>
        <button type="button" id="start-camera">open camera</button>
        <button type="button" id="snapshot-btn">take picture</button>
        <video id="preview-box" width="300" height="300" autoplay></video>
        <canvas width="300" height="300"></canvas>
      </Modal>
    </Content>
  );
};

const startCameraBtn = document.querySelector('#start-camera');  // 打开摄像头按钮
const snapshotBtn = document.querySelector('#snapshot-btn');  // 拍照按钮
const exportBtn = document.querySelector('#export-btn');  // 导出照片按钮
const previewBox = document.querySelector('#preview-box');  // 预览区
const canvas = document.querySelector('canvas');  // canvas用来显示拍摄的照片
let imgData = null;  // 存储图片数据

// 打开摄像头按钮点击
startCameraBtn.addEventListener('click', () => {
  // 申请摄像头权限
  navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
    // 把媒体流直接传给 video 的 srcObject
    previewBox.srcObject = stream;
  }).catch(info => {
    alert('无法获取摄像头权限：' + info);
  });
});

// 拍照按钮点击
snapshotBtn.addEventListener('click', () => {
  // 绘制 2D 图像
  canvas.getContext('2d').drawImage(previewBox, 0, 0, previewBox.width, previewBox.height);
  // 把 canvas 的图像转换为 dataURL 数据
  imgData = canvas.toDataURL('image/jpeg');
});

export default ProfilePage;
