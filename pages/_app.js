import '../styles/globals.css'
import 'antd/dist/antd.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <style>{`
                body{
                font-family: 'Roboto',sans-serif;
              }`
            }</style>
        </>
    )
}

export default MyApp
