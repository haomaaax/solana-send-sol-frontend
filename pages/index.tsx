import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import { SendSolForm } from '../components/SendSolForm'
import { BalanceDisplay } from '../components/BalanceDisplay'
import Head from 'next/head'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet send $SOL Example</title>
        <meta
          name="description"
          content="Send sol Example"
        />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        <p>Display Wallet Balance Here</p>
        <SendSolForm />
        <BalanceDisplay />
      </div>
    </div>
  );
}

export default Home;