import React from 'react'
import { Flex,VStack,Progress,Text } from '@chakra-ui/react/'

export const Humidity = ({humidity,humidityValue}) => {
  return (
    <Flex bg='rgba(30, 33, 58, 1)' w='300px' h='150px' paddingInline='40px' paddingBlock='12px'>
        <VStack alignContent='center' w='100%'>
            <Text color='white'>Humidity</Text>
            <Text fontSize='44px' fontWeight='700' color='white'>{humidityValue}%</Text>
            <Progress value={humidity} rounded='10px' colorScheme='yellow' w='100%'/>
        </VStack>
    </Flex>
  )
}
