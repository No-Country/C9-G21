import Login from "@/components/login/Login";
import { useState } from "react";


export default function Index() {
    const [modalReg,setModalReg] = useState(false);
    return (
        <div className="containerLogin">
            <Login setModalReg={setModalReg} modalReg={modalReg}></Login>
        </div>
    )
}
