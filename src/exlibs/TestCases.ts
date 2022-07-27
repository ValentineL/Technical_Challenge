import { SeatingArrayType } from "./Models";

export const ANSWER_TEST_CASE = `=================Apple==================
#001  : iPhone 9
Cost  : £600 to £549
Stars : ★★★★☆
=================Apple==================
#021  : iPhone X
Cost  : £699 to £899
Stars : ★★★★☆
================Samsung=================
#032  : Samsung Universe 9
Cost  : £800 to £1,020 to £1,249
Stars : ☆☆☆☆☆
=================Huawei=================
#10051 : Huawei P30
Cost   : £499.99
Stars  : ★★★★☆
================Samsung=================
#77007700 : Samsung Galaxy Book
Cost      : £1,299.25 to £1,499
Stars     : ★★☆☆☆`;

export const ANSWER_SEATING_CASE: SeatingArrayType[] = [
  [[1], []],
  [[0], [0]],
  [[0, 0], [1]],
  [[0, 1], []],
  [[1, 0], []],
  [
    [0, 0, 0, 0],
    [3, 0]
  ],
  [[0, 0, 1, 0], [0]],
  [[1, 0, 1, 0], []],
  [[1, 0, 0, 1], []],
  [
    [0, 0, 0, 0, 0],
    [4, 0, 2]
  ],
  [[0, 1, 0, 1, 0], []],
  [
    [1, 0, 0, 0, 0, 0, 0],
    [6, 3]
  ],
  [
    [0, 0, 0, 0, 1, 0, 0],
    [0, 6, 2]
  ],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 4, 6, 2]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 4, 6, 2]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 5, 3, 7]
  ],
  [[0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], []],
  [
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [8, 4, 0]
  ],
  [
    [0, 1, 0, 0, 0, 0, 1, 0, 0],
    [4, 8]
  ],
  [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [3, 7]
  ],
  [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [3, 11, 7]
  ],
  [
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 9, 5]
  ]
];
