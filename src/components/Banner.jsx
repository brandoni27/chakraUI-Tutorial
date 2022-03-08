import { Box, Image, Button } from "@chakra-ui/react"
import brandLogo from "./assets/brand-logo.svg";

function Banner() {
    return <>
        <header>
            <Box d="flex" align-items="center" justifyContent="space-between" ml={6} mr={6}>
                <Box> <Image boxSize="90px" src="{brandLogo}" alt="brand" /> 
                
                    <Button pr={3} colorSchem="gray.600" fontSize="sm" variant="link">
                        Log in
                    </Button>
                    <Button colorSchem="gray.600" fontSize="sm" variant="link">
                        Sign out
                    </Button>
                </Box>
            </Box>
        </header>
    </>;
}

export default Banner;