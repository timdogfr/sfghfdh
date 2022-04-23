import React from 'react'
import { Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function FAQItem({ question, children }) {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _focus={{ outline: 0 }}>
                        <Box py={6} flex='1' textAlign='left' color="white">
                            {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel py={8} color="accent" align='left'>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}


function FAQ() {
    return (
        <Box mx={[4, 4, 32, 64]} align="center" my={64} id="FAQ">
            <Box>
                <Heading align="center">The</Heading><Heading color="accent" align="center" pb={24} size="4xl">FAQ</Heading>
            </Box>
            <Accordion w="100%" allowToggle>
                <FAQItem question="When is presale mint?">
                    <Text color="accent">TBA</Text>
                </FAQItem>
                <FAQItem question="When is public mint?">
                    <Text color="accent">TBA</Text>
                </FAQItem>
                <FAQItem question="How much is mint?">
                    <Text color="accent">• Phase 0 <ArrowForwardIcon mx={4} /> 2022 Q2 <ArrowForwardIcon mx={4} /> </Text>
                    <Text color="accent">• Phase 1 <ArrowForwardIcon mx={4} /> 2022 Q3 <ArrowForwardIcon mx={4} /> </Text>
                    <Text color="accent">• Phase 2 <ArrowForwardIcon mx={4} /> 2022 Q4 <ArrowForwardIcon mx={4} /> </Text>
                    <Text color="accent">• Phase 3 <ArrowForwardIcon mx={4} /> 2023 Q1 <ArrowForwardIcon mx={4} /> </Text>
                    <Text color="accent">• Phase 4 <ArrowForwardIcon mx={4} /> 2023 Q2 <ArrowForwardIcon mx={4} /> </Text>

                </FAQItem>
            </Accordion>
        </Box >
    )
}

export default FAQ