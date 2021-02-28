import React from "react";
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Header from '../../Shared/Header';

interface Props {
	posts: Array<any>
}

const PostsList:React.FC<Props> = ({posts}) => {
	// const { posts } = usePage().props;

    return (
    	<>
        <div className="container">
    		<div className="row">
        		<h1 className="p-5 text-info">Here is the posts list component.</h1>

				<div className="col-md-3">
					<div className="about-fixed">
						<div className="my-pic">
							<img src="assets/images/pic/my-pic.png" alt="website template image" />
						</div>

						<div className="my-detail">
							<div className="white-spacing">
								<h1>Alex Parker</h1>
								<span>Web Developer</span>
							</div>
						</div>
					</div>
				</div>

      			<div className="col-md-9">
					<div className="col-md-12 page-body">
						<div className="row">
							<div className="sub-title">
								<h2>My Blog</h2>
							</div>

							<div className="col-md-12 content-page">
								<div className="col-md-12 blog-post">
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

								<div className="col-md-12 blog-post">
									<div className="post-title">
										<a href="pages/single.php">
											<h1>How to design elegant e-mail newsletter in html for wish christmas to your subscribers?</h1>
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
			</div>
  		</div>
  		</>
    )
}

export default PostsList;