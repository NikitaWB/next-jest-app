import Link from 'next/link';
import styles from '../styles/HeaderOffer.module.css'

const HeaderOffer = () => {
  return (
    <div className={styles.header_offer}>
      <Link href='/skonhetskalendrar'>
        <a>30% på utvalda skönhetskalendrar</a>
      </Link>
    </div>
  );
};

export default HeaderOffer;
