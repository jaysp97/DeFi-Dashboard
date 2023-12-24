
import { Box, Heading, Text, Flex, Center, Button,  Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
import { CryptoTable } from 'components/elements/CryptoTable';
import { getEllipsisTxt } from 'utils/format';





const Home = () => {
  const { data } = useSession();
  if(data?.user){
    return (
        <Box overflowX="auto">
          <Heading>Welcome <Text as='span' color='red'>{getEllipsisTxt(data.user.address)}</Text> !</Heading><br></br>
          <Box bg="blue.500" w="100%" p={4} color="white">
            <Heading as="h2" size="lg" textAlign="left">
              Current Crypto Prices
            </Heading>
    </Box>
          <CryptoTable></CryptoTable>
        </Box>
      
    );
  }
  return(
    <Box>
      <Heading>  
        Welcome to <Text as='span' color='red'>R</Text>-Defi Dashboard! <Text as='span' color='green'>Connect your wallet</Text> to access the features.
      </Heading>  <br></br><hr></hr><br></br>
      <Flex color='white' border='1px solid #ededed'>
        <Center w='700px' h='200px' bg='white'>
            <Text fontSize='3xl' color='black'>Get upto $100 in Rewards on R-DeFi Dashboard!</Text><br></br>
             {/* <Button colorScheme='linkedin'>Start Earning</Button>  */}
        </Center>
        <Center flex='1' w='80px'>
          <Image src={'/reward.png' } height={45}
          width={150}
          alt="Rewards  "/>
        </Center>
      </Flex>
    </Box>
  
 
  );
};

export default Home;
