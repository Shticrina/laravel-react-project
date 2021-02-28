import React, { useEffect } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Header from './Header';
import Footer from './Footer';


interface Props {
    children: any,
    title: String
}

const Layout:React.FC<Props> = ({ title, children }) => {
	/*useEffect(() => {
		document.title = title;
  	}, [title]);*/

	return (
		<main>
			<Header pagetitle={title}/>

		  	<article>{children}</article>

			<Footer />
		</main>
	);
}

export default Layout;