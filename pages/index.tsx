import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';
import { CryptoList } from './CryptoList';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Crypto Tracker</title>
			</Head>
			<Navbar />
			<CryptoList />
		</div>
	);
};

export default Home;
