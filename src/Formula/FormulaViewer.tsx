
import { Card, CardFooter, CardHeader } from "@chakra-ui/card";
import { Badge, Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import React, { forwardRef, useState } from "react";
import { MultiSelect } from 'chakra-multiselect'
import { Button } from "@chakra-ui/button";
import { MdOutlinePostAdd } from "react-icons/md";
import { Input } from "@chakra-ui/input";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import uk from 'date-fns/locale/uk';
import './datepicker.scss'
registerLocale('uk', uk)
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";


type ButtonProps = React.HTMLProps<HTMLInputElement>
export function FormulaViewer() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Flex
            h='100%'
            direction={'column'}
            height={'100%'} gap='2' padding={2}
        >
            <Box>
                <Card width='100%' size='sm'>
                    <CardHeader>
                        <Flex>
                            <Box style={{ flex: 1 }}>
                                <Heading size='md'>Формула </Heading>
                                <Heading size='sm'>Схема</Heading>
                            </Box>
                            <Box >
                                <DatePicker
                                    dateFormat="dd.mm.yyyy"
                                    locale="uk"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <DatePicker
                                    dateFormat="dd.mm.yyyy"
                                    selected={startDate}
                                    locale="uk"
                                    onChange={(date) => setStartDate(date)}
                                />
                            </Box>
                        </Flex>


                    </CardHeader>
                    <CardFooter>
                        <Flex gap={2} width="100%">
                            <Button isDisabled={false} width={'100%'} leftIcon={<MdOutlinePostAdd />}>
                                Зберегти
                            </Button>
                            <Button isDisabled={false} width={'100%'} leftIcon={<MdOutlinePostAdd />}>
                                Перевірити
                            </Button>
                            <Button isDisabled={false} width={'100%'} leftIcon={<MdOutlinePostAdd />}>
                                Скомпілювати
                            </Button>
                            <Input height={'100%'} borderRadius='5px' variant='filled' placeholder='Введіть idf формули' size='sm' />
                        </Flex>
                    </CardFooter>
                </Card>
            </Box>

            <div style={{ display: 'flex', gap: "1rem", alignContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '200px', fontSize: "0.7rem" }}>
                    <span>Dimension Name</span>
                </div>
                <div style={{ flex: 1 }}>
                    <MultiSelect  
                        options={[{ label: '123', value: '123' }, { label: '1234', value: '1234' }]}
                        value={'1'}
                        onChange={(el) => { console.log(el) }}
                        single
                    />
                </div>
            </div>
            <div style={{ display: 'flex', gap: "1rem", alignContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '200px', fontSize: "0.7rem" }}>
                    <span>Dimension Name</span>
                </div>
                <div style={{ flex: 1 }}>
                    <MultiSelect
                        options={[{ label: '123', value: '123' }, { label: 'Very Very Very Very Very Very Very Very Very Very Long Long LongLong TYpe Name', value: '1234' }]}
                        value={'1'}
                        onChange={(el) => { console.log(el) }}
                        single
                    />
                </div>
            </div>
            <div style={{ display: 'flex', gap: "1rem", alignContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '200px', fontSize: "0.7rem" }}>
                    <span> Very Very Very Very Very Very Very Very Very Very Long Long LongLong Dimension Name</span>
                </div>
                <div style={{ flex: 1 }}>
                    <MultiSelect
                        options={[{ label: '123', value: '123' }, { label: '1234', value: '1234' }]}
                        value={'1'}
                        onChange={(el) => { console.log(el) }}
                        single
                    />
                </div>
            </div>
            <div style={{ display: 'flex', gap: "1rem", alignContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '200px', fontSize: "0.7rem" }}>
                    <span>Dimension Name</span>
                </div>
                <div style={{ flex: 1 }}>
                    <MultiSelect
                        
                        options={[{ label: '123', value: '123' }, { label: '1234', value: '1234' }]}
                        value={'1'}
                        onChange={(el) => { console.log(el) }}
                        single
                    />
                </div>
            </div>

            <Flex flex={1} width={'100%'} justifyContent={'center'} alignItems={'center'} >
                <Editor
                    defaultLanguage="javascript"
                    defaultValue={`\n\n\n\n\n\n\n--test\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// some comment`}
                />
            </Flex>
        </Flex>
    )
}