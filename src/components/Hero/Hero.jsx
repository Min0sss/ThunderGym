import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.subtitle}>Tomy Isusquiza // Personal Trainer</span>
        <h1 className={styles.title}>VAMOS POR TU<br/> <span className={styles.goldText}>MEJOR VERSION</span></h1>
        <p className={styles.description}>
          Entrenamientos personalizados a tu objetivo
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>ENTRENEMOS</button>
          <button className={styles.secondaryBtn}>Ver Reseñas</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;