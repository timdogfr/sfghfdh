import React from 'react'
import { Box, VStack, Image, Heading, SimpleGrid, Text, Center } from '@chakra-ui/react'


import a from '../images/team/1.png'
import b from '../images/team/2.png'



function TeamMember({ src, name, role }) {
    return (
        <>
            <Box>
                <VStack spacing={8}>
                    <Image rounded="20%" src={src} />
                    <Box align="center">
                        <Text textTransform="uppercase" color="accent">{name}</Text>
                        <Text textTransform="capitalize">{role}</Text>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

function Team() {
    return (
        <Box pb={32}>
            <Box>
                <Heading align="center">Our</Heading><Heading color="accent" align="center" pb={12} size="2xl">Team</Heading>
            </Box>
            <Box mx={[32, 32, 16, 16, 32]} id="Team">
                <Center>
                    <SimpleGrid spacing="6vw" columns={["1", "2"]} rowGap={8} >
                        <TeamMember name="Isim" role="CEO" src={a} />
                        <TeamMember name="Isim1" role="CEO" src={b} />                   
                    </SimpleGrid>
                </Center>
            </Box>

        </Box>
    )
}

export default Team
