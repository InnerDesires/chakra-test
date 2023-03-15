
import { Avatar } from '@chakra-ui/avatar';
import { IconButton, Button } from '@chakra-ui/button';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card';
import { Input } from '@chakra-ui/input';
import { Badge, Box, Center, Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/layout';
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/table';
import React from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Text } from '@chakra-ui/react'
import { MdOutlinePostAdd } from "react-icons/md"
export function AttributePanel() {
    const columns = [
        { key: 'date_b', name: 'date_b' },
        { key: 'date_e', name: 'date_e' },
        { key: 'name', name: 'Назва' },
    ];

    const rows = [
        { date_b: '22.02.2021', date_e: '22.02.2021', name: 'Example Example Example Example Example Example Example Example Example ' },
    ];

    return (
        <Flex direction={"column"} height={'100%'} gap='2' padding={2}>
            <Input variant='filled' placeholder='Введіть idi показника' size='sm' />
            <Card width='100%' size='sm'>
                <CardHeader>
                    <Grid
                        templateRows='repeat(1, 1fr)'
                        templateColumns='repeat(2, 1fr)'
                    >
                        <GridItem colSpan={1}>
                            <Heading size='md'>Показник </Heading>
                            <Heading size='sm'>Схема</Heading>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Flex flexDirection="row-reverse">
                                <Text textAlign={'right'}>
                                    <Badge >22.02.2022</Badge> {"  "} <Badge>22.05.2023</Badge>
                                </Text>
                            </Flex>
                        </GridItem>
                    </Grid>

                </CardHeader>
                <CardFooter>
                    <Button isDisabled={false} width={'100%'} leftIcon={<MdOutlinePostAdd />}>
                        Додати формулу
                    </Button>
                </CardFooter>
            </Card>
            <DataGrid style={{ flex: 1 }} columns={columns} rows={rows} />
        </Flex>
    )
}