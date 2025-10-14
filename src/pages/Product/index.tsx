import Loading from "@/components/Loading";
import ProductItem from "@/components/ProductItem";
import {
  selectProduct,
  selectLoading as selectProductLoading,
} from "@/features/product";
import { useFetchProducts } from "@/features/product/hook";
import { useSelector } from "react-redux";

const ProductPage = () => {
  useFetchProducts();
  const products = useSelector(selectProduct);
  const loading = useSelector(selectProductLoading);

  return (
    <div>
      {loading && <Loading loading={loading} />}
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p>Not products</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-12">
          {products.map((product: any) => (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              brand={product.brand}
              category={product.category}
              id={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
