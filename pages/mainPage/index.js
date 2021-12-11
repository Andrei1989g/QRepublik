import styles from "../common.module.css";
import Head from "next/head";
import {SideBar} from "../menu";
import Panel1 from "../panels/panel1";
import Panel2 from "../panels/panel2";
import useTranslation from "next-translate/useTranslation";

const MainPage = () => {
    let {t} = useTranslation("mainPage")
    return <div className={styles.common}>
        <Head>
            <title>{t("Main")}</title>
        </Head>
        <SideBar/>
        <Panel1/>
        <Panel2/>
    </div>
};

export default MainPage;