import React from "react";
import styles from './layout.module.css';

const Layout = ({children}) => {
    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>MCGA 2022</h1>
          <a
          href="https://github.com/julianv97/mcga-2022-frontend" 
          target={'_blank'}
          rel="noreferrer">
              Ir al Repo
          </a>
        </header>
        <div className={styles.content}>
        {children}
        </div>
      </div>
    );
  }

  export default Layout