import { GetStaticProps } from 'next';

const API_KEY = process.env.ACCESS_KEY

const ApiTest = ({images} : any) => {
  return (
    <div>
      <h1>Hello from API-Test</h1>
      {JSON.stringify(images)}
    </div>
  );
};

export const getStaticProps : GetStaticProps = async (context) => {
  const res = await fetch(`https://api.unsplash.com/photos?client_id=${API_KEY}`);
  const { results } = await res.json();

  return {
    props: {
      images : results
    },
  };
};

export default ApiTest;
