import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import Book2 from '../../static/book/book1.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'earl-thomas-ofarrell',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Earl Thomas O’Farrell" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Creation of the Physical Universe, to Heaven, to Hell, and Back Again: The Creation - The Scientific Theories And A Spiritual Theology`,
                                spanTitle: '',
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:    
                                    `
                                    Explore how the physical universe was created as well as the spiritual version that explains our existence.



                                    While it's up to you to decide which version to believe, this book shows that both explanations are remarkably similar as the same events had to occur with both.
                                    
                                    
                                    
                                    Earl Thomas O'Farrell draws on his decades of experience as a researcher of religious beliefs, astrophysical theories, the cosmology of the universe to examine the spiritual and scientific beginnings of the universe. He explores the Quantum World and how magnetism was created from the beginning before anything existed, and how its components changed everything and began the Creation Process and led to the Big Bang. Without the Big Bang we wouldn't have had anything, but with the Big Bang following Quantum Law including Einstein's theory the entire Physical Universe was created. The Super Massive Storms which formed in the Dark World that created the galaxies and converted into Super Massive Black Holes to control the Universe. Dark Matter came along to hold the Universe together, and its partner, Dark Energy, emerged to keep things far enough apart to maintain the Universe for billions upon billions of years. The significance of the Higgs Boson, and the evolutionary Processes of Energy, Matter, Life, and Particle Formation that provided the elements necessary to create Space, Time, Space-Time "Fabric", Light, Atoms, Matter, and Gravity all of which came together to form Stars, then Planets and all other Celestial Matter. And finally, Life evolved into the creation.
                                    
                                    
                                    
                                    Life changed everything throughout the entire Universe, and, of course, it was God's main purpose for the creation, and gave God and his Universe a reason for their existence.
                                    
                                    
                                    
                                    Take a big step forward in understanding the world and decide for yourself the role God plays in our lives with the facts and insights in this book that explores the origins of the Universe. Then, sit back for some heavy thinking (meditation if you prefer). Then, sit back further and ask yourself (What is this World and Life all about?). Is God for Real? Or Not?
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/the-creation-of-the-physical-universe-to-heaven-to-hell-and-back-again-earl-thomas-ofarrell/1138988426?ean=9781648953279',
                                    amazon: 'https://www.amazon.com/Creation-Physical-Universe-Heaven-Again-ebook/dp/B08YHHQFPY/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1616525978&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Creation-Physical-Universe-Heaven-Again/dp/1648953263/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1616525978&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-creation-of-the-physical-universe-to-heaven-to-hell-and-back-again-earl-thomas-ofarrell/1138988426?ean=9781648953262',
                                    booksamillion: 'https://www.booksamillion.com/p/Creation-Physical-Universe-Heaven-Hell/Earl-Thomas-OFarrell/9781648953262?id=8407851309216',
                                },
                            }}
                        />

                           
                        <div className="commentSection" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}


export default ATB;