import React from 'react';
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,} from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>ClearUp</h1>
            <p>Solution to all your problems</p>
        </main>
      
    </div>
     
    <div className="home2" >
        <img src={vg} alt="Graphics" />
      
      <div>
        <p>
            We are your one and only solution to the tech problems you face everyday.We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
        
    </div>

   <div className="home3" id='about'>
    <div>
    <h1>Who we are?</h1>
    <p>Customers don’t just care about what you do (although that’s still very important); they also care about who you are and what your business values are. Stories like these are a powerful sales tool. They build connections on an emotional level to enhance the practical solutions you offer. For example, some customers prefer to work with environmentally-conscious businesses, while others like supporting businesses that were founded by women. Be proud of what you stand for, and customers that share your values will follow</p>
    </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                  <AiFillGoogleCircle/>
                  <p>Google</p>
                </div>
        
 
                <div style={{
                    animationDelay:"0.5s",
                }}>
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s",
                }}>
                  <AiFillYoutube/>
                  <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"1s",
                }}>
                  <AiFillInstagram/>
                  <p>Instagram</p>
                </div>

            </article>
        </div>
    </div>

   </>
  );
}

export default Home
