import Image from 'next/image';
import styles from '../styles/Search.module.css'
import searchicon from '../public/search_icon.png'

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Sök produkt eller varumärken" />
            <button>
                <Image src={searchicon} alt="sök" height={11} width={11} />
            </button>
        </div>
    )
};

export default Search;