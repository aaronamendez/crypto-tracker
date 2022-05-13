import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className="text-2xl m-5">
			<div className="flex justify-end ">
				<Link href="/">
					<span className="p-3 ">Crypto List</span>
				</Link>
				<Link href="/about">
					<span className="p-3">About</span>
				</Link>
				<Link href="/contact">
					<span className="p-3">Contact</span>
				</Link>
			</div>
		</nav>
	);
};
