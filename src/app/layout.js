import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "./storeProviders";
import { Layout, Menu } from "antd";
import { PublicHeader } from "../components/header";
import { ThemeProvider } from "../components/themeProvider";
import "./globals.css";
import PublicLayout from "../components/PublicLayout";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AntdRegistry>
            <PublicLayout children={children}/>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
