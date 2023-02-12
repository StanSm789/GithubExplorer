import React from "react";
import { Table } from "antd";

const columns = [
    {
    title: "Avatar",
    dataIndex: "avatar_url",
    key: "avatar_url",
    render: (text, record) => <img src={record.avatar_url} alt={record.Name} />,
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

const data = [
  {
    key: 1,
    avatar_url: "https://example.com/avatar1.jpg",
    login: "John Doe",
    type: "Person",
    url: "https://example.com/john_doe",
  },
  {
    key: 2,
    avatar_url: "https://example.com/avatar2.jpg",
    login: "Jane Doe",
    type: "Person",
    url: "https://example.com/jane_doe",
  },
  {
    key: 3,
    avatar_url: "https://example.com/avatar3.jpg",
    login: "Jim Smith",
    type: "Person",
    url: "https://example.com/jim_smith",
  },
];

const MainPage = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 240 }}
    />
  );
};

export default MainPage;
