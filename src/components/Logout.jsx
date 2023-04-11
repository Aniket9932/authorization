import { Flex, Stack, chakra, VStack, Container, Box, Text, Button, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../features/userSlice';


const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    navigate("/login");

  }


  return (
    <div>
      <Stack bgGradient='linear(to-l, #81E6D9, #319795)' w={'100%'} minH='100vh' align={'center'} justify='center'>
        <VStack w='60vh' h={'60vh'} borderWidth='2px' justify={'center'} borderRadius={20}>
          <Flex mb={5}>
            <Text fontSize={'50px'} fontWeight={'bold'} align='center' 
            bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
            bgClip="text"
            >
              Welcome {user.name}
            </Text>
          </Flex>
          <HStack justify={'space-between'}>
            <Button bgGradient='linear(to-r, green.200, pink.500)'
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
              }} onClick={(e) => handleLogout(e)}>
                Log Out
            </Button>
          </HStack>
          
        </VStack>
      </Stack>
    </div>
  )
}

export default Logout