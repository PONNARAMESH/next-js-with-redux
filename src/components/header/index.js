'use client';
import { useDispatch } from "react-redux";
import { changeTheme } from "../../libs/redux/actions/themeActions";
import { Menu, Switch } from "antd";


const items1 = [
  {
    key: "home",
    label: `Home`,
  },
  {
    key: "about",
    label: `About`,
  },
];


export const PublicHeader = (props) => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme())
  }
  return (
    <>
    <nav className="navBar">
      <div className="demo-logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
      <Switch defaultChecked onChange={toggleTheme} />
    </nav>
    </>
  );
};
