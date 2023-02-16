import React, { useState } from "react";
import { Col, Button, Text, Input, Row, Dropdown, PressEvent, Card, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Register } from "@/components/register/Register";
import { ExtraRegister } from "@/components/register/ExtraRegister";


export default function Index() {



    return (
        <Register>
            <ExtraRegister />
        </Register>
    );
}