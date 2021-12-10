import React from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import Router from "next/router";
import Head from "next/head";
import styles from "./authorization.module.css"
import Link from "next/link";
import {CopyrightOutlined, GlobalOutlined, QuestionOutlined} from "@ant-design/icons";

const Authorization = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onMainPage = () => {
        Router.push('/')
    }
    return (
        <>
            <GlobalOutlined
                style={{position: "fixed", width: "20px", right: "23px", top: "19px"}}/>
            <QuestionOutlined style={{position: "fixed", width: "20px", right: "40px", bottom: "40px"}}/>
            <div className={styles.main}>
                <Head>
                    <title>Authorization page</title>
                </Head>
                <>
                    <h1>QREPUBLIK</h1>
                    <p>Пожалуйста авторизуйтесь</p>
                </>

                <div className={styles.form}>
                    <Form
                        name="basic"
                        initialValues={{remember: true,}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[{
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
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
                    <>Если вы не имеете аккаунта
                        <Link href={'/registration'}><a>Заругистрируйтесь</a></Link>
                    </>
                </div>
                <h3 className={styles.footer}>
                    <span>About Company </span>
                    <span>Cookies policy </span>
                    <span>Privacy statement </span>
                    <span>Terms of use</span>
                </h3>
                <h3 style={{marginTop:"10px"}}>Copyright <CopyrightOutlined/>2022 QRepublik US</h3>
                <button onClick={onMainPage}>MAIN PAGE</button>
            </div>

        </>
    )
};

export default Authorization;