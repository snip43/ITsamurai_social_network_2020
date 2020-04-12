import React from 'react';
import styles from './footer.module.css';

type PropsType = {

}

const Footer: React.FC<PropsType> = () => {
	return (
	<div className={styles.footer}>
			Create by Kostin Roman 2019
	</div>
	)
}

export default Footer;

// container-fluid d-flex justify-content-center align-items-center 