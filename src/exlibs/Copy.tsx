import * as React from "react";

export const COPY = {
  intro: {
    title: "All Systems down!",
    description: (
      <>
        Last week, some dark forces hacked into our system and messed with our
        code.
        <br />
        Some quick thinking meant we were able to kick them out just in time.
        But the damage was done.
        <br />
        <br />
        <b>Can you save us? 🙏</b>
      </>
    )
  },
  bugs: {
    title: "1. Product printing bugs! 🐞",
    description: (
      <>
        We used to have the perfect product printing code, which they destroyed.
        While we were able to salvage some logic, a lot of it is still missing.
        <br />
        <br />
        Scan through the <kbd>exercise/Bugs.ts</kbd>. Modify the code so that{" "}
        <var>Expected Values</var> match <var>Your Values</var> again. When the
        values match, this section will automatically change its state to
        Completed.
      </>
    )
  },
  code: {
    title: "2. Socially distanced seating! 🪑",
    description: (
      <>
        Since the Covid pandemic, once close friends like to sit as far away
        from each other as possible. Given a room with adjacent seats, your task
        is to calculate the next seating positions for new people that enter
        that room until the room is fully occupied while following social
        distancing.
        <br />
      </>
    ),
    details: (
      <>
        Given an array with 1s and 0s, where 1 signifies the seat is occupied
        and 0 signifies it is unoccupied at index <var>i</var>, return the{" "}
        <u>next most suitable seating position</u> repeated until there are no
        more available seats left in the room.
        <br />
        <br />
        <h4>Rules:</h4>
        <ul>
          <li>
            People cannot sit next to each other, there must be a gap of at
            least 1 seat.
          </li>
          <li>
            People like to sit as far away as possible from the nearest person.
          </li>
          <li>
            If two seats qualify equally, the one furthest from the entrance is
            chosen.
          </li>
          <li>
            When there are no 'socially distanced' seats left, the room is fully
            occupied.
          </li>
        </ul>
        <br />
        <small>
          In the first example below, the first person that enters the empty
          room sits furthest away from the entrance (index 4). The second person
          sits as far away as possible from the first person (index 0). The
          third person must sit between the first and second person (index 2).
          There are no more socially distanced seats left, hence the output is
          [4,0,2].
        </small>
      </>
    ),
    task: (
      <>
        <br />
        Edit the <kbd>exercise/Seating.ts</kbd> file. Use the Playground section
        to test whether your output for the selected test case passes or not.
        When your output matches the expected output for all test cases, this
        section will automatically change its state to Complete.
      </>
    )
  },
  component: {
    title: "3. The Stepper component 🪜",
    description: (
      <>
        We lost our Stepper component. Luckily we had a blueprint of how it can
        be recreated. Create a Stepper component with appropriate props of your
        liking to manage increasing / decreasing of numeric values by the user.
        We will share this reusable component with the rest of the world soon.
        Please consider Generic behaviour, Documentations, Accessibility and
        Testing.
        <br />
        <br />
        Edit the <kbd>exercise/Stepper/</kbd> folder. You can create additional
        files as you see fit. Please show examples of different visual and
        logical states.
      </>
    )
  },
  dark: {
    title: "4. Dark mode 🌚",
    description: (
      <>
        Our developers get very upset when a white screen burns their eyes on a
        bright sunny day (we know). We cannot live without dark mode. Please
        help us reimplement it. 🙏
        <br />
        <br />
        Pick darker color values as you see fit. You can pass custom children
        into this section if you prefer to have a clickable toggle and/or only
        set dark mode when preferred by user's browser.
        <br />
        <br />
        Feel free to create or edit any file within this repository to achieve
        your dark mode. Ensure that previous tests above are also compatible
        with dark mode.
      </>
    )
  }
};
