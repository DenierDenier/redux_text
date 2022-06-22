import Memo from "../components/Memo";
import { useDispatch, useSelector} from "react-redux"
import { useCallback } from "react";
import { changeTitle,changeText,insert,remove } from "../modules/memo";

const MemoContainer = () => {
  const { title, text, memos } =useSelector((state)=>({
    title:state.memo.title,
    text:state.memo.text,
    memos:state.memo.memos
  }))

  const dispatch = useDispatch();
  const onChangeTitle = useCallback((input) => dispatch(changeTitle(input)),[dispatch]);
  const onChangeText = useCallback((input) => dispatch(changeText(input)),[dispatch]);
  const onInsert = useCallback((memo) => dispatch(insert(memo)),[dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)),[dispatch]);

  return <Memo 
  title={title} 
  text={text} 
  memos={memos} 
  onChangeTitle={onChangeTitle}
  onChangeText={onChangeText}
  onInsert={onInsert}
  onRemove={onRemove}
  />;
}
export default MemoContainer;