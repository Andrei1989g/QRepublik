import React from 'react';
import Router from "next/router";
import Head from "next/head";

const Registration = () => {
    const onMainPage = () => {
        Router.push('/')
    }
    return (
        <div>
            <Head>
                <title>Registration page</title>
            </Head>
            Я страница регистрации
            <button onClick={onMainPage}>Back</button>
        </div>
    );
};

export default Registration;