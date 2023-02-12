import {useContext, useState} from 'react'
import Button from './Button';
import { AppContext } from '@/context/context';
const SideButtons = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selected,setSelected] = useState(null);
  const {dispatch} = useContext(AppContext);
  const handleClick = (id,callback) => {
    setSelected(id)
    callback();
  }
  const sidebtns = [
    {id:1,title:'CLEAR RESPONSE',callBack:() => {
      setIsClicked(true)
      setTimeout(()=> {
        dispatch({type:'CLEAR'})
        setIsClicked(false)
        setSelected(null)
      },500)}},
    {id:2,title:'REVIEW',callBack:() => {
      setIsClicked(true)
      setTimeout(()=> {
        dispatch({type:'REVIEW'})
        setIsClicked(false)
        setSelected(null)
      },500)}},
    {id:3,title:'DUMP',callBack:() => {
      setIsClicked(true)
      setTimeout(()=> {
        dispatch({type:'DUMP'})
        setIsClicked(false)
        setSelected(null)
      },500)
    }},
    {id:4,title:'PREVIOUS',callBack:() => {
      setIsClicked(true)
      setTimeout(()=> {
        dispatch({type:'PREV'})
        setIsClicked(false)
        setSelected(null)
      },500)}},
    {id:5,title:'NEXT',callBack:() => {
      setIsClicked(true)
      setTimeout(()=> {
        dispatch({type:'NEXT'})
        setIsClicked(false)
        setSelected(null)
      },500)
    }}
]
  return (
    <div className='tabs'>{sidebtns.map((tab)=> {
      return <Button key={tab.id} {...tab} selected={selected} disabled={isClicked} onClick={()=> handleClick(tab.id,tab.callBack)}/>
    })}</div>
  )
}

export default SideButtons