import type { NextPage } from 'next'
import Head from 'next/head'
import ConnectButton from '../components/ConnectButton'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const MyTokens: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    My Tokens
                </h1>
                <NavBar />
                <ConnectButton />
            </main>
        </div>
    )
}

export default MyTokens;
