import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Thunder Gym Logo" className={styles.logo} />
          {}
          <h1>THUNDER <span className={styles.highlight}>GYM</span></h1>
        </div>
        
        <nav className={styles.nav}>
          <a href="#inicio">Inicio</a>
          <a href="#clases">Areas</a>
          <a href="#clases">Reseñas</a>
          <a href="#planes">Planes</a>
           <a href="#planes">Contacto</a>
        </nav>

<a 
  href="https://wa.me/51921597087?text=Hola,%20quisiera%20más%20información%20sobre%20Como%20ser%20un%20Kchalote%20Salvaje" 
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  Únete Ahora
</a>
      </div>
    </header>
  );
};

export default Header;