import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import styles from './Contact.module.scss';
const Contact = () => {
  return (

    <footer className={styles.footer} id="contacto">
      
      {}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        
        {}
        <div className={styles.colBrand}>
          <div className={styles.brand}>
            <h2>THUNDER <span className={styles.gold}>GYM</span></h2>
            <p className={styles.missionText}>
              Más que un gimnasio, somos una forja de carácter. Tu mejor versión te espera en Pachacamac.
            </p>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://wa.me/51921597087" target="_blank" className={styles.socialIcon} aria-label="WhatsApp"><FaWhatsapp /></a>  
          </div>
        </div>

        {}
        <div className={styles.colLinks}>
            <h3 className={styles.colTitle}>Navegación</h3>
            <ul className={styles.linkList}>
                <li><a href="#inicio"><FaArrowRight className={styles.arrow} /> Inicio</a></li>
                <li><a href="#clases"><FaArrowRight className={styles.arrow} /> Areas</a></li>
                <li><a href="#planes"><FaArrowRight className={styles.arrow} /> Reseñas</a></li>
                <li><a href="#galeria"><FaArrowRight className={styles.arrow} /> Planes</a></li>
            </ul>
        </div>

        {}
        <div className={styles.colContact}>
            <h3 className={styles.colTitle}>Ubícanos</h3>
             <div className={styles.contactDetails}>
                <div className={styles.item}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Jr.Suspiros 385, Pachacamac, Lima</span>
                </div>
                <div className={styles.item}>
                <FaPhoneAlt className={styles.icon} />
                <span>+51 921 597 087</span>
                </div>
                <div className={styles.item}>
                <FaEnvelope className={styles.icon} />
                <span>thundergym@gmail.com</span>
                </div>
            </div>
            {}
            <div className={styles.mapWrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1767033021077!6m8!1m7!1skm3nUjksrOHysMgylTY6-A!2m2!1d-12.2272611348207!2d-76.86033583527559!3f346.8630875713115!4f-23.631955792301397!5f0.7820865974627469" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.copyContainer}>
            <p>© 2025 Thunder Gym. Todos los derechos reservados.</p>
            <p className={styles.devCredit}>Desarrollado con <span className={styles.gold}>⚡</span> por <span className={styles.white}>Guillermo Contreras</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;