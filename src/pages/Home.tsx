import { Link } from "react-router-dom"; 
import "./Home.css";
export function Home() {
    return (
    <div className="home-container">
        <section>

        <header>
    <h1>Styling in a grid layout </h1>
    <p>The real magic happens in the store component. This is a CSS practise page</p>
    </header>
    <div>
        <p>
        <Link to="/store">Store is here</Link>
        </p>
        <p>27 June 2024</p>
    </div>
    <div>
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
    </section>
    <section>
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
            This documents looks like a magazine
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
        <article>
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

    </section>




    </div>
    );
}