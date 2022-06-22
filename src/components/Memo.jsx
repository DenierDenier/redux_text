const MemoItem =({memo,onRemove}) =>{
  return (
    <div>
      {/**memo title */}
      <span>제목 : {memo.title}</span>
      {/**메모 삭제(id로) */}
      <button onClick={() => {onRemove(memo.id)}}>x</button>
      {/**메모의 text */}
      <p>내용: {memo.text}</p>
    </div>
  )
}

const Memo = ({title,text,memos,onChangeTitle, onChangeText, onInsert, onRemove}) => {
  
  const memoAdd = () =>{
    onInsert({title:title,text:text});
    onChangeTitle("");
    onChangeText("");
  }

  return (
    <div>
      <h1>메모하는 공간입니다</h1>
      {/**title값을 들고옴 -입력 누르면 초기화 */}
      <input 
      type="text" 
      value={title} 
      onChange={(e)=>{onChangeTitle(e.target.value)}} 
      />{" "}
      <br />
      {/**text값을 들고옴 -입력 누르면 초기화  */}
      <textarea
      name="" id="" cols="30" rows="10"
      value={text} 
      onChange={(e)=>{onChangeText(e.target.value)}}
      /><br />
      {/**title과 text값을 전달해 추가 */}
      <button onClick={memoAdd}>입력</button>
      <hr />
      {/**memos 들고와 map으로 전체를 보여줄것 */}
      {/**state는 title text memos 3개*/}
      {
        memos.map((memo)=>(
          <MemoItem memo={memo} onRemove={onRemove} key={memo.id} />
        ))
      }
    </div>
  );
};

export default Memo ;