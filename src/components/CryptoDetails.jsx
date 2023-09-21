import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  // useGetCryptoHistoryQuery,
} from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;
function CryptoDetails() {


  const {coinId}=useParams();

  const [timePeriod, setTime]=useState('7d')
  const {data, isFetching}=useGetCryptoDetailsQuery(coinId);
  console.log(data);

  return (<div>CryptoDetails {coinId}</div>);
}

export default CryptoDetails;
