import React from 'react';
import {Select} from "antd";
import {useRouter} from "next/router";
import {setLanguageAC} from "../store/authorization";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

const SelectForm = () => {
    const {Option} = Select;

    let {locales, asPath} = useRouter()
    const dispatch = useDispatch()

    function handleChange(value) {
        dispatch(setLanguageAC(value))
    }

    const language = useSelector(state => state.authorization.language)
    return (
        <Select defaultValue={language}
                style={{width: 100, position: "absolute", right: "5px", top: "7px"}}
                onChange={handleChange}>
            {locales.map(locale => {
                return <>
                    <Option key={locale} value={locale}>
                        <Link href={asPath} locale={locale}>
                            <a style={{padding: "0 40px 0 0"}}>{locale}</a>
                        </Link>
                    </Option>
                </>
            })}
        </Select>
    );
};

export default SelectForm;