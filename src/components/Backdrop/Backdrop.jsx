import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function Backdrop({handleClose}) {
  return (
    <Flex bg='rgba(0,0,0,0.03)' onClick={handleClose} w='100vw' h='100vh' pos='fixed' zIndex='10' top='0px' left='0px'>
    </Flex>
  )
}
