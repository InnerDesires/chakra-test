import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import {  extendTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Layout } from './Layout';
import {  MultiSelectTheme } from 'chakra-multiselect'

const theme = extendTheme({
    components: {
      MultiSelect: MultiSelectTheme
    }
  })
const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Layout></Layout>
        </ChakraProvider>
    )
};

export default App;