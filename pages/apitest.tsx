import { GetStaticProps } from 'next';
import Image from 'next/image';

const API_KEY = process.env.ACCESS_KEY

export const getStaticProps : GetStaticProps = async (context) => {
  console.log(API_KEY)
  const res = await fetch(`https://api.unsplash.com/photos?client_id=${API_KEY}`);
  const data = await res.json();
  console.log(data)

  return {
    props: {
      images : data
    },
  };
};


const ApiTest = ({images} : any) => {
  return (
    <div>
      <h1>Hello from API-Test</h1>
      <ul className="api_list">
        {images.map((image : any) => (
          <li key={image.id}>
            <Image src={ image.urls.small } alt="image list" width="150" height="120" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiTest;
