// components/Footer.tsx
import React from 'react';
import { Container, Content, Footer as RsuiteFooter } from 'rsuite';
import styles from '../styles/Footer.module.css';

type FooterProps = {
  theme: 'light' | 'dark';
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const footerStyle = {
    backgroundColor: theme === 'dark' ? 'green' : '#80c4ff',
    color: theme === 'dark' ? 'white' : 'inherit',
  };

  return (
    <RsuiteFooter className={`${styles.footer}`} style={footerStyle}>
      <Container>
        <Content>
          <div className={`${styles['footer-content']}`}>
            <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
            <p>
              Follow us on 
              <a href="https://twitter.com/mycompany" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}> Twitter</a>, 
              <a href="https://facebook.com/mycompany" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}> Facebook</a>, and 
              <a href="https://instagram.com/mycompany" target="_blank" rel="noopener noreferrer" style={{color:"yellow"}}> Instagram</a>.
            </p>
          </div>
        </Content>
      </Container>
    </RsuiteFooter>
  );
};

export default Footer;
