import React from "react";
import { ComerceRegister } from "@/components/register/ComerceRegister";


export default function Index() {

    const test = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    }

    return (
        <ComerceRegister isUserRegister={false} test={test}>
        </ComerceRegister>

    );
}