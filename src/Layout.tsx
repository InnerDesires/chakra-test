import * as React from "react";
import { AttributePanel } from "./Attribute/AttributePanel";
import { Resizable } from 're-resizable'
import './Layout.css'
import { Grid, GridItem } from "@chakra-ui/layout";
import { FormulaViewer } from "./Formula/FormulaViewer";

export function Layout() {
    return (
        <Grid
            h='100%'
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(7, 1fr)'

        >
            <GridItem colSpan={2} style={{ borderRight: '1px solid #EEEEEE'}}>
                <AttributePanel />
            </GridItem>
            <GridItem colSpan={5}>
                <FormulaViewer/>
            </GridItem>
        </Grid>
    )
}