import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className="text-2xl m-5">
			<div className="flex justify-end ">
				<Link href="/">
					<a className="p-3">Crypto List</a>
				</Link>
				<Link href="/about">
					<a className="p-3">About</a>
				</Link>
				<Link href="/contact">
					<a className="p-3">Contact</a>
				</Link>
			</div>
		</nav>
	);
};
