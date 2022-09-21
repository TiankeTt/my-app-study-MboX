import {
  action,
  autorun,
  computed,
  configure,
  makeAutoObservable,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
// configure({ enforceActions: "never" }); 强行关闭报错

class Count {
  count: number = 0;
  testCount: number = 1;
  constructor() {
    makeObservable(this, {
      count: observable,
      testCount: observable,
      increment: action,
      reset: action,
      double: computed,
      changeTestCount: action.bound,
    });
    // makeAutoObservable(this, {}, { autoBind: true });
  }
  increment() {
    setTimeout(() => {
      runInAction(() => {
        this.count += 1;
      });
    }, 1000);
  }
  // incrementAsync() {
  //   setTimeout(() => {
  //     this.increment();
  //   }, 1000);
  // }

  reset() {
    this.count = 0;
  }
  get double() {
    console.log("computed执行");
    return this.count * 2;
  }
  changeTestCount() {
    this.testCount++;
  }
}
const counter = new Count();

// autorun(() => {
//   console.log("autorun", counter.count);
//   // 假如该方法中，使用了 多个属性，只要某一个属性发生变化则会引起整个
//   // autorun执行
//   // console.log("autorun", counter.testCount);
// });

// reaction(
//   () => {
//     return counter.count;
//   },
//   () => {
//     console.log("reaction", counter.count);
//   }
// );

export default counter;
