import React from 'react'
import { Image, Box, VStack, Text } from '@chakra-ui/react'
import NavIcons from './NavIcons'

function Footer() {
    return (
        <Box pb={32}>
            <VStack
                spacing={12}
                align="center"
            >
                <NavIcons />

                <Text>
                    © 2022 TTC. All right reserved.
                </Text>
            </VStack>
        </Box>
    )
}

export default Footer
