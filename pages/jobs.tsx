import type { NextPage } from 'next'
import Head from 'next/head'
import ConnectButton from '../components/ConnectButton'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Jobs: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    LabDAO Jobs
                </h1>
                <NavBar />
                <ConnectButton />
            </main>
        </div>
    )
}

export default Jobs;
