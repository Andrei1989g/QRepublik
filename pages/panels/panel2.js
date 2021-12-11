import styles from "./panels.module.css"
import {Button} from "antd";
import Router from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorizationAC} from "../../store/authorization";
import {useEffect} from "react";
import useTranslation from "next-translate/useTranslation";

const Panel2 = () => {
    const dispatch = useDispatch()
    const isAuthorization = useSelector(state => state.authorization.isAuthorization)
    const logout = () => {
        dispatch(isAuthorizationAC(false))
    }
    let {t} = useTranslation("mainPage")

    console.log("FROM PANEL ", isAuthorization)


    useEffect(() => {
        if (!isAuthorization) {
            Router.push('/authorization')
        }
    }, [isAuthorization])

    return (
        <div className={styles.panel2}>
            <div style={{padding: "0 20px 0 20px"}}>
                <h1>{t("Text3")}</h1>
                <div>{t("Text4")}</div>
            </div>
            <Button onClick={logout} style={{
                background: "dodgerblue",
                color: "white",
                borderRadius: "5px",
                width: "300px",
                marginTop: "40px"
            }}>ВЫХОД</Button>
        </div>
    );
};

export default Panel2;