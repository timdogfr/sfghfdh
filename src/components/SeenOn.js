import React from 'react'
import { Box, VStack, Image, Heading, SimpleGrid, Center, Link } from '@chakra-ui/react'



function Here({ src, name, url}) {
    return (
        <>
            <Link w='100%' h='100%' p={4} pb={6} bg='transparent' rounded={16} _hover={{ bgColor: 'rgb(44,44,44, 0.5)' }} _focus={{ outline: 0 }} href={url} target="_blank" rel="noopener noreferrer">
                <Box>
                    <VStack spacing={5}>
                        <Image maxW={64} src={src} />
                        <Box align="center">
                            <Heading size='md' color="accent" weight='bold' >{name}</Heading>
                        </Box>
                    </VStack>
                </Box>
            </Link>
        </>
    )
}


function SeenOn() {
    return (
        <>
            <Box mt={32}>
                <Heading color="accent" align="center" pb={12} size="4xl">As Seen On</Heading>
            </Box>
            <Box mx={[32, 32, 16, 16, 32]} id="Team">
                <Center>
                    <SimpleGrid spacing="6vw" columns={["1", "1", "4", "4"]} rowGap={4}>
                        <Here name="tofunft.com" src={'https://pbs.twimg.com/profile_images/1478611959738408962/ftn_GhBj_400x400.jpg'} url='https://tofunft.com/collection/celo-erectus/' />
                        <Here name="cyberbox.art" src={'https://i.ibb.co/Bc1M06x/Box-logo2.png'} url='https://cyberbox.art/collections/cer' />
                        <Here name="ariswap.net" src={'https://pbs.twimg.com/profile_images/1490390423285772293/17-PYyfp_400x400.jpg'} />
                        <Here name="epor.io" src={'https://pbs.twimg.com/profile_images/1358006180413644800/6D30gWMK_400x400.png'} url='https://epor.io/browse?type=sales&network=Celo&collection=celoerectus' />
                    </SimpleGrid>
                </Center>
            </Box>
        </>
    )
}

export default SeenOn
