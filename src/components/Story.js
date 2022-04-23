import React from 'react'
import { Box, Stack, Image, VStack, Heading, Text, Spacer } from '@chakra-ui/react'

function Story() {
    return (
        <>
            <Box mx={[4, 4, 16, 32]} my={64} id="Story">
                <Box>
                    <Heading align="center">The</Heading><Heading color="accent" align="center" pb={8} size="4xl">Story</Heading>
                </Box>
                <Stack
                    direction={["column", "column", "column", "column", "row"]}
                    spacing={12}
                    align="center"
                    justify='space-between'
                >
                    <VStack spacing={12} w="100%">
                        <Text>
                            We evolve from 1 million years ago to the present. We are very happy to present this special 1111 NFT Collection to the Celo family. Let’s evolve the Celo Network
                        </Text>
                        <Text>
                            Evolution is the change in the distribution of genes and traits in a population over generations under selection pressure. You will be able to see these changes with us within the Celo Blockchain.
                        </Text>
                        <Text>
                            We started the series with Homo Erectus. Ohh sorry CELO ERECTUS :) 1111 special Celo Erectus will be with you soon. We will evolve together with you with the continuation of the series.
                        </Text>
                        <Text>
                            We think we will be a new breath to the Celo NFT WORLD.
                        </Text>
                    </VStack>
                    <Spacer />
                    <Image src="https://i.ibb.co/QrR3k6K/934.pngg" w={["70%", "60%", "45%", "45%", "25%"]} rounded="16px" mx={16} />
                </Stack>
            </Box>
        </>
    )
}

export default Story
