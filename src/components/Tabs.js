import {useState} from 'react'
import Button from './Button'
import { tabs } from '@/meta/buttonsData'
const Tabs = () => {
  const [selected,setSelected] = useState(1);
  return (
    <div className="tabs-wrapper">
      <div className='tabs'>
      {tabs.map((tab)=> {
        return <Button key={tab.id} {...tab} selected={selected} setSelected={setSelected} onClick={()=> setSelected(tab.id)}/>
      })}
      </div>
      <br />
    </div>
    

  )
}

export default Tabs