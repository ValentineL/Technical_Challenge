export type ProductType = {
  id: number;
  prices: number[] | undefined;
  rating?: number | undefined;
  title: string;
  brand: string;
};

export type BugExerciseReturnType = (product: ProductType) => string;
export type BugExerciseMethodType = () => BugExerciseReturnType;

/**
 * First index = input array, Second index = output positions array
 */
export type SeatingArrayType = [Array<0 | 1>, number[]];
export type SeatingExerciseMethodType = (
  input: SeatingArrayType[0]
) => SeatingArrayType[1];
