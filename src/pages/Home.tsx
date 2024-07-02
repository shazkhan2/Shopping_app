import { Link } from "react-router-dom"; 
import "./Home.css";
export function Home() {
    return (
    <div className="home-container">
        <section className="top-part">

        <header className="header">
    <h1 className="title">Grid layout practice </h1>
    <p className="magic">The real magic happens in the store component</p>
    </header>

    <div className="personal">
        <p className="click">
        <Link to="/store">Magic click</Link>
        </p>
        <p className="publish-date">27 June 2024</p>
    <div className="social">
        <a href="https://www.facebook.com">
        <i className="fab fa-facebook-f">   </i>     </a>
        <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
            </a>
            
    </div>
    </div>
    </section>
    
    <section className="text">
        <p>
            Too often we focus on getting better at the coding part of learning to code and ignore css. here I am going back to the basics and trying to get better at that. 
            is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <blockquote>
          <hr />
          <p className="quote">
            This document is like a magazine
          </p>
          <hr />
        </blockquote>
        <p>
            Too often we focus on getting better at the coding part of learning to code and ignore css. here I am going back to the basics and trying to get better at that. 
            is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </section>

    <section className="li-section">
        <article className="last-part">
            <h3>My coding journey</h3>
            <p>And it goes on</p>
            <ul>
                <li>
                    <h4>Business studies</h4>
                    <p>This is what I thought I should do</p>
                </li>
                <li>
                    <h4>Literature</h4>
                    <p>It was even more fascinating</p>
                </li>
                <li>
                    <h4>
                        Programming
                    </h4>
                    
                    <p>I then decided to become a fullstack developer</p>
                </li>
            </ul>
        </article>

        <aside className="aside">
        <img src="/imgs/elephant.png" alt="Elephant" ></img>  
        <blockquote className="image-quote">
            <hr />
            <p className="quote">
            When the missionaries came to Africa they had the Bible and we had the land. When they left, we had the bibile
            and they the land.
            </p>
            <hr />
          </blockquote>
        <img src="/imgs/argument.jpg" alt="Argument" ></img>
        </aside>


    </section>




    </div>
    );
}