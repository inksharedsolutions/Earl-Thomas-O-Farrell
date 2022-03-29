import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from "react-helmet"
const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Earl Thomas O’Farrell" />
                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />


                <div className="container">
                    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile" />
                            </div>

                            <div className="heading-quote">
                                {/* <h4>
                                    “Sounds a lot like God to me”.
                                </h4>

                                <span className="ata-span-fx">
                                    The God Particle, Chapter 11, Going Within.
                                </span> */}
                            </div>
                        </div>

                        <article  className="article-section-android">
                            <p>
                            I have written a summary outline type of biography rather than a story type, because I would like this to be about the book and getting the potential reader interested in buying the book. Therefore, along with the biography I have included two short theses about the book that the potential reader should know: </p>

                            <ul>
                                <li>One, the How and Why I have written the book which should be more interesting to the potential reader than facts  about my life;</li>
                                <li>And then, I have included a prequel to the book to explain why the ideas and theories presented in the book are different from the present theories and present answers to questions presently inquire to the science community today;</li>

                                <h4>These two theses show the potential reader things such as (for a brief example): </h4>
                                <li>The how and why Super Massive Black Holes that shouldn’t exists according to science, do exists, and how and why they do;</li>
                                <li>What Dark Matter and Dark Energy are, what their purposes are, and how they were created; </li>
                                <li>Why the Inflation Theory, although proving (through the modern science and elements of the physical laws of matter allow) to be true, really isn’t true and the theory and events predicted therein never happened;</li>
                                <li>And much, much more as to how the Creation actually occurred.</li>
                            </ul>  

                            <p>
                            Also, in the How and Why, I let the potential reader know how the Spiritual aspects could have happen and covers what God, Angels, Heaven, and Souls are and how God could have been the Creator of the Universe and how God interacts with the Physical Worlds.

                            I think these theses would entice the potential reader to purchase the book much more than anything else.

                            </p>        

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                        Earl Thomas O’Farrell
                                </span>
                            </p>
                        </article>


                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;