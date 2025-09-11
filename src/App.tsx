import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1>프론트 메인입니다. </h1>
        추후 여기 부분 건드는 사람은 장송하 일 뿐 ㅎㅎ
        좋아요~~ <strong>{count}</strong>
        <br />
        <button onClick={() => { setCount(count + 1) }}> 좋아요 버튼</button>
      </div>
    </>
  )
}

export default App
