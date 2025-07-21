"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Modal, Space } from "antd";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
} from "../../libs/redux/actions/userActions";
import { getUserTableHeaders } from "./tableHeaders";
import { UserInfo } from "./components/userInfo";
// import { Calculator } from "../../components/calculator";


export default function Users(props) {
  const userData = useSelector((store) => store?.users || {});
  const dispatch = useDispatch();

  const [openModel, setOpenModel] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleEdit = (record) => {
    setUserInfo(record);
    setIsEditMode(true);
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
    setIsEditMode(false);
    setUserInfo(null);
  };

  const handleDelete = (record) => {
    dispatch(deleteUser(record.id));
  };

  const onSubmitNewUser = (formData) => {
    console.log("##formData: ", formData);
    dispatch(
      addUser({
        ...formData,
      })
    );
    handleCloseModel();
  };
  const onSubmitEditedUser = (formData) => {
    console.log("##formData: ", formData);
    dispatch(
      editUser({
        ...formData,
      })
    );
    handleCloseModel();
  };

  let headers = useMemo(() => getUserTableHeaders(dispatch), []);
  headers = [
    ...headers,
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size={20}>
            <EditOutlined onClick={() => handleEdit({ ...record })} />
            <DeleteOutlined onClick={() => handleDelete({ ...record })} />
          </Space>
        );
      },
    },
  ];

  // return (
  //   <Calculator />
  // )

  return (
    <div className={styles.usersListContainer}>
      <div className={styles.userActions}>
        <Button
          type="primary"
          icon={<UserAddOutlined />}
          onClick={() => {
            setUserInfo(null);
            setOpenModel(true);
          }}
        >
          Add User
        </Button>
      </div>
      <Table
        columns={headers}
        rowKey={(record) => record.id}
        dataSource={userData?.data || []}
        pagination={tableParams.pagination}
        loading={userData?.isLoading}
      />
      {openModel && (
        <Modal
          title={isEditMode ? "Edit User" : "Add User"}
          centered
          open={openModel}
          // onOk={handleCloseModel}
          onCancel={handleCloseModel}
          footer={null}
          maskClosable={true}
          width={1000}
        >
          <UserInfo
            onSubmit={isEditMode ? onSubmitEditedUser : onSubmitNewUser}
            userInfo={userInfo}
          />
        </Modal>
      )}
    </div>
  );
}

// export default Users;
