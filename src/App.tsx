import * as React from "react";
import "./styles.css";
import "./libstyles.css";
import {
  SectionIntro,
  TestBugs,
  TestCodeChallenge,
  TestDarkMode,
  TestStepper
} from "./exlibs";
import Stepper from "./exercise/Stepper";
import CovidSeating from "./exercise/Seating";
import Bugs from "./exercise/Bugs";

export default function App() {
  return (
    <div className="App">
      <SectionIntro />
      <TestBugs execute={Bugs} />
      <TestCodeChallenge
        execute={CovidSeating}
        canvasTheme={"light"}
        testAllCases={true}
      >
        {/*{TODO play with props above}*/}
        {/*{TODO Add some rich explanation here on how your algorithm works}*/}
      </TestCodeChallenge>
      <TestStepper>
        <Stepper />
      </TestStepper>
      <TestDarkMode />
    </div>
  );
}
