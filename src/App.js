// JSX中使用js表达式
// 1. 识别常规的变量
// 2. 原生js方法的调用
// 3. 三元运算符（常用）

// const name = 'chenx11'
// const getAge = () => {
//   return '永远18'
// }
// const flag = false
// function App () {
//   return (
//     <div>
//       {name}
//       {getAge()}
//       {flag ? '👌' : '(๑•̀ㅂ•́)و✧'}
//     </div>
//   )
// }

// JSX列表渲染 
// map +key
// const data = [
//   { id: 1, name: 'chen' },
//   { id: 2, name: 'zou' },
//   { id: 3, name: 'yang' }
// ]
// function App () {
//   return (
//     <div>
//       <ul>
//         {data.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   )
// }

// JSX条件渲染
// 三元表达式  逻辑&&运算
// const flag = true
// function App () {
//   return (
//     <div className="App">
//       {/* 条件渲染字符串 */}
//       {flag ? (<span>hello <strong>span</strong></span>) : null}
//       {/* 条件渲染逻辑&&运算 */}
//       {true && <span>hello <strong>span</strong></span>}
//     </div>
//   )
// }

// 复杂的分支逻辑===>使用函数精简
// const getTag = (type) => {
//   if (type === 1) return (<h1>这是一个H1</h1>)
//   if (type === 2) return (<h2>这是一个H2</h2>)
//   if (type === 3) return (<h3>这是一个H3</h3>)
// }

// function App () {
//   return (
//     <div className="App">
//       {getTag(3)}
//     </div>
//   )
// }

// JSX样式处理
// 行内样式 -在元素身上绑定style（需要{{}}）
// 类名样式(推荐) -在元素身上绑定一个className属性即可
// 动态控制active类名 满足条件才有
// 导入样式文件
// import './App.css'
// const activeFlag = true

// function App () {
//   return (
//     <div className="App">
//       <span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
//       <span className={activeFlag ? 'active' : ''}>测试类名样式</span>
//     </div>
//   )
// }

// 评论的demo
// import './App.css'
// import avatar from './images/avatar.jpg'
// const state = {
//   // hot: 热度排序  time: 时间排序
//   tabs: [
//     {
//       id: 1,
//       name: '热度',
//       type: 'hot'
//     },
//     {
//       id: 2,
//       name: '时间',
//       type: 'time'
//     }
//   ],
//   active: 'hot',
//   list: [
//     {
//       id: 1,
//       author: '刘德华',
//       comment: '给我一杯忘情水',
//       time: new Date('2021-10-10 09:09:00'),
//       // 1: 点赞 0：无态度 -1:踩
//       attitude: 1
//     },
//     {
//       id: 2,
//       author: '周杰伦',
//       comment: '哎哟，不错哦',
//       time: new Date('2021-10-11 09:09:00'),
//       // 1: 点赞 0：无态度 -1:踩
//       attitude: 0
//     },
//     {
//       id: 3,
//       author: '五月天',
//       comment: '不打扰，是我的温柔',
//       time: new Date('2021-10-11 10:09:00'),
//       // 1: 点赞 0：无态度 -1:踩
//       attitude: -1
//     }
//   ]
// }
// function App () {
//   return (
//     <div className="App">
//       <div className="comment-container">
//         <div className="comment-head">
//           <span><strong>5</strong> 评论</span>
//         </div>

//         <div className="tabs-order">
//           <ul className="sort-container">
//             <li className="on">按热度排序</li>
//             <li>按时间排序</li>
//           </ul>
//         </div>

//         {/* 添加评论 */}
//         <div className="comment-send">
//           <div className="user-face">
//             <img className="user-head" src={avatar} alt="" />
//           </div>
//           <div className="textarea-container">
//             <textarea cols="80"
//               rows="5"
//               placeholder="发条友善的评论"
//               className="ipt-txt"></textarea>
//             <button className="comment-submit">发表评论</button>
//           </div>
//           <div className="comment-emoji">
//             <i className="face"></i>
//             <span className="text">表情</span>
//           </div>
//         </div>

//         {/* 评论列表 */}
//         <div className="comment-list">
//           <div className="list-item">
//             <div className="user-face">
//               <div className="user-head" src={avatar} alt=""></div>
//             </div>
//             <div className="comment">
//               <div className="user">youyuxi</div>
//               <p className="text">前排</p>
//               <div className="info">
//                 <span className="time">2021-10-08 09:05:00</span>
//                 <span className="like liked">
//                   <i className="icon" />
//                 </span>
//                 <span className="hate hated">
//                   <i className="icon" />
//                 </span>
//                 <span className="reply btn-hover">删除</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// 函数组件的创建和渲染 (1.组件名称必须大写 才会被当作组件 2. 必须有返回值 返回需要展示的结构)
// 创建Hello组件
// function Hello () {
//   return (<div>hello</div>)
// }
// // 渲染<div>hello</div>

// function App () {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   )
// }



// 类组件的创建和渲染 (1. 组件名大写 2. 继承于React.Component 3. 在render函数中返回结构)
// 创建
// import React from 'react'
// class HelloComponent extends React.Component {
//   render () {
//     return <div>this is a class component</div>
//   }
// }
// // 渲染  <div>this is a class component</div>
// function App () {
//   return (
//     <HelloComponent></HelloComponent>
//   )
// }



// 事件绑定--函数组件 
// onClick={clickHandler}  on + 事件名称 = { 事件处理程序 } 

// import React from 'react'

// // 传递e
// // function Hello () {
// //   const clickHandler1 = (e) => {
// //     console.log('函数组件中的事件被触发了')
// //     console.log(e)
// //   }
// //   return (<div onClick={clickHandler1}>hello</div>)
// // }

// // 传递自定义参数 箭头函数
// // function Hello () {
// //   const clickHandler1 = (msg) => {
// //     console.log('函数组件中的事件被触发了')
// //     console.log(msg)
// //   }
// //   return (<div onClick={() => clickHandler1('这是一个自定义参数')}>hello</div>)
// // }

// // 传递e和自定义参数
// function Hello () {
//   const clickHandler1 = (e, msg) => {
//     console.log('函数组件中的事件被触发了')
//     console.log(e)
//     console.log(msg)
//   }
//   return (<div onClick={(e) => clickHandler1(e, '这是一个自定义参数')}>hello</div>)
// }

// // // 事件绑定--类组件 
// // onClick={this.clickHandler}
// class HelloComponent extends React.Component {
//   clickHandler2 = () => {
//     console.log('类组件中的事件被触发了')
//   }
//   render () {
//     return <div onClick={this.clickHandler2}>this is a class component</div>
//   }
// }

// function App () {
//   return (
//     <div>
//       <Hello />
//       <HelloComponent />
//     </div>

//   )
// }

// 组件状态(类组件讲解) state  {this.state.name}  this.setState
// import React from 'react'
// class TestComponent extends React.Component {
//   // 1. 定义组件状态
//   state = {
//     name: 'i am cxp'
//   }
//   // 修改state  箭头函数 不然拿不到this(当前组件的实例)
//   changeName = () => {
//     // 错误示范 直接赋值来修改值
//     // this.state.name = 'i am zxy'
//     this.setState({
//       name: 'i am zxy'
//     })
//   }
//   render () {
//     // 2. 使用组件状态
//     return <div>this is TestComponent
//       当前name为:{this.state.name}
//       <button onClick={this.changeName}>修改name</button>
//     </div>
//   }
// }

// function App () {
//   return (
//     <TestComponent />
//   )
// }


// 写一个counter组件
// import React from 'react'
// class CounterComponent extends React.Component {
//   // 通过state定义组件状态
//   state = {
//     count: 0
//   }

//   changeCounter = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render () {
//     return <button onClick={this.changeCounter}>{this.state.count}</button>
//   }
// }
// function App () {
//   return (
//     <CounterComponent />
//   )
// }
// function App () {
//   return (
//     <CounterComponent />
//   )
// }


// 表单处理 受控组件
// import React from 'react'
// class InputComponent extends React.Component {
//   state = {
//     msg: 'this is message'
//   }
//   changeHandler = (e) => {
//     this.setState({
//       msg: e.target.value
//     })
//   }
//   render () {
//     return <input value={this.state.msg} onChange={this.changeHandler}></input>
//   }
// }

// function App () {
//   return (
//     <InputComponent />
//   )
// }


// 组件通信 父子 App父组件 Son子组件
// import React from 'react'

// // 函数组件的Son
// // props接收父组件传递的数据
// function FSon (props) {
//   return (
//     <div>我是函数子组件{props.msg}</div>
//   )
// }

// // 类组件的Son
// class CSon extends React.Component {
//   render () {
//     // 通过this关键词 去获取这里的props是固定的
//     return (<div>我是类式子组件,{this.props.msg}
//       <button onClick={this.props.getMsg}>触发父组件传入的函数</button>
//     </div>)
//   }
// }

// class App extends React.Component {
//   state = {
//     msg: "i am a msg"
//   }
//   getMsg = () => {
//     console.log('1111')
//   }
//   render () {
//     return (
//       <div>
//         父组件
//         < CSon msg={this.state.msg} getMsg={this.getMsg} />
//         <FSon msg={this.state.msg} />
//       </div >

//     )
//   }
// }


// 子传父:子组件调用父组件传递过来的函数 并且把想传递的数据当作参数传给父组件
// import React from 'react'
// function Son (props) {
//   const { getSonMsg } = props
//   return (
//     <div>this is a son<button onClick={() => getSonMsg('这是来自子组件的数据')}>click</button></div>
//   )
// }

// class App extends React.Component {

//   state = {
//     list: [1, 2, 3]
//   }
//   getSonMsg = (sonMsg) => {
//     console.log(sonMsg)
//   }
//   render () {
//     return <Son getSonMsg={this.getSonMsg}></Son>
//   }
// }

// 兄弟组件 父传子 再子传父
import React from 'react'
function SonA (props) {
  const { getSonMsg } = props
  return (
    <div>this is a son<button onClick={() => getSonMsg('这是来自子组件的数据')}>click</button></div>
  )
}
function SonB (props) {
  const { msg } = props
  return (
    <div>{msg}</div>
  )
}

class App extends React.Component {

  state = {
    msg: 123
  }
  getSonMsg = (sonMsg) => {
    this.setState({
      msg: sonMsg
    })
  }
  render () {
    return <div>
      <SonA getSonMsg={this.getSonMsg}></SonA>
      <SonB msg={this.state.msg}></SonB>
    </div>
  }
}

export default App
