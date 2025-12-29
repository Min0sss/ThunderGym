import ref1 from '../../assets/images/gallery/ref1.mp4'; 
import ref2 from '../../assets/images/gallery/ref2.mp4'; 
import ref3 from '../../assets/images/gallery/ref3.mp4'; 
import ref4 from '../../assets/images/gallery/ref4.png';
import ref5 from '../../assets/images/gallery/ref5.png';

import { FaInstagram, FaPlay, FaStar } from 'react-icons/fa';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const mediaItems = [

    { 
      id: 1, 
      type: 'video', 
      src: ref1, 
      span: 'tall', 
      alt: 'Entrenamiento de fuerza' 
    },
    { 
      id: 2, 
      type: 'video', 
      src: ref2, 
      span: '', 
      alt: 'Cardio intenso' 
    },
    { 
      id: 3, 
      type: 'video',
      src: ref3, 
      span: 'wide', 
      alt: 'Zona de máquinas' 
    },
    { 
      id: 4, 
      type: 'image', 
      src: ref4, 
      span: '', 
      alt: 'Pesas libres' 
    },
    { 
      id: 5, 
      type: 'image', 
      src: ref5, 
      span: '', 
      alt: 'Clase grupal' 
    },
  ];

  return (
    <section className={styles.gallerySection} id="galeria">
       <div className={styles.header}>
          <h2 className={styles.title}>RESULTADOS o Reseñas de los clientes <span className={styles.gold}>REALES</span></h2>
          <p className={styles.subtitle}>
            fsdfsqwegwegasdfsdrdsagsd
          </p>
          <div style={{color: '#E6B325', marginTop: '15px', fontSize: '1.2rem'}}>
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </div>

      <div className={styles.gridContainer}>
        {mediaItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.gridItem} ${item.span === 'wide' ? styles.wide : ''} ${item.span === 'tall' ? styles.tall : ''}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} loading="lazy" />
            ) : (
              <video src={item.src} autoPlay muted loop playsInline></video>
            )}

            <div className={styles.overlay}>
                {item.type === 'video' ? <FaPlay className={styles.icon} /> : <FaInstagram className={styles.icon} />}
                <span>Ver en Thunder Gym</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;