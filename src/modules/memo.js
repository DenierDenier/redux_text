// action type 정하기
const CHANGE_TITLE = 'memo/CHANGE_TITLE'
const CHANGE_TEXT = 'memo/CHANGE_TEXT'
const INSERT = 'memo/INSERT'
const REMOVE = 'memo/REMOVE'


// action function 작성 >> dispatch때 사용학 위해 export
export const changeTitle = (input) =>({
  type : CHANGE_TITLE,
  input //action.input이라고 작성했을때 그 안의 내용 사용 가능
});
export const changeText = (input) =>({
  type : CHANGE_TEXT,
  input //action.input이라고 작성했을때 그 안의 내용 사용 가능
});
//INSERT시에 id값이 필요
let id =3;
//title과 text의 값이 객체로 들어옴
export const insert =(memo)=>({
  type:INSERT,
  memo:{
    id:id++,
    title : memo.title,
    text : memo.text
  }
});
export const remove =(id)=>({
  type:REMOVE,
  id
});


// 초기 state값 작성
const initialState = {
  title :"",
  text : "",
  memos:[
    {
      id:1,
      title:"첫번째",
      text:"첫번째메모"
    },
    {
      id:2,
      title:"두번째",
      text:"두번째메모"
    },
  ]
};


// state값을 변경하는 reducer 함수 작성
// >> store 사용하기 위해 export default
function memo(state=initialState, action){
  switch (action.type){
    case CHANGE_TITLE:
      return{
        //전체 내용을 들고와,
        ...state,
        title:action.input
      }
    case CHANGE_TEXT:
      return{
        ...state,
        text:action.input
      }
    case INSERT:
      return{
        ...state,
        memos:state.memos.concat(action.memo)
      }
    case REMOVE:
      return{
        ...state,
        memos:state.memos.filter((memo)=>memo.id !== action.id)
      }
    default:
      return state;
  }
};

export default memo;