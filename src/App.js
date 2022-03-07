import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { v4 } from "uuid";
import { Table, Button, Input, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const App = () => {
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([
    {
      id: v4(),
      name: "Jaxongir",
      surename: "Muxutdinov",
      email: "john@mail.ru",
    },
    {
      id: v4(),
      name: "Azizbek",
      surename: "Mamadaliyev",
      email: "az@mail.ru",
    },
    {
      id: v4(),
      name: "Raimjon",
      surename: "Saidjonov",
      email: "jon@gmail.com",
    },
    {
      id: v4(),
      name: "Ziyovuddin",
      surename: "Sayfiyev",
      email: "ziy@mail.ru",
    },
  ]);
  const column = [
    {
      key: 1,
      title: "ID",
      dataIndex: "id",
    },
    {
      key: 2,
      title: "Name",
      dataIndex: "name",
    },
    {
      key: 3,
      title: "Surename",
      dataIndex: "surename",
    },
    {
      key: 4,
      title: "Email",
      dataIndex: "email",
    },
    {
      key: 5,
      title: "Actions",
      render: (record) => {
        return (
          <div>
            <EditOutlined style={{ color: "green", cursor: "pointer" }} />
            <DeleteOutlined
              style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
              onClick={() => onDelete(record)}
            />
          </div>
        );
      },
    },
  ];
  const onAdd = () => {
    if (name.length > 0 && surename.length > 0 && email.length > 0) {
      setData((prev) => {
        return [...prev, { id: v4(), name, surename, email }];
      });
    }
  };
  const onDelete = (record) => {
    Modal.confirm({
      title: "you are sure delete this student ?",
      onOk: () => {
        setData((prev) => prev.filter((value) => value.id !== record.id));
      },
    });
  };
  return (
    <div classtitle="App">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name..."
      />
      <Input
        type="text"
        value={surename}
        onChange={(e) => setSurename(e.target.value)}
        placeholder="surename..."
      />
      <Input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email..."
      />
      <Button onClick={onAdd}>Add a new student</Button>
      <div>
        <Table dataSource={data} columns={column}></Table>
      </div>
    </div>
  );
};

export default App;
