import React from 'react';
import styles from '../styles/footer.module.css';

import github from '/github.svg'
import web from '/web.svg'

const Footer:React.FC = () => {
  return (
    <footer className={styles.footer}>
        <a href='https://github.com/agusdubreucq1/fake-store' target='_blank'><img src={github}></img></a>
        <a href='https://agusdubreucq.com' target='_blank'><img src={web}></img></a>
    </footer>
  );
};

export default Footer