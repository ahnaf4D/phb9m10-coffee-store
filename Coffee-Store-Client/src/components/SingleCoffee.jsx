import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';

export default function SingleCoffee() {
  const singleCoffeeData = useLoaderData();
  return (
    <div>
      <Nav></Nav>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src={singleCoffeeData.image}
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold'>{singleCoffeeData.details}</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}