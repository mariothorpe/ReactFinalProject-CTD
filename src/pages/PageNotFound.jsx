import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/PageNotFound.module.css'

function PageNotFound() {
    return (
        <div className ={styles.pageNotFound}>
        <p className ={styles.notFoundParagraph}>404: Page Not Found</p>
        <a href="/" className={styles.notFoundLink}>
        Return To The Homepage
        </a>
    </div>
);
}
export default PageNotFound;
