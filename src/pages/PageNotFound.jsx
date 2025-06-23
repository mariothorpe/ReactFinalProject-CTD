import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/PageNotFound.module.css'

function PageNotFound() {
    return (
        <div className ={styles.pageNotFound}>
        <p className ={styles.notFoundParagraph}>404: Page Not Found</p>
        <Link to="/" className={styles.notFoundLink}>
        Return To The Homepage
        </Link>
    </div>
);
}
export default PageNotFound;
