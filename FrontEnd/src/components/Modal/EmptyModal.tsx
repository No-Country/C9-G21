import { Modal, Text } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'
import { visibleT } from '../register/ComerceRegister';

export type EmptyModalT = {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<visibleT>>;
    header?: React.ReactNode,
    body?: React.ReactNode,
    footer?: React.ReactNode
}
export const EmptyModal = ({ visible, setVisible, body, footer, header }: EmptyModalT) => {
    const closeHandler = () => {
        setVisible((prev) => {
            return { ...prev, alreadyCreated: false }
        })
        console.log("closed");
    };
    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            css={{
                justifyContent: "center",
                alignItems: "center",
                margin: "27px",
                padding: "0",
                paddingBottom: "18px",
                paddingTop: "18px",
            }}
        >
            <Modal.Header css={{ m: "0", p: "0" }}>
                {header}
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer
                justify="center"
                css={{ position: "relative", top: "-55px" }}
            >
                {footer}
            </Modal.Footer>
        </Modal>
    )
}
