import Link from "next/link";
import styles from "../../styles/Footer.module.css"


const Footer = () => {
  return (
    
      <footer className={styles.footer}>
        <div className={`container ${styles.contenido}`}>
            <nav className={styles.nav}>
                <Link href="">Sobre Nosotros</Link> 
                <Link href="">Términos y condiciones</Link> 
                <Link href="">Política de Privacidad</Link> 
            </nav>
            <p className={styles.copyright}>Copyright 2023©app.ointment - Todos los derechos reservados</p>
        </div>
      
      </footer>
  
    
  )
}

export default Footer;
