
import { ComerceRegister } from "@/components/register/ComerceRegister";



export default function Index() {
  const test = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }
  return (
    <ComerceRegister test={test}>
    </ComerceRegister>
  );
}
