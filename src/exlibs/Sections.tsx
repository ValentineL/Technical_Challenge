import * as React from "react";
import { FC, ReactElement } from "react";
import {
  BugExerciseMethodType,
  SeatingArrayType,
  SeatingExerciseMethodType
} from "./Models";
import { Badge } from "./Badge";
import { PRODUCT_DATA, SEATING_EXAMPLE_DATA } from "./Data";
import { ANSWER_SEATING_CASE, ANSWER_TEST_CASE } from "./TestCases";
import { COPY } from "./Copy";

const LB = "\r\n";

type SectionProps = {
  title: string;
  description?: string | JSX.Element;
  badge?: boolean;
  badgeLabel?: string;
};

type DivElement = React.HTMLAttributes<HTMLDivElement>;
type SemanticStateDiv = {
  /**
   * The Semantic State of this container.
   */
  state?: undefined | "error" | "complete";
} & DivElement;

export const Section: FC<SemanticStateDiv & SectionProps> = (
  props
): ReactElement | null => {
  const {
    className,
    children,
    state,
    title,
    badge,
    badgeLabel,
    description,
    ...rest
  } = props;

  const classes = [className, "s-section"].join(" ");

  return (
    <section className={classes} {...rest}>
      <div className={"s-layout"}>
        {badge && (
          <Badge
            label={badgeLabel || (state === "complete" ? "Complete" : "To Fix")}
            state={state}
          />
        )}
        <h3>{title}</h3>
        <div>{description}</div>
        <br />
        <div>{children}</div>
      </div>
    </section>
  );
};

export const SectionIntro: FC<DivElement> = (props): ReactElement | null => {
  const { className, ...rest } = props;

  const classes = [className, "s-header"].join(" ");

  return (
    <div {...rest} className={classes}>
      <div className={"s-navbar"} />
      <div className="s-layout-text">
        <p className={"s-intro"}>{COPY.intro.description}</p>
        <br />
      </div>
    </div>
  );
};

// --------------------------------------------------

export const TestBugs: FC<DivElement & { execute: BugExerciseMethodType }> = (
  props
): ReactElement | null => {
  const { children, execute, ...rest } = props;
  const expectedData: string = React.useMemo(
    () => ANSWER_TEST_CASE.replace(/\n/gm, LB),
    []
  );
  const [returnedData, setReturnedData] = React.useState("");

  const isValid = expectedData === returnedData;

  React.useEffect(() => {
    setReturnedData(PRODUCT_DATA.map(execute()).join(LB));
  }, [execute]);

  return (
    <Section
      badge
      title={COPY.bugs.title}
      description={COPY.bugs.description}
      state={isValid ? "complete" : "error"}
      {...rest}
    >
      <div className={"s-grid-split"}>
        <div>
          <small>Expected Values</small>
          <textarea disabled readOnly value={expectedData} />
        </div>
        <div>
          <small>Your values</small>
          <br />
          <textarea disabled readOnly value={returnedData} />
        </div>
      </div>
      {children}
    </Section>
  );
};

const drawSeatingExercise = (
  canvas: HTMLCanvasElement,
  valueArrays: SeatingArrayType[],
  expectedOutput?: SeatingArrayType[1],
  theme: "light" | "dark" = "light",
  CANVAS_WIDTH: number = 800
): void => {
  if (!canvas.getContext("2d")) return;
  const ctx: CanvasRenderingContext2D = canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const primaryColor = theme === "light" ? "black" : "white";
  const primaryColorInv = theme !== "light" ? "black" : "white";
  const primaryAccentColor = theme === "light" ? "grey" : "grey";
  const AREA_SIZE = 16;
  const SPACE = 6;

  // ctx.fillStyle = primaryColorInv;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  function generateSeatInstances(
    input: Array<0 | 1>,
    output: number[]
  ): SeatingArrayType[0][] {
    const visualSeats: SeatingArrayType[0][] = [input];
    for (let i = 1; i < output.length + 1; i++) {
      const currSeats = [...visualSeats[i - 1]];
      currSeats[output[i - 1]] = 1;
      visualSeats.push(currSeats);
    }
    return visualSeats;
  }

  function drawSeat([x, y]: number[], fill: boolean = false, newIndex = -1) {
    const SIZE = 16;
    ctx.beginPath();
    ctx.arc(x + SIZE / 2, y, SIZE / 4, 0, 2 * Math.PI);
    ctx.rect(x, y + SIZE / 2, SIZE, SIZE);
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    if (fill) {
      ctx.fillStyle = newIndex < 0 ? primaryAccentColor : primaryColor;
      ctx.fill();
      if (newIndex >= 0) {
        ctx.save();
        // ctx.fillStyle = primaryColorInv;
        ctx.font = "14px monospace";
        ctx.fillText(newIndex + "", newIndex > 9 ? x : x + 4, y + 20);
        ctx.restore();
      }
    }
    ctx.stroke();
    ctx.closePath();
  }

  function drawArrow([x, y]: number[]) {
    const OFFSET_Y = 4;
    ctx.beginPath();
    ctx.moveTo(x, y + OFFSET_Y);
    ctx.lineTo(x, y + 20 + OFFSET_Y);
    ctx.lineTo(x + AREA_SIZE, y + 10 + OFFSET_Y);
    ctx.fillStyle = "gainsboro";
    ctx.fill();
  }

  function drawTitle(
    [x, y]: number[],
    input: number[],
    output: number[],
    expectedOutput?: number[]
  ) {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.font = "14px monospace";
    if (expectedOutput) {
      ctx.fillText(
        `Input: [${input.join(",")}], Your Output: [${output.join(
          ","
        )}], Expected: [${expectedOutput.join(",")}]`,
        x,
        y + 20
      );
    } else {
      ctx.fillText(
        `Input: [${input.join(",")}], Output: [${output.join(",")}]`,
        x,
        y + 20
      );
    }
    ctx.closePath();
    ctx.fill();
  }

  const coords = [2, AREA_SIZE];
  for (let j = 0; j < valueArrays.length; j++) {
    let seatingLength = 0;
    const [input, output]: SeatingArrayType = valueArrays[j];

    // convert output to seats with array
    const visualSeats = generateSeatInstances(input, output);
    drawTitle(coords, input, output, expectedOutput);
    coords[1] += AREA_SIZE + SPACE * 4;

    // print converted seats array
    for (let k = 0; k < visualSeats.length; k++) {
      for (let i = 0; i < visualSeats[k].length; i++) {
        const currSeat = visualSeats[k][i];
        drawSeat(coords, currSeat === 1, i === output[k - 1] ? i : -1);
        coords[0] += AREA_SIZE + SPACE;
      }
      if (k < visualSeats.length - 1) {
        coords[0] += AREA_SIZE / 2;
        drawArrow(coords);
        coords[0] += AREA_SIZE * 1.5 + SPACE;
        if (!seatingLength) seatingLength = coords[0];
        if (coords[0] + seatingLength >= CANVAS_WIDTH) {
          coords[0] = 2;
          coords[1] += SPACE * 8;
        }
      }
    }
    coords[1] += SPACE * 8;
    coords[0] = 2;
  }
};

export const TestCodeChallenge: FC<
  DivElement & {
    execute: SeatingExerciseMethodType;
    canvasTheme: "light" | "dark";
    testAllCases: boolean;
  }
> = (props): ReactElement | null => {
  const { children, execute, canvasTheme, testAllCases, ...rest } = props;

  const DEFAULT_TEST_CASE = 1;
  const [testNumber, setTestNumber] = React.useState<number>(DEFAULT_TEST_CASE);
  const canvasRef = React.useRef(null);
  const canvasOutput = React.useRef(null);
  const CANVAS_WIDTH = 800;
  const [validList, setValidList] = React.useState<boolean[]>(
    Array(ANSWER_SEATING_CASE.length - 1).fill(false)
  );

  React.useEffect(() => {
    if (!canvasRef.current) return;
    drawSeatingExercise(
      canvasRef.current,
      SEATING_EXAMPLE_DATA,
      undefined,
      canvasTheme
    );
    if (testAllCases) {
      setValidList(
        ANSWER_SEATING_CASE.map(([i, o]) => {
          return execute([...i]).join(",") === o.join(",");
        })
      );
    }
  }, [canvasTheme]);

  React.useEffect(() => {
    if (!canvasOutput.current) return;
    const [input, output] = ANSWER_SEATING_CASE[testNumber];
    const currAnswer: SeatingArrayType[1] = execute([...input]);
    drawSeatingExercise(
      canvasOutput.current,
      [[input, currAnswer]],
      output,
      canvasTheme
    );
    setValidList((prev): boolean[] => {
      prev[testNumber] = currAnswer.join(",") === output.join(",");
      return [...prev];
    });
  }, [testNumber, canvasTheme]);

  const allValid = validList.reduce((a, x) => a && x);
  const percentPassing =
    ((validList.filter((a) => a).length / ANSWER_SEATING_CASE.length) * 100) |
    0;
  return (
    <Section
      title={COPY.code.title}
      description={COPY.code.description}
      state={allValid ? "complete" : "error"}
      badge={testAllCases}
      badgeLabel={percentPassing + "% Passing"}
      {...rest}
    >
      <details>
        <summary>Details</summary>
        <div style={{ overflowX: "auto" }}>
          <br />
          {COPY.code.details}
          <br />
          <br />
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={SEATING_EXAMPLE_DATA.length * 92}
          />
        </div>
      </details>
      <br />
      <details>
        <summary>Playground</summary>
        <div style={{ overflow: "auto" }}>
          <br />
          <span>Test Case: </span>
          <input
            className={"s-input-text"}
            type={"number"}
            min={1}
            max={ANSWER_SEATING_CASE.length}
            defaultValue={DEFAULT_TEST_CASE + 1}
            size={2}
            onChange={(e) => {
              let value: number = (e.target.value as unknown) as number;
              e.target.style.width = `${(e.target.value + "").length + 5}ch`;
              if (value <= 0 || value >= ANSWER_SEATING_CASE.length + 1) {
                e.target.setCustomValidity("Error");
                value = 1;
              } else {
                e.target.setCustomValidity("");
              }
              setTestNumber(value - 1);
            }}
          />
          <span> / {ANSWER_SEATING_CASE.length} </span>
          <Badge
            label={validList[testNumber] ? "Pass" : "Fail"}
            state={validList[testNumber] ? "complete" : "error"}
          />
          <br />
          <canvas
            ref={canvasOutput}
            width={CANVAS_WIDTH}
            height={
              (((ANSWER_SEATING_CASE[testNumber][0].length / 7) | 0) + 1) * 84
            }
          />
        </div>
      </details>
      {children !== undefined && (
        <>
          <br />
          <details>
            <summary>My Explanation</summary>
            <div id={"code-explanation"}>
              <br />
              {children}
            </div>
          </details>
        </>
      )}
      {COPY.code.task}
    </Section>
  );
};

export const TestStepper: FC<DivElement> = (props): ReactElement | null => {
  const { children, ...rest } = props;

  return (
    <Section
      title={COPY.component.title}
      description={COPY.component.description}
      {...rest}
    >
      <details>
        <summary>Reference Blueprint</summary>
        <div>
          <br />
          <img
            width={"100%"}
            src={"/Assets/Stepper-UI-AC.png"}
            alt={"Stepper Acceptance Criteria"}
          />
        </div>
      </details>
      <br />
      <div className={"s-sandbox"}>{children}</div>
    </Section>
  );
};

export const TestDarkMode: FC<DivElement> = (props): ReactElement | null => {
  const { children, ...rest } = props;

  return (
    <Section
      title={COPY.dark.title}
      description={COPY.dark.description}
      {...rest}
    >
      {children}
    </Section>
  );
};
