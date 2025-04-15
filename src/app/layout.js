import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "./storeProviders";
import { Layout, Menu } from "antd";
import { PublicHeader } from "../components/header";
import { ThemeProvider } from "../components/themeProvider";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body data-theme="dark">
        <StoreProvider>
          <AntdRegistry>
            <Layout>
              <PublicHeader />
              <ThemeProvider>{children}</ThemeProvider>
            </Layout>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
