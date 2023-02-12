import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Profile from "@/components/Profile"
import Tabs from "@/components/Tabs"
import SideButtons from "@/components/SideButtons"
import Pallete from "@/components/Pallete"
import QuestionPanel from "@/components/QuestionPanel"
import Legend from "@/components/Legend"
import { useState } from "react"
export default function Home() {
  const [option,setOption] = useState('')
  console.log(option)
  return (
    <div>
      <Nav/>
      <div className="panel">
      <main>
        <Tabs/>
        <br />
        <QuestionPanel option={option} setOption={setOption}/>
        <SideButtons option={option} setOption={setOption}/>
      </main>
      <aside>

        <Profile/>
      <Pallete/>
      <Legend/>
      </aside>
      </div>
      <Footer/>
    </div>
  )
}
