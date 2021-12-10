import '../styles/globals.css'
import 'antd/dist/antd.css'
import store from "../store/store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
            <Component {...pageProps} />
            <style>{`
                body{
                font-family: 'Roboto',sans-serif;
              }`
            }</style>
            </Provider>
        </>
    )
}

export default MyApp
