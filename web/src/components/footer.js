import { Link } from "gatsby";
import React from "react";
import * as styles from "./footer.module.css";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.domainMondange}>
        <Link to="/domaine">domaine mondange</Link>
      </div>
      <div className={styles.contact}>
        <div>Laura et Andria Mondange</div>
        <p>Saint-Antoine</p>
        <p>20240 Ghisonaccia</p>
        <p>Tél:+33 (0)4 95 59 70 09</p>
        <p>Port:+33 (0)6 17 05 34 79</p>
      </div>
      <div className={styles.plansite}>
        <div className={styles.plan}>Plan du site</div>
        <div className={styles.ul}>
          <div className={styles.li}>
            <Link to="/accueil">Accueil</Link>
          </div>
          <div className={styles.li}>
            <Link to="/vins">Nos vins</Link>
          </div>
          <div className={styles.li}>
            <Link to="/domaine">Le domaine</Link>
          </div>
          <div className={styles.li}>
            <Link to="/galerie">La galerie</Link>
          </div>
          <div className={styles.li}>
            <Link to="/presse">La presse</Link>
          </div>
          <div className={styles.li}>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={styles.follow}>
        <div className={styles.us}>Suivez-nous</div>
        <div className={styles.sociaux}>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bar}></div>
    <div className={styles.container2}>
      <div className={styles.domainMondange2}>
        <Link to="/domaine">Domaine Mondange</Link>
      </div>
      <div className={styles.cgv}>
        <Link to="/politique">Politique de confidentialité</Link>
        <div>-</div>
        <Link to="/domaine">Mentions légales</Link>
        <div>-</div>
        <Link to="/domaine">CGV</Link>
      </div>
    </div>
  </div>
);

export default Footer;
