import { ProductType, SeatingArrayType } from "./Models";

export const PRODUCT_DATA: ProductType[] = [
  {
    id: 1,
    title: "iPhone_9",
    prices: [549, 600],
    rating: 4.69,
    brand: "Apple"
  },
  {
    id: 21,
    title: "iPhone/X",
    prices: [899, 699],
    rating: 4.44,
    brand: "Apple"
  },
  {
    id: 32,
    title: "Samsung Universe-9 ",
    prices: [1249, 1020, 800],
    brand: "Samsung"
  },
  {
    id: 10051,
    title: " Huawei P30",
    prices: [499.99],
    rating: 4.09,
    brand: "Huawei"
  },
  {
    id: 77007700,
    title: "Samsung-Galaxy Book",
    prices: [1499, 1299.25],
    rating: 2.25,
    brand: "Samsung"
  }
];

export const SEATING_EXAMPLE_DATA: SeatingArrayType[] = [
  [
    [0, 0, 0, 0, 0],
    [4, 0, 2]
  ],
  [
    [0, 1, 0, 0, 0, 0, 1, 0, 0],
    [4, 8]
  ],
  [[0, 1, 0], []]
];
