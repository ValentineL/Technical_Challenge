export type ProductType = {
  id: number;
  prices: number[];
  rating?: number | undefined;
  title: string;
  brand: string;
};

type BugExerciseReturnType = (product: ProductType) => string;
type BugExerciseMethodType = () => BugExerciseReturnType;

/**
 * Return a function that accepts Product item as argument
 * and prints that single product item formatted as expected value.
 *
 * The test will call the returned function on each Product Item
 * from PRODUCT_DATA.
 * @return function print(product: ProductType): string {}
 */
const Bugs: BugExerciseMethodType = (): ((product: ProductType) => string) => {
  const DIVIDER_LENGTH = 40;
  const LB = "\r\n";

  // ---------------------TRANSFORM function---------------------
  function print(product: ProductType): string {
    // TODO feel free to modify all code below as you see fit
    let str = "================" + product.brand + "===================";
    str += LB;
    str += "#" + product.id + "    : " + [product.title];
    str += LB;
    str += "Cost  : ";
    str += "£" + product.prices[product.prices.length - 1];
    product.prices.reverse().splice(-1);
    product.prices.forEach((productPrice) => (str += " to £" + productPrice));
    str += LB;
    const full_star = "★";
    const empty_star = "☆";
    str += "Stars : ";
    str += product.rating
      ? full_star.repeat(Math.trunc(product.rating)) +
        empty_star.repeat(5 - Math.trunc(product.rating))
      : empty_star.repeat(5);
    return str;
  }

  // ---------------------TEST All Products---------------------
  return print;
};

export default Bugs;
