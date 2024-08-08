import React from "react";
import {
  Container,
  Row,
  Col,
  Panel,
  Button,
  IconButton,
  ButtonToolbar,
} from "rsuite";
import styles from "../assets/styles/app-footer.module.css"; // Update the path as needed
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Twitter from "../assets/images/Twitter.svg";
import Linkedin from "../assets/images/LinkedIn.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          {/* Newsletter Column */}
          <Col xs={24} sm={12} md={6}>
            <Panel className={styles.panel} style={{ textWrap: "wrap" ,lineHeight:"2"}}>
              <h5>Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>
              <div className={styles.newsletterSubscription}>
                <input type="text" placeholder="Type something" />
                <Button appearance="primary">Subscribe</Button>
              </div>
            </Panel>
          </Col>

          {/* Our Product Column */}
          <Col xs={24} sm={12} md={5}>
            <Panel className={styles.panel}>
              <h5>Our Products</h5>
              <ul style={{listStyleType:"none",lineHeight:"2"}}>
                <li>Domestic Hotel</li>
                <li>International Hotel</li>
                <li>Domestic Flights</li>
              </ul>
              <h5>Travel Essentials</h5>
              <ul style={{listStyleType:"none",lineHeight:"2"}}>
                <li>PNR Status</li>
                <li>Offers</li>
              </ul>
            </Panel>
          </Col>

          {/* More Links Column */}
          <Col xs={24} sm={12} md={4}>
            <Panel className={styles.panel}>
              <h5>More Links</h5>
              <ul style={{listStyleType:"none",lineHeight:"2"}}>
                <li>Cheap Flight</li>
                <li>Hotels Near Me</li>
                <li>My Booking</li>
                <li>Cancellation</li>
                <li>My Account</li>
                <li>Wallet</li>
                <li>Advertise with Us</li>
              </ul>
            </Panel>
          </Col>

          {/* Contact Us Column */}
          <Col xs={24} sm={12} md={6}>
            <Panel className={styles.panel}>
              <h5>Contact Us</h5>
              <div className={styles.socialMedia}>
                <Image src={Facebook} alt=" facebook" />
                <Image src={Instagram} alt=" Instagram" />
                <Image src={Twitter} alt=" Twitter" />
                <Image src={Linkedin} alt=" Linkedin" />
              </div>
            </Panel>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
