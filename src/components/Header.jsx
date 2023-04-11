import { Heading, HStack, Spacer, Text, Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import { CiCloudSun } from 'react-icons/ci'

function Header() {
  return (
    <HStack bg={'whiteAlpha.100'} p={2}>
        <Heading
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='xl'
            p={2}
            letterSpacing={1}
            fontFamily ='Lucida Handwriting'
        >
          <chakra.a><Flex justify={'center'} align='center'><CiCloudSun color='purple' size={'30px'}/>
        Centene</Flex></chakra.a>
        </Heading>
        <Spacer/>
        <Text>Home</Text>
    </HStack>
  )
}

export default Header