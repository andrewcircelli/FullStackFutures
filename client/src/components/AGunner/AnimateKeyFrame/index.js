// import React from "react";
// import { CircleAnimation } from "../SVG";
// import { useAnimateKeyframes } from "./index";

// export default function LogoAnimationHook() {
//   const { play, isPlaying } = useAnimateKeyframes({
//     iterationCount: "infinite",
//     direction: "alternate",
//     duration: 5,
//     keyframes: [
//       "transform: rotateX(0) rotateY(0) rotateZ(0)",
//       "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
//     ],
//   });
//   return (
//     <>
//       <CircleAnimation onClick={() => play(!isPlaying)} />
//     </>
//   );
// }

// export default { play } = useAnimateKeyframes({
//   iterationCount: "infinite",
//   direction: "alternate",
//   duration: 5,
//   keyframes: [
//     "transform: rotateX(0) rotateY(0) rotateZ(0)",
//     "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
//   ],
// });

// export default function example() {
//     const [{ play }, startAnimation] = useAnimateKeyframes({
//       iterationCount: "infinite",
//       direction: "alternate",
//       playState: "running",
//       keyframes: [
//         "opacity: 0",
//         "opacity: 1",
//         "background: red",
//         "transform: rotateX(0) rotateY(0) rotateZ(0)",
//         "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
//       ],
//     });

//     return (
//       <>
//         <CircleAnimation onClick={() => startAnimation(!play)} />
//         {/* <button onClick={() => startAnimation(!play)}>Play</button> */}
//       </>
//     );
//   }
