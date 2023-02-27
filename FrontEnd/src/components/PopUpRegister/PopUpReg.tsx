import React from 'react';
import { useRouter } from "next/router";
import { Image, Modal } from '@nextui-org/react';

type ModalType = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const PopUpReg = ( { visible, setVisible }: ModalType ) => {

    const router = useRouter();
    const handler = () => setVisible(!true);
    const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Modal>
        <Image src='check.svg' alt='check'></Image>
    </Modal>
  )
}

export default PopUpReg;


