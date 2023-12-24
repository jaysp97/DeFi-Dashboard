import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { ColorModeButton, NavBar, RutgersLogo } from 'components/elements';
import { ConnectButton } from '../ConnectButton';

const Header = () => {
  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" p={'10px'}>
        <Flex  justify="space-between">
          { <RutgersLogo /> }
          <NavBar />
          <HStack gap={'10px'}>
            <ConnectButton />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
