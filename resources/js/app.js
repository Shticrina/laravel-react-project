import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app');

render (
	<InertiaApp
		initialPage={JSON.parse(app.dataset.page)}
		// resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}

		resolveComponent= {name => import(`./Pages/${name}`)
		.then(({ default: page }) => {
			page.layout = page.layout === undefined ? Layout : page.layout;
			return page;
		})}
	/>,
	app
);