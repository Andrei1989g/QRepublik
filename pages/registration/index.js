import React from 'react';
import Router from "next/router";

const Authorization = () => {
    const onMainPage = () => {
        Router.push('/')
    }
    return (
        <div>
            Я страница авторизации
            <button onClick={onMainPage}>MAIN PAGE</button>
        </div>
    );
};

export default Authorization;