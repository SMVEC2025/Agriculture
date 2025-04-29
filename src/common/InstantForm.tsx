import { useContext } from "react"
import Form from "./Form"
import { AppContext } from "../context/AppContext"

function InstantForm() {
    const { formOpen,setFormOpen } = useContext(AppContext)
  return (
    <>
    {formOpen?(
        <div className="if_main">
        <div className="close-btn" onClick={()=>setFormOpen(false)}>x</div>
       <div className="if_maincontainer">
        <Form/>
       </div>
    </div>
    ):null}
    </>
  )
}

export default InstantForm