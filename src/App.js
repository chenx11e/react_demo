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


function App () {
  return (
    <div className="App">
      111
    </div>
  )
}
// function App () {
//   return (
//     <div className="App">
//       111
//     </div>
//   )
// }
export default App
