import React from 'react'
import { Stack, Link, IconButton } from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaTelegramPlane, FaMedium } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi'

function MenuIcon({ name, icon, to, ...rest }) {
    return (
        <>
            <Link href={to} target="_blank" rel="noopener noreferrer" >
                <IconButton
                    aria-label={name}
                    icon={icon}
                    color="accent"
                    bgColor="transparent"
                    _focus={{ outline: 0 }}
                    _hover={{ bgColor: "rgb(220, 220, 220, 0.2)" }}
                    fontSize='32px'
                    w="64px"
                    h="64px"
                    isRound
                    {...rest}
                />
            </Link>
        </>
    )
}

function NavIcons() {
    return (
        <>
            <Stack spacing={5} direction={"row"} pt={[16, 16, 0]} align="center">
                <MenuIcon name="Discord" to="https://discord.link/CeloErectus" icon={<FaDiscord />} />
                <MenuIcon name="Twitter" to="https://twitter.com/CeloErectus" icon={<FaTwitter />} />
                <MenuIcon name="Telegram" to="https://t.me/celoerectus" icon={<FaTelegramPlane />} />    
                <MenuIcon name="Medium" to="https://celoerectus.medium.com/" icon={<FaMedium />} />
                <MenuIcon name="OpenSea" to="https://opensea.io/" icon={<GiSailboat />} />
            </Stack>
        </>
    )
}

export default NavIcons
