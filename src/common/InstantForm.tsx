import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { IoMdClose } from "react-icons/io";
import Form from "./Form";

function InstantForm() {
    const { formOpen,setFormOpen } = useContext(AppContext)
  return (
    <>
    {formOpen?(
        <div className="if_main">
        <div className="close-btn" onClick={()=>setFormOpen(false)}><IoMdClose/></div>
       <div className="if_maincontainer">
        <Form/>
       </div>
    </div>
    ):null}
    </>
  )
}

export default InstantForm