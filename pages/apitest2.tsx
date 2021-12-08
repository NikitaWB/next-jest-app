import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    'https://www.ahlens.se/INTERSHOP/rest/WFS/Ahlens-AhlensSE-Site/-/customer-facing-categories/?id='
  );
  const menudata = await res.json();
  /* console.log(menudata.elements); */

/*   const categoriesMap : any = [];
  menudata.forEach(function(val : any, key : any){
      categoriesMap.push({"name": val.name})
  }); */
  /* const [name] = menudata

  console.log(name) */

  return {
    props: {
      categories: menudata,
    },
  };
};

// skapa en funktion som blir som ett skelett för APIt
// skapa en funktion som som mappar igenom kategorier och tar in det jag vill använda



function ApiTest2({ categories }: any) {
  return (
    <div>
      <h1>Hello from API2</h1>
      <ul>
        {categories.elements.map((categorie: any) => (
          <li key={categorie.id}>{categorie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiTest2;
