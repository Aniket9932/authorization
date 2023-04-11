import { Box, Container, Heading, HStack, Image, Stack, VStack, chakra, InputGroup, InputLeftElement ,Input, Button
,Center,Divider, useColorModeValue  } from '@chakra-ui/react'
import { CiUser, CiAt, CiUnlock, CiLocationArrow1 } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`name : ${name}`)
        console.log(`username : ${userName}`)
        console.log(`password : ${password}`)

        dispatch(login({
            name: name,
            username: userName,
            password: password,
            loggedIn: true,
           })
        );
        navigate("/logout");

    } 


  return (
    <Stack bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.300)',
      ]} minH="100vh" p='10%'>
        <VStack minH='60vh' align={'center'} justify={'center'} >
            <HStack w='100%' justify={'center'}>


            <Box color={'black'} w={'50%'} h='60vh'>
                <VStack align={'initial'} justify="center" p={'20%'}>
                    <Heading alignContent={'flex-start'} mb="3">Login 👉</Heading>
                    <chakra.form onSubmit={(e) => handleSubmit(e)}>
                        <chakra.div>

                            <chakra.div>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<CiUser color='gray.300' size={'20px'} />}
                                />
                                <Input 
                                    type='name' 
                                    placeholder='Name' 
                                    value= {name}
                                    onChange = { (e) => setName( e.target.value ) }
                                    mb={'3'}/>
                            </InputGroup>
                            </chakra.div>

                            <chakra.div>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<CiAt color='gray.300' size={'20px'}/>}
                                />
                                <Input
                                    type='name'
                                    placeholder='Username' 
                                    value= {userName}
                                    onChange = { (e) => setUserName(e.target.value) }
                                    mb={'3'}/>
                            </InputGroup>
                            </chakra.div>

                            <chakra.div>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<CiUnlock color='gray.300' size={'20px'}/>}
                                />
                                <Input 
                                    type='password' 
                                    placeholder='Password' 
                                    value={password}
                                    onChange = { (e) => setPassword(e.target.value) }
                                    mb={'6'}/>
                            </InputGroup>
                            </chakra.div>

                            <Button type='submit' bg={useColorModeValue('cyan.300')} rightIcon={<CiLocationArrow1 />}>Sign In</Button>

                        </chakra.div>
                    </chakra.form> 
                </VStack>
            </Box>
            
            <Center height='400px'>
                <Divider orientation='vertical' />
            </Center>

            <Box w={'50%'}  h='60vh' bgRepeat={'no-repeat'}
            bgSize="cover"p={'3%'}>
                <Image src='https://carta.v-card.es/assets/images/user/login.png'></Image>
            </Box>
            
            </HStack>
        </VStack>
    </Stack>
  )
}

export default Login