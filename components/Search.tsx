import Image from 'next/image';
import searchicon from '../public/search_icon.png'

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Sök produkt eller varumärken">
            </input>
            <button>
                <Image src={searchicon} alt="sök" height={11} width={11} />
            </button>
        </div>
    )
};

export default Search;