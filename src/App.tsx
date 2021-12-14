import React, {
  Profiler, // { lazy, Suspense }
} from "react";
// import logo from "./logo.svg";
import "./App.css";
import UseMemoComp from "./components/UseMemoComp";
import UseCallbackComp from "./components/UseCallbackComp";
import UseReducerComp from "./components/UseReducerComp";
import BenchmarkNormal from "./components/benchmark";
import BenchmarkMemo from "./components/benchmarkmemo";
import Area from "./components/Area";
// import { importMDX } from "mdx.macro";
// import Content from "./content";
// import { LDProvider } from "launchdarkly-react-client-sdk";

function App() {
  

  return (

    <div>
      {/* <UseMemoComp /> */}
      <UseCallbackComp/>
      {/* <UseReducerComp/> */}
      {/* <Area/> */}
    </div>
  );

}

export default App;


// benchmark analysis

// const [showBenchmarkNormal, setShowBenchmarkNormal] = React.useState(true);
  // // Choose how many times this component needs to be rendered
  // // We will then calculate the average render time for all of these renders
  // const timesToRender = 10000;
  // // Callback for our profiler

  // let time=0;
  // const renderProfiler = (type: any) => {
  //   return (...args: any) => {
  //     time=time+args[3];
  //     // Keep our render time in an array
  //     // Later on, calculate the average time
  //     // store args[3] which is the render time ...
  //     console.log("avg time",time/timesToRender);
  //   };
  // };
  // // console.log("hre",time/timesToRender);
  // const [count, setCount] = React.useState(0);
  // const triggerReRender = () => {
  //   setCount(count + 1);
  // };
  // // Render our component
  // return (
  //   <p>
  //     {" "}
  //     <button onClick={triggerReRender} >re render</button>
  //     {showBenchmarkNormal &&
  //       [...Array(timesToRender)].map((index) => {
  //         return (
  //           <Profiler
  //             id={`normal-${index}`}
  //             onRender={renderProfiler("normal")}
  //           >
  //             <BenchmarkMemo level={1000} count={count}/>
  //           </Profiler>
  //         );
  //       })}
  //   </p>
  // );

  //ld
  // <div>
  //   <LDProvider
  //     clientSideID={"60e586d151479b247fe3e65e"}
  //     user={{ key:"account"  }}

  //   >
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Content />
  //     </Suspense>
  //   </LDProvider>
  // </div>
  // );