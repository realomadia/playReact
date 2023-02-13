import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "여기 리액트 맛집";
  let [titles,titlesUpdate] = useState(["여자 코트 추천","남자 하의 추천","여자 하의 추천"]);
  let[likeCount, likeUpdate] = useState(0);
  function like() {
    likeUpdate(likeCount + 1);
  }
  function change() {
    let copy = [...titles];
    copy[0] = "남자 코트 추천";
    titlesUpdate(copy);
  } 
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Play <b>React</b></h4>
      </div>
      <button onClick={function(){
        let copy = [...titles];
        copy.sort();
        titlesUpdate(copy);
      }}>정렬</button>

      {/* <h3 style={ { color : 'gray' ,fontFamily : "serif"} }>{post}</h3> */}
      <div className="list">
        <h4 onClick={change}>{ titles[0] }<span onClick={ like }> 👍</span> {likeCount} </h4>
        <p>2월 08일 발행</p>
      </div>
      <div className="list">
        <h4>{ titles[1] }</h4>
        <p>2월 08일 발행</p>
      </div>
      <div className="list">
        <h4>{ titles[2] }</h4>
        <p>2월 08일 발행</p>
      </div>
    </div>
  );
}

export default App;