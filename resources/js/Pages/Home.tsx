import React from "react";
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../Shared/Layout';

interface Props {
	posts: Array<any>
}

const Home:React.FC<Props> = ({posts}) => {
// const Home = () => {
	// const { posts } = usePage().props;
	console.log(posts); // ok
    
    return (
    	<Layout title="Home kk">
	        <div className="container">
	    		<div className="row">
	    			<h3 className="col-md-12 text-success font-italic py-4">This is the home page. See below all posts.</h3>

	    			<div className="col-md-12 content-page">
	    				<div className="row">
							<div className="col-md-6 blog-post">
								<div className="post-title">
									<a href="pages/single.php">
										<h1>How to make your company website based on bootstrap framework on localhost?</h1>
									</a>
								</div>

								<div className="post-info"><span>November 23, 2016 / by <a href="https://www.free-css.com/free-css-templates">Alex Parker</a></span>
								</div>

								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique temporibus tempora dicta soluta? Qui hic, voluptatem nemo quo corporis dignissimos voluptatum debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique.</p>
								<a href="pages/single.php" className="button button-style button-anim fa fa-long-arrow-right">
									<span>Read More</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </Layout>
    );
};

// Home.layout = page => <Layout children={page} title="Welcome fiii" />

export default Home;