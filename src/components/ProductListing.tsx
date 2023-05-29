import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/ProductAction";

function ProductListing() {
  const products = useSelector(
    (state: { products: { data: any } }) => state.products.data
  );
  const loading = useSelector(
    (state: { products: { loading: any } }) => state.products.loading
  );
  const error = useSelector(
    (state: { products: { error: any } }) => state.products.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()as any);
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {products?.data?.products
        .slice(0, 1)
        .map((product: { id: any; name: any; description: any }) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
    </>
  );
}

export default ProductListing;
