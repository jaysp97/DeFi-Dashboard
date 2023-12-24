import { Box, Heading, Text, Flex, Center, Button, Input } from '@chakra-ui/react';
import {FaGoogle, FaGithub} from 'react-icons/fa';

const Login = () => {
    return(
        <Box h='400px'>
            <Center mb='10px'>
                <Heading>Sign In</Heading>
            </Center>
            <Box>
                <Input mb='10px' placeholder='Email' size='md' />

                <Input mb='20px' placeholder='Password' size='md' /> 
                <Center mb='10px'>
              
                    <Button colorScheme='teal' size='md'>
                        Sign In
                    </Button>
                </Center>
            </Box>

            <Center mb='30px'><Text fontSize='3xl'>OR</Text></Center>
            
            <Center mb='10px'>
            <Button colorScheme='green' leftIcon={<FaGoogle />}>
                         Sign Up with Google
            </Button>
            </Center>
             <Center>
                <Button colorScheme='green' leftIcon={<FaGithub />}>
                    Sign Up with Github
                </Button>
            </Center>   
                
            
        </Box>
    );
}

export default Login;