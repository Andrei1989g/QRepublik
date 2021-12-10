import React from 'react';
import 'antd/dist/antd.css';
import {Button, Image, Menu} from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    GlobalOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import styles from "./menu.module.css"


const {SubMenu} = Menu;

export function SideBar() {
    const [state, setState] = React.useState({collapsed: false})

    const toggleCollapsed = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const image = "https://innovationmap.innoagency.ru/logo/%D0%9B%D0%BE%D0%B3%D0%BE1145.png"
    return (
        <>
            <div className={styles.header}>
                <Button onClick={toggleCollapsed}
                        style={{
                            top: "8px",
                            left: "10px",
                            marginBottom: 16,
                            background: "dodgerblue",
                            color: "white",
                            border: "none"
                        }}>
                    {React.createElement(state.collapsed ?
                        MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <span className={styles.logo}>
                        <Image className={styles.image}
                               src={image}
                               alt="logo"/>
                        <> QREPUBLIC</>
                    </span>
                <GlobalOutlined style={{
                    position: "absolute", right: "15px", top: "15px",
                    color: "white", cursor: "pointer"
                }}/>
            </div>

            <div className={styles.sidebar} style={{width: 256, minHeight: "100vh"}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={state.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        </>

    );
}