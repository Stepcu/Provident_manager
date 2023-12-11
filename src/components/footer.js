import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
      textAlign: 'center',
    }}
  >
    <div>
      <p>© {new Date().getFullYear()}</p>
      <p>Built with <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </div>
    
    <div>
      <p>Follow us:</p>
      <p>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        {' '}
        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {' '}
        <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </p>
    </div>

    <div>
      <p>Contact us:</p>
      <p>Name: John Doe</p>
      <p>Phone: +1234567890</p>
      <p>Email: john.doe@example.com</p>
      <p>Address: 123 Main Street, Cityville</p>
    </div>
  </footer>
);

export default Footer;
