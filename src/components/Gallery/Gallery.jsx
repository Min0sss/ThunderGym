import ref1 from '../../assets/images/gallery/ref1.png'; 
import ref2 from '../../assets/images/gallery/ref2.mp4'; 
import ref3 from '../../assets/images/gallery/ref3.mp4'; 
import ref4 from '../../assets/images/gallery/ref4.png';
import ref5 from '../../assets/images/gallery/ref5.png';
import ref6 from '../../assets/images/gallery/ref6.png'; 
import ref7 from '../../assets/images/gallery/ref7.mp4'; 
import ref8 from '../../assets/images/gallery/ref8.mp4'; 
import ref9 from '../../assets/images/gallery/ref9.mp4';
import ref10 from '../../assets/images/gallery/ref10.mp4';
import ref11 from '../../assets/images/gallery/ref11.mp4';
import ref12 from '../../assets/images/gallery/ref12.mp4';
import { FaInstagram, FaPlay, FaStar, FaFacebookF, FaTiktok, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const mediaItems = [
    { 
      id: 1, 
      type: 'image', 
      src: ref1, 
      span: 'main', 
      alt: 'Imagen grupal con miembros del gimnasio',
      link: 'https://www.facebook.com/tomy.isusquiza' 
    },
    { 
      id: 2, type: 'video', src: ref2, span: '', alt: 'Entremaiento de posterior',
      link: 'https://www.facebook.com/tomy.isusquiza' 
    },
    { 
      id: 3, type: 'video', src: ref3, span: '', alt: 'Cardio hit',
      link: 'https://www.facebook.com/tomy.isusquiza' 
    },
    { 
      id: 4, type: 'image', src: ref4, span: '', alt: 'Resultado de miembro nuevo del gimnasio',
      link: 'https://www.facebook.com/tomy.isusquiza' 
    },
    { 
      id: 5, type: 'image', src: ref5, span: '', alt: 'Foto grupal con amigos',
      link: 'https://www.instagram.com/thunder.gymx' 
    },
    { 
      id: 6, type: 'image', src: ref6, span: '', alt: 'Pose de un profesional del culturismo',
      link: 'https://www.instagram.com/thunder.gymx' 
    },
    { 
      id: 7, type: 'video', src: ref7, span: '', alt: 'Entrenamiento de espalda en remo en T',
      link: 'https://www.instagram.com/thunder.gymx' 
    },
    { 
      id: 8, type: 'video', src: ref8, span: '', alt: 'Entrenamiento de hombro',
      link: 'https://www.instagram.com/thunder.gymx' 
    },
    { 
      id: 9, type: 'video', src: ref9, span: '', alt: 'Boxeo en accion ',
      link: 'https://www.tiktok.com/@thundernutrition1' 
    },
    { 
      id: 10, type: 'video', src: ref10, span: '', alt: 'Campeona de boxeo',
      link: 'https://www.tiktok.com/@thundernutrition1' 
    },
    { 
      id: 11, type: 'video', src: ref11, span: '', alt: 'Entrenamiento de Boxeo',
      link: 'https://www.tiktok.com/@thundernutrition1' 
    },
    { 
      id: 12, type: 'video', src: ref12, span: '', alt: 'Entrenamiento de piernas, Peso muerto',
      link: 'https://www.tiktok.com/@thundernutrition1' 
    },
  ];

  const getIcon = (link) => {
    if (link.includes('facebook')) return <FaFacebookF className={styles.icon} />;
    if (link.includes('tiktok')) return <FaTiktok className={styles.icon} />;
    return <FaInstagram className={styles.icon} />;
  };

  return (
    <section className={styles.gallerySection} id="galeria">
       <div className={styles.header}>
          <h2 className={styles.title}>RESULTADOS Y RESEÑAS <span className={styles.gold}>REALES</span></h2>
          <p className={styles.subtitle}>
            Nuestros clientes hablan por nosotros. Únete a la familia Thunder.
          </p>
          <div style={{color: '#E6B325', marginTop: '15px', fontSize: '1.2rem'}}>
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </div>

      <div className={styles.gridContainer}>
        {mediaItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.gridItem} ${item.span === 'main' ? styles.main : ''}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} loading="lazy" />
            ) : (
              <video src={item.src} autoPlay muted loop playsInline></video>
            )}

            {}
            <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.overlay}
            >
                {}
                {getIcon(item.link)}
                
                <span>Ver Publicación</span>
                <FaExternalLinkAlt style={{fontSize: '0.8rem', marginTop: '5px'}}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;