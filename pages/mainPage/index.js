import styles from "../common.module.css";
import Head from "next/head";
import {SideBar} from "../menu";
import Panel1 from "../panels/panel1";
import Panel2 from "../panels/panel2";

const MainPage = () => {
    return <div className={styles.common}>
        <Head>
            <title>Main page</title>
        </Head>
        <SideBar/>
        <Panel1/>
        <Panel2/>
    </div>
};

export default MainPage;