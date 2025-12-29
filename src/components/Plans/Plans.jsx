import { FaCheck } from 'react-icons/fa';
import styles from './Plans.module.scss';

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "PLan Mensual",
      price: "80",
      period: "/mes",
      features: ["Acceso todas las maquinas", "Casilleros disponibles", "WiFi Gratis", "Horario Limitado (6am - 10pm)"],
      isPopular: false
    },
    {
      id: 2,
      name: "Thunder Prime", 
      price: "200",
      period: "/trimestre",
      features: ["Todo lo anterior", "Acceso Ilimitado 24/7", "Clases personalizados", "1 Quemador",],
      isPopular: true
    },
    {
      id: 3,
      name: "PLan Anual",
      price: "600",
      period: "/año",
      features: ["Todo Plan Thunder", "Entrenador Personal Todo el año", "Nutricionista Mensual", "Acceso VIP Eventos", "Congelamiento de plan"],
      isPopular: false
    }
  ];

  return (
    <section className={styles.plansSection} id="planes">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ELIGE TU <span className={styles.gold}>Plan</span></h2>
          <p className={styles.subtitle}>Inversión en ti mismo - Horarios de 6am - 10 pm</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}
            >
              {plan.isPopular && <div className={styles.badge}>MÁS VENDIDO</div>}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.currency}>S/</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={plan.isPopular ? styles.btnGold : styles.btnOutline}>
                ELEGIR PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;