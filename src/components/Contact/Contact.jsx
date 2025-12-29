import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTiktok, FaArrowRight } from 'react-icons/fa';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <footer className={styles.footer} id="contacto">
      
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        
        <div className={styles.colBrand}>
          <div className={styles.brand}>
            <h2>THUNDER <span className={styles.gold}>GYM</span></h2>
            <p className={styles.missionText}>
              Más que un gimnasio, somos una forja de carácter. Tu mejor versión te espera en Pachacamac.
            </p>
          </div>
          
          <div className={styles.socials}>
            <a 
                href="https://www.instagram.com/thunder.gymx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>

            <a 
                href="https://www.facebook.com/tomy.isusquiza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>
            <a 
                href="https://www.tiktok.com/@thundernutrition1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="TikTok"
            >
                <FaTiktok />
            </a>
          </div>
        </div>
        <div className={styles.colLinks}>
            <h3 className={styles.colTitle}>Navegación</h3>
            <ul className={styles.linkList}>
                <li><a href="#inicio"><FaArrowRight className={styles.arrow} /> Inicio</a></li>
                <li><a href="#clases"><FaArrowRight className={styles.arrow} /> Áreas</a></li>
                <li><a href="#galeria"><FaArrowRight className={styles.arrow} /> Reseñas</a></li>
                <li><a href="#planes"><FaArrowRight className={styles.arrow} /> Planes</a></li>
            </ul>
        </div>

        <div className={styles.colContact}>
            <h3 className={styles.colTitle}>Ubícanos</h3>
             <div className={styles.contactDetails}>
                <div className={styles.item}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Jr. Suspiros 385, Pachacamac, Lima</span>
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
            
            <div className={styles.mapWrapper}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.792873837965!2d-76.86246492398557!3d-12.231578344605177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bc2e2a220555%3A0x633d7b43f07297e5!2sProl.%20Jr.%20Suspiros%20385%2C%20Pachacamac%2015823!5e0!3m2!1ses-419!2spe!4v1703880000000!5m2!1ses-419!2spe" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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