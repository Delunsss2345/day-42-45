import type { ProductItemProps } from "@/types/product.type";
import { Link } from "react-router";

const ProductItem = ({
  id,
  title,
  category,
  price,
  discountPercentage,
  rating,
  brand,
}: ProductItemProps) => {
  return (
    <Link
      to={`/product/${id}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm"
    >
      <div className="relative h-[200px] bg-gray-200">
        <img
          src={`https://picsum.photos/id/${id}/400/300`}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-75"
        />
      </div>

      <div className="relative bg-white p-4">
        <span className="text-xs text-gray-500">
          {brand} - {category}
        </span>

        <h3 className="mt-1 text-lg font-medium text-gray-900">{title}</h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-900">
            <span className="text-xl font-bold text-blue-600">
              ${(price * (1 - discountPercentage / 100)).toFixed(2)}
            </span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${price.toFixed(2)}
            </span>
          </p>
          <div className="flex items-center gap-1 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
