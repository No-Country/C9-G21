
import { ComerceRegister } from "@/components/register/ComerceRegister";



export default function Index() {
  const test = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }
  return (
    <div className="containerLogin">
      
    <ComerceRegister test={test}>
    </ComerceRegister>
    </div>
  );
}
