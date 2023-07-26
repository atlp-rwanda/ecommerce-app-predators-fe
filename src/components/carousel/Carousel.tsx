import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { MainProduct } from '..';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  picture_urls: string[];
  rating: string;
}

function Carousel_container() {
  const HomeProducts = useSelector(
    (state: { HomeProducts: { data: { products: Product[] } } }) =>
      state.HomeProducts.data.products
  );
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (HomeProducts?.length) {
      const newProducts: Product[] = [];
      for (let i = 0; i < 3; i++) {
        const index = i % HomeProducts.length;
        newProducts.push(HomeProducts[index]);
      }
      setProducts(newProducts);
    }
  }, [HomeProducts]);

  return (
    <Carousel
      mx="auto"
      withIndicators
      withControls={false}
      styles={{
        control: {
          opacity: 0,
          cursor: 'default',
        },
        indicator: {
          width: rem(12),
          height: rem(12),
          transition: 'width 250ms ease',
          border: `1px solid gray`,
          background: '#EDA415',
          '&[data-active]': {
            background: '#EDA415',
            border: '#EDA415',
          },
        },
      }}
    >
      {products.map((product) => (
        <Carousel.Slide key={product.id}>
          <MainProduct
            name={product.name}
            price={product.price}
            photo_url={product.picture_urls[0]}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default Carousel_container
