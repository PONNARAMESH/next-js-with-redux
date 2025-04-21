'use client';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../libs/redux/actions/themeActions";
import { Menu, Switch } from "antd";

const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'about',
    label: 'About'
  },
  {
    key: 'users',
    label: 'Users'
  }
];

export const PublicHeader = (props) => {
  const dispatch = useDispatch();
  const themeData = useSelector(state => state?.theme)
  const toggleTheme = () => {
    dispatch(changeTheme())
  }
  return (
    <>
    <nav className="navBar">
      <div className="demo-logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={menuItems?.at(2).key}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
      />
      <span className="themeText">Theme:&nbsp;&nbsp;<Switch value={themeData?.theme === 'dark' ? true : false} onChange={toggleTheme} /></span>
    </nav>
    </>
  );
};
