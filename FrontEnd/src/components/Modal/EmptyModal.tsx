import { Modal, Text } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

export type EmptyModalT = {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
    msg?: string
}
export const EmptyModal = ({ visible, setVisible, msg }: EmptyModalT) => {
    return (
        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={() => setVisible(false)}
            css={{
                height: "340px",
                margin: "15px",
                backgroundColor: "White",
            }}
        >
            <Modal.Header css={{ m: "0", p: "0" }}>

            </Modal.Header>
            <Modal.Body>
                {msg ?
                    <Text>{msg}</Text>
                    : <Text>Hola</Text>
                }
            </Modal.Body>
            <Modal.Footer
                justify="center"
                css={{ position: "relative", top: "-55px" }}
            >

            </Modal.Footer>
        </Modal>
    )
}
