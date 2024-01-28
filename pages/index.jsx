import Centro from "../src/components/centro/Centro"
import Header from "../src/components/header/Header"

import Head from 'next/head'

function Index() {
    return(
        <>
            <Head>
                <title>Jogo da Velha</title>
            </Head>
            <Header>Jogo da Velha</Header>
            <Centro />
        </>
    )
}

export default Index