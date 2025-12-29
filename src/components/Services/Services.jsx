import { FaDumbbell, FaRunning, FaHeartbeat, FaStopwatch } from 'react-icons/fa'; 
import styles from './Services.module.scss';

const Services = () => {

  const servicesData = [
    {
      id: 1,
      icon: <FaDumbbell />,
      title: "Musculación",
      desc: "Maquinas modernas, rutinas y control progresivo"
    },
    {
      id: 2,
      icon: <FaRunning />,
      title: "Asesoramiento nutricional",
      desc: "Plan de alimentos adaptados a tus objetivos"
    },
    {
      id: 3,
      icon: <FaHeartbeat />,
      title: "Cardio",
      desc: "Zona de cardio con maquinas, cardio hit y entrenamientos de potencia"
    },
    {
      id: 4,
      icon: <FaStopwatch />,
      title: "Servico y Cupos disponibles",
      desc: ""
    },
    {
      id: 5,
      icon: <FaStopwatch />,
      title: "Area de BOXEO",
      desc: "Profesores capacitados "
    }
  ];

  return (
    <section className={styles.services} id="clases">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>NUESTRAS <span className={styles.gold}>AREAS</span></h2>
          <p className={styles.subtitle}>Diseñadas para el máximo rendimiento</p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.borderEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;