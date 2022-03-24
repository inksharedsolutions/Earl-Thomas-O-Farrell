import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Earl Thomas O’Farrell</h1>
                                <span>Author & Writer</span>

                                <p>
                                Earl Thomas O’Farrell the Author of The Essence of Life (Poetry and Life in Motion) parts 1 and 2. A proud mother of 3 wonderful children Conrad, Clifford, and Chamara Fahie. 
                                Earl Thomas O’Farrell was born on the Island of Anguilla but at the age of six she migrated to Saint Thomas U.S Virgin Islands. Earl Thomas O’Farrell went from a Junior A level in the British to a third grade level at the 
                                Seventh Day Adventist School. From there her journey was on to Madison Elementary School and then at Nazareth Bay High School where she graduated in 1978. Upon graduating she thought about 
                                the schools and furthering my education so she took some courses at The College of the Virgin Islands but before completing she joined the US Army and deployed to Europe.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain