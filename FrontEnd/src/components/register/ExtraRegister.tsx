import React, { useState } from "react";
import { Text, Input, Dropdown } from "@nextui-org/react";


export const ExtraRegister = () => {

    const [selected, setSelected] = useState(new Set(["Rubro"]));
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
  
    return (
        <>
            <Text id="modal-title" size={14} >
                Razón Social
            </Text>
            <Input
                clearable
                bordered

                color="primary"
                size="lg"
                placeholder="Nombre del Comercio"
                id="addressComerceInput"
            />
            <Text id="modal-title" size={14} >
                Rubro
            </Text>
            <Dropdown>
                <Dropdown.Button color="primary" bordered css={{ tt: "capitalize" }}>
                    {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={() => setSelected}
                >
                    <Dropdown.Item key="Mecánico">Mecánico</Dropdown.Item>
                    <Dropdown.Item key="Peluquería">Peluquería</Dropdown.Item>
                    <Dropdown.Item key="Veterinaria">Veterinaria</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
