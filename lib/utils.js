import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'Shop', url: '/shop' },
  { title: 'Deals', url: '/deals' },
  { title: "What's Next", url: '/whatsnext' },
];

export const getCategoryProducts = async () => {
  const [mensProducts, womensProducts] = await Promise.all([
    fetch('https://dummyjson.com/products/category/mens-shirts', {
      next: {
        revalidate: 3600
      }
    }),
    fetch('https://dummyjson.com/products/category/womens-dresses', {
      next: {
        revalidate: 3600
      }
    }),
  ]);

  const mensData = await mensProducts.json();
  const womensData = await womensProducts.json();

  return { mens: mensData.products, womens: womensData.products };
};

export const getAllProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=32&skip=78', {
    next: {
      revalidate: 3600
    }
  });
  const data = await res.json();
  return data;
};

export const getSingleProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};

export const getRelatedProds = async (prodCat) => {
  const res = await fetch(`https://dummyjson.com/products/category/${prodCat}`);
  const data = await res.json();
  return data;
};
