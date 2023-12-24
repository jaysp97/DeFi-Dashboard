import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Image, Box, Text, Select } from '@chakra-ui/react';

interface Crypto {
  id: string;
  name: string;
  current_price: number;
  image: string;
  price_change_24h: number;
}

const CryptoPricesTable = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>('usd');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: currency,
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
          }
        });
        setCryptos(response.data);
        setError('');
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
      setLoading(false);
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval);
  }, [currency]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box>
        <Select mb={4} onChange={(e) => setCurrency(e.target.value)} value={currency}>
        <option value="usd">USD</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="inr">INR</option> 

      </Select>
      <Table variant="simple" borderWidth="1px" borderColor="gray.200" borderRadius="md">
      <Thead>
        <Tr>
          {/* <Th></Th> */}
          <Th>Name</Th>
          <Th isNumeric>Current Price</Th>
          <Th isNumeric>Change in Last 24 hrs.</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cryptos.map(crypto => (
          <Tr key={crypto.id}>  
            <Td>
                <Image src={crypto.image} alt={crypto.name} boxSize="30px" />
              <Text>{crypto.name}</Text>
            </Td>
            <Td isNumeric>
              <Text>{currency} {crypto.current_price}</Text>
            </Td>
            <Td isNumeric>
              <Text color={crypto.price_change_24h < 0 ? 'red.500' : 'green.500'}>{currency} {crypto.price_change_24h}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Box>
    
  );
};

export default CryptoPricesTable;