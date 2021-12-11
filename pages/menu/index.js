import React from 'react';
import 'antd/dist/antd.css';
import {Button, Image, Menu} from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    FileImageOutlined,
    GiftOutlined,
    GlobalOutlined,
    HeartOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PayCircleOutlined,
    PhoneOutlined,
    PieChartOutlined,
    PoundCircleOutlined,
    ProfileOutlined,
    ReadOutlined,
    ShoppingOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import styles from "./menu.module.css"
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import Link from "next/link";


const {SubMenu} = Menu;

export function SideBar() {
    const [state, setState] = React.useState({collapsed: false})
    let {t} = useTranslation("mainPage")

    const toggleCollapsed = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const image = "https://innovationmap.innoagency.ru/logo/%D0%9B%D0%BE%D0%B3%D0%BE1145.png"

    let {locales, asPath} = useRouter()


    return (
        <>
            <div className={styles.header}>
                <ul>
                    {locales.map(locale => <li key={locale}>
                        <Link href={asPath} locale={locale}><a>{locale}</a></Link>
                    </li>)}
                </ul>
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
                        {t("Main")}
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileImageOutlined/>}>
                        {t("Pictures")}
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        {t("About us")}
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<ShoppingOutlined/>} title={t("Products")}>
                        <Menu.Item key="4" icon={
                            <PoundCircleOutlined/>}>{t("Nylon bracelet")}</Menu.Item>
                        <Menu.Item key="5" icon={
                            <PayCircleOutlined/>}>{t("Silicone bracelet")}</Menu.Item>
                        <Menu.Item key="6" icon={
                            <HeartOutlined/>}>{t("QRepublik ID Tag supports")}</Menu.Item>
                        <Menu.Item key="7" icon={
                            <GiftOutlined/>}>{t("Medical ID Sleeve")}</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined/>}
                             title={t("Information")}>
                        <Menu.Item key="8" icon={<ReadOutlined/>}>{t("Notes")}</Menu.Item>
                        <Menu.Item key="9"
                                   icon={<TeamOutlined/>}>{t("Partners")}</Menu.Item>
                        <SubMenu key="sub3" icon={<ProfileOutlined/>}
                                 title={t("Contacts")}>
                            <Menu.Item key="10"
                                       icon={<HomeOutlined/>}>{t("Our shops")}</Menu.Item>
                            <Menu.Item key="11" icon={
                                <PhoneOutlined/>}>{t("Telephone")}</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        </>

    );
}