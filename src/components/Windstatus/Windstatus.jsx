import React from 'react'
import { Flex,VStack,Progress,Text } from '@chakra-ui/react/'

export const Windstatus = ({windspeed,windDirection}) => {
  return (
    <Flex bg='rgba(30, 33, 58, 1)' w='300px' h='150px' paddingInline='40px' paddingBlock='12px'>
        <VStack alignContent='center' w='100%'>
            <Text color='white'>Wind Status</Text>
            <Text fontSize='44px' fontWeight='700' color='white'>{windspeed}<span style={{fontSize:'30px'}}>km/h</span></Text>
            <Text fontSize='14px' color='gray'>{windDirection}</Text>
        </VStack>
    </Flex>
  )
}
