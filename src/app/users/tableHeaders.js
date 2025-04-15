export const getUserTableHeaders = (dispatch) => {
  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
      sorter: true,
      width: "20%",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      sorter: true,
      width: "20%",
    },
    {
      title: "email",
      dataIndex: "email",
      sorter: true,
      width: "20%",
    },
    {
      title: "phone",
      dataIndex: "phone",
      sorter: true,
      width: "20%",
    },
    {
      title: "role",
      dataIndex: "role",
      sorter: true,
      width: "20%",
    },
  ];
  return columns;
};
