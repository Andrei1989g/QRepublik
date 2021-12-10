import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import Router from "next/router";
import Head from "next/head";
import styles from "./authorization.module.css"
import Link from "next/link";
import {CopyrightOutlined, GlobalOutlined, QuestionOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorizationAC, setDataAC} from "../../store/authorization";

const Authorization = () => {
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
            localStorage.setItem("data",JSON.stringify(values))
        }
    };

    const onChangeValues = () => {
        setStatus("")
    }

    if (isAuthorization) {
        Router.push("/mainPage")
    }
    return (
        <>
            <GlobalOutlined
                style={{position: "fixed", width: "20px", right: "23px", top: "19px"}}/>
            <QuestionOutlined style={{
                position: "fixed",
                width: "20px",
                right: "40px",
                bottom: "40px"
            }}/>
            <div className={styles.main}>
                <Head>
                    <title>Authorization page</title>
                </Head>
                <>
                    <h1>QREPUBLIK</h1>
                    <p>Пожалуйста авторизуйтесь</p>
                </>

                <div className={styles.form}>
                    {status === "error" ?
                        <span style={{position: "absolute", top: "130px", color: "red"}}>Некорректные данные</span> : null}
                    <Form
                        name="authorization"
                        initialValues={{remember: true,}}
                        onChange={onChangeValues}
                        onFinish={onFinish}
                        autoComplete="off">
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Введите свой email !'},]}
                            validateStatus={status}>
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Введите свой пароль !',},]}
                            validateStatus={status}>
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{offset: 0}}
                        >
                            <Checkbox>Remember me</Checkbox>
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
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                    <>Если у вас не аккаунта
                        <Link href={'/registration'}><a>Зарегистрируйтесь</a></Link>
                    </>
                </div>
                <h3 className={styles.footer}>
                    <span>About Company </span>
                    <span>Cookies policy </span>
                    <span>Privacy statement </span>
                    <span>Terms of use</span>
                </h3>
                <h3 style={{marginTop: "10px"}}>Copyright <CopyrightOutlined/>2022
                    QRepublik US</h3>
            </div>

        </>
    )
};

export default Authorization;