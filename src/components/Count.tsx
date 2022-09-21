// 计数器案例
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import counter from "../store/Count.ts";
// export const Count: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>计数器案例</h2>
//       <span>点击次数：{count}</span>
//       <br />
//       <button
//         style={{ marginRight: "4px" }}
//         onClick={() => {
//           setCount((count) => {
//             return (count += 1);
//           });
//         }}
//       >
//         加1
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         重置
//       </button>
//     </div>
//   );
// };

export const Count: React.FC = observer(() => {
  return (
    <div>
      <h2>计数器案例</h2>
      <span>点击次数：{counter.count}</span>
      <br />
      <span>翻倍：{counter.double}</span>
      <br />
      <span>测试：{counter.testCount}</span>

      <br />
      {/* <button
        style={{ marginRight: "4px" }}
        onClick={() => {
          counter.incrementAsync();
        }}
      >
        加1
      </button> */}
      <button
        style={{ marginRight: "4px" }}
        onClick={() => {
          counter.increment();
        }}
      >
        加1
      </button>
      <button
        style={{ marginRight: "4px" }}
        onClick={() => {
          counter.reset();
        }}
      >
        重置
      </button>
      <button onClick={counter.changeTestCount}>
        测试修改其他可观察值computed变化
      </button>
    </div>
  );
});
