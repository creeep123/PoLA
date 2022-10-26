import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { message } from 'antd';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import backgroundImg from './assets/landing-bg.png';
import { Typography } from 'antd';
const { Paragraph, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const Landing = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [connected, setConnected] = useState('');

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      let ethereum = window.ethereum;
      // 实例化web3
      window.web3 = new Web3(ethereum);
      let web3 = window.web3;
      // 请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
      const enable = await ethereum.enable();
      // console.log(enable, 11);
      // 授权获取账户
      var accounts = await web3.eth.getAccounts();
      // web3.eth.getAccounts().then((e)=>{console.log(e)})
      // 取第一个账户
      var myAccount = accounts[0];
      console.log('Your wallet address:' + myAccount);
      setWalletAddress(myAccount);
      setConnected(true);
      message.success('Wallet Connected Successfully');
      // 返回指定地址账户的余额
      // var balance = await web3.eth.getBalance(myAccount);
      // console.log(balance, 2);
    }
  }

  // useEffect(() => {
  //   const getWalletAddr = async () => {
  //     await get();
  //   };
  //   getWalletAddr();
  // });

  return (
    <div
      style={{
        margin: '0',
        // width:'100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Row>
        <Col span={20}></Col>
        <Col span={4} style={{ marginTop: '24px' }}>
          {connected ? (
            <Link to="/home">
            <Button
              type="primary"
              shape="round"
              size={'large'}
              // onClick={connectWallet}
            >
              Launch App
            </Button>
            </Link>
          ) : (
            <Button
              type="primary"
              shape="round"
              size={'large'}
              onClick={connectWallet}
            >
              Connect
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={20}></Col>
        <Col span={4} style={{ marginTop: '8px' }}>
          <Text
            style={{ width: 100 }}
            ellipsis={{ tooltip: { walletAddress } }}
          >
            {walletAddress}
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
