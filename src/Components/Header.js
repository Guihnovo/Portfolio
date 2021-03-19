import styles from "../styles/pages/Header.module.css";

export function Header() {

  return(
    <div>
        <header className={styles.header}>
          <div>
            <div className={styles.logo}>
              <a href="#">Novo</a>
            </div>    
            <nav className={styles.menuNav}>
              <ul>
                <li><a href="#sobre">quem sou eu</a></li>
                <li><a href="#projetos">projetos</a></li>
                <li><a href="#contato">contato</a></li>
              </ul>
            </nav>
          </div>
        </header>
    </div>
    
  );
}