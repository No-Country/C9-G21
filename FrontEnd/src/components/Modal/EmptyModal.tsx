import { Modal, Text } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'
import { visibleT } from '../register/ComerceRegister';

export type EmptyModalT = {
    visible: boolean,
    closeHandler: ((() => void) & React.ReactEventHandler<unknown>) | undefined;
    header?: React.ReactNode,
    body?: React.ReactNode,
    footer?: React.ReactNode
}
export const EmptyModal = ({ visible, closeHandler, body, footer, header }: EmptyModalT) => {
  
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
            >
                {footer}
            </Modal.Footer>
        </Modal>
    )
}
