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
  // let productIdLength: number;

  function setProductIdFormat(productId: number) {
    if (productId.toString().length < 4) {
      return "#" + ("000" + productId).slice(-3);
    } else {
      return "#" + productId;
    }
  }

  function defineDelimiterSpace(
    productIdLength: number,
    customTextLength: number
  ) {
    if (productIdLength < 5) {
      return ":".padEnd(2).padStart(8 - customTextLength);
    } else {
      return ":".padEnd(2).padStart(productIdLength + 3 - customTextLength);
    }
  }

  function setComma(number: number) {
    return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function clearTitle(text: string) {
    return text.replace(/-|\/|_/g, " ").trim();
  }

  function padTitle(text: string) {
    let amountOfPadding = DIVIDER_LENGTH - text.length;
    const even = amountOfPadding % 2 === 0;

    if (even) {
      amountOfPadding = amountOfPadding / 2;
      const rightText = "".padEnd(amountOfPadding, "=");
      const leftText = text.padStart(amountOfPadding + text.length, "=");
      return leftText.concat(rightText);
    } else {
      amountOfPadding = Math.trunc(amountOfPadding / 2);
      const rightText = "".padEnd(amountOfPadding + 1, "=");
      const leftText = text.padStart(amountOfPadding + text.length, "=");
      return leftText.concat(rightText);
    }
  }
  // ---------------------TRANSFORM function---------------------
  function print(product: ProductType): string {
    // TODO feel free to modify all code below as you see fit
    let str = "================" + product.brand + "===================";
    str = padTitle(product.brand);
    str += LB;
    str += setProductIdFormat(product.id);
    str +=
      defineDelimiterSpace(
        setProductIdFormat(product.id).length,
        setProductIdFormat(product.id).length
      ) + clearTitle(product.title);
    str += LB;
    str +=
      "Cost" +
      defineDelimiterSpace(setProductIdFormat(product.id).toString().length, 4);
    str += "£" + setComma(product.prices[product.prices.length - 1]);

    product.prices.splice(-1);
    product.prices.reverse();
    product.prices.forEach(
      (productPrice) => (str += " to £" + setComma(productPrice))
    );

    str += LB;
    const full_star = "★";
    const empty_star = "☆";
    str +=
      "Stars" +
      defineDelimiterSpace(setProductIdFormat(product.id).toString().length, 5);
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
