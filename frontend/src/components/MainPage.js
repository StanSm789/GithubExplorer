import React, { useState, useEffect } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar_url",
    key: "avatar_url",
    render: (text, record) => <img src={record.avatar_url} alt={record.Name} 
    style={{ width: 100, height: 100 }}/>,
  },
  {
    title: "Name",
    dataIndex: "login",
    key: "login",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "URL",
    dataIndex: "url",
    key: "url",
    render: (text, record) => (
      <a href={record.url} target="_blank" rel="noopener noreferrer">
        {record.url}
      </a>
    ),
  },
];

const MainPage = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={{ pageSize: 10 }}
      scroll={{ y: "calc(100vh - 200px)" }}
    />
  );
};

export default MainPage;
