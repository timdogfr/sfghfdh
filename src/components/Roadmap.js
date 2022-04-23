import React from 'react'
import { Box, Heading, Text, VStack, Stack, HStack, Badge } from '@chakra-ui/react'
import { SettingsIcon, CalendarIcon, TimeIcon, StarIcon, CheckCircleIcon, TriangleUpIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function RoadmapItem({ n, children, icon, ...rest }) {
    return (
        <>
            <HStack w={["95%", "90%", "85%", "65%"]} spacing={8}>
                <Box>
                    {icon}
                </Box>
                <Box w="100%" rounded="12px" borderWidth="2px" borderColor="white" p={8} bgColor="rgba(0, 0, 0, 0.5)">
                    <Stack direction={["column", "column", "column", "column"]} spacing={8}>
                        <Heading align='center' color="accent" transform="rotate(-0deg)" mx={0} {...rest}>{n}</Heading>
                        <VStack spacing={8} align="left">
                            {children}
                        </VStack>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}

function Roadmap() {
    return (
        <>
            <Box my={64} id="Roadmap">
                <VStack align="center" spacing={4}>
                    <Box>
                        <Heading align="center">Our</Heading><Heading color="accent" align="center" pb={8} size="4xl">Roadmap</Heading>
                    </Box>

                    <RoadmapItem n='Phase 0' icon={<SettingsIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2022 Q2</Badge></Text>
                        <Text>• Website Publishing </Text>
                        <Text>• Giveaway Programmes for Grow the Community</Text>
                        <Text>• Mint NFTs</Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 1" icon={<CalendarIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2022 Q3</Badge></Text>
                        <Text>• NFT Marketplace Listings</Text>
                        <Text>• Publish New Erectus on Other Blockchains </Text>
                        <Text>• Publish Our 2nd Evolution Serie on Celo Network (Celo ??????) </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 2" icon={<TimeIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2022 Q4</Badge></Text>
                        <Text>• Publish Our 3rd Evolution Serie on Celo Network and 2nd Evolution Serie on Other Blockchains </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 3" icon={<StarIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2023 Q1</Badge></Text>
                        <Text>• Publish Our 4th Evolution Serie on Celo Network </Text>
                        <Text>• Publish Our 3rd and 4th Evolution Series on Other Blockchanis </Text>
                        <Text>• Open Evolution Market which you can buy physically decorative evolution objects on our market with the nfts you hold. </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 4" icon={<CheckCircleIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"><Badge colorScheme='purple' p={2} px={4} rounded={10}>2023 Q2</Badge></Text>
                        <Text>• We continue for creating new Evolution Series and making updates to increase engagement in the market.</Text>
                    </RoadmapItem>
                </VStack>
            </Box>
        </>
    )
}

export default Roadmap
