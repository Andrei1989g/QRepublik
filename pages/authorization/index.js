import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {useRouter} from "next/router";
import Head from "next/head";
import styles from "./authorization.module.css"
import Link from "next/link";
import {CopyrightOutlined, QuestionOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorizationAC, setDataAC} from "../../store/authorization";
import useTranslation from "next-translate/useTranslation"
import SelectForm from "../../components/selectForm";

const Authorization = () => {

    let { push} = useRouter()
    let {t} = useTranslation("common")

    const [status, setStatus] = useState("error" | "")
    const dispatch = useDispatch()
    const isAuthorization = useSelector(state => state.authorization.isAuthorization)

    const onFinish = (values) => {
        if (values.email !== "admin@admin.com") {
            setStatus("error")
        }
        if (values.password !== "admin") {
            setStatus("error")
        }
        if (values.email === "admin@admin.com" && values.password === "admin") {
            dispatch(setDataAC({values}))
            dispatch(isAuthorizationAC(true))
            localStorage.setItem("data", JSON.stringify(values))
        }
    };

    const onChangeValues = () => {
        setStatus("")
    }

    if (isAuthorization) {
        push("/mainPage")
    }

    return (
        <>
            <Head>
                <title>{t("Authorization")}</title>
            </Head>

            <QuestionOutlined style={{
                position: "fixed",
                width: "20px",
                right: "40px",
                bottom: "40px"
            }}/>
            <div className={styles.main}>
                <>
                    <h1>QREPUBLIK</h1>
                    <p>{t("Please login")}</p>
                </>
                <SelectForm/>
                <div className={styles.form}>
                    {status === "error" ?
                        <span style={{
                            position: "absolute",
                            top: "130px",
                            color: "red"
                        }}>{t("Wrong data")}</span> : null}
                    <Form
                        name="authorization"
                        initialValues={{remember: true,}}
                        onChange={onChangeValues}
                        onFinish={onFinish}
                        autoComplete="off">
                        <Form.Item
                            name="email"
                            rules={[{
                                required: true,
                                message: 'Введите свой email !'
                            },]}
                            validateStatus={status}>
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{
                                required: true,
                                message: 'Введите свой пароль !',
                            },]}
                            validateStatus={status}>
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{offset: 0}}
                        >
                            <Checkbox>{t("Remember me")}</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button style={{
                                width: "422px",
                                height: "40px",
                                radius: "4px",
                                backgroundColor: "dodgerblue",
                            }}
                                    type="primary"
                                    htmlType="submit">
                                {t("Login")}
                            </Button>
                        </Form.Item>
                    </Form>
                    <>{t("If you do not have an account")}
                        <Link href={'/registration'}>
                            <a>{t("Registration")}</a>
                        </Link>
                    </>
                </div>
                <h3 className={styles.footer}>
                    <span>{t("About Company")} </span>
                    <span>{t("Cookies policy")}</span>
                    <span>{t("Privacy statement")} </span>
                    <span>{t("Terms of use")}</span>
                </h3>
                <h3 style={{marginTop: "10px"}}>{t("Copyright")}
                    <CopyrightOutlined/>2022 QRepublik US</h3>
            </div>
        </>
    )
};

export default Authorization;