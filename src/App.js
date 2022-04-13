import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([
    '강남우동맛집',
    '아니 뭐해 우리팀',
    '뭐하냐고',
  ]);
  let [modal, setModal] = useState(false);
  let [clicked_num, setClicked_num] = useState(0);
  let [clicked_title, setClicked_title] = useState(0);
  let [inputVal, setInputVal] = useState('');
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {title.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h3
              onClick={() => {
                setClicked_title(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  setClicked_num(clicked_num + 1);
                }}
              >
                👍
              </span>
              {clicked_num}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      {modal === true ? (
        <Modal title={title} clicked_title={clicked_title} />
      ) : null}
      <button
        type='button'
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창
      </button>
      <div className='publish'>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let new_title = [...title];
            new_title.push(inputVal);
            setTitle(new_title);
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title[props.clicked_title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
