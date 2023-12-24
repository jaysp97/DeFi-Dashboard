import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const RutgersLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={'/Rutgers-Scarlet-Knights-logo.svg' }
      height={45}
      width={150}
      alt="Rutgers"
    />
  );
};

export default RutgersLogo;