import Link from 'next/link'
import Head from "next/head";
import {SideBar} from "./menu";
import Panel1 from "./panels/panel1";
import Panel2 from "./panels/panel2";
import styles from "./common.module.css"
export default function MainPage() {

    return (
        <div className={styles.common}>
            <Head>
                <title>Main page</title>
            </Head>
            <SideBar/>
            <Panel1/>
            <Panel2/>
            {/*<Link href={'/authorization'}><a>*/}
            {/*    <button>AUTHORIZATION PAGE</button>*/}
            {/*</a></Link>*/}
        </div>

    )
}
