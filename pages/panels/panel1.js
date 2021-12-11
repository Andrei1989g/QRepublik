import styles from "./panels.module.css"
import useTranslation from "next-translate/useTranslation";
const Panel1 = () => {
    let {t} = useTranslation("mainPage")
    return (
        <div className={styles.panel1}>
            <div style={{padding: "0 10px 0 10px"}}>
                <h1>{t("About")}</h1>
                <div>{t("Text1")}</div>
                <br/>
                <div>{t("Text2")}</div>
            </div>
        </div>
    );
};

export default Panel1;