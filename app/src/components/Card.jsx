import { Card as ChakraCard} from '@chakra-ui/react'
import React from 'react'

const Card = ({children}) => {
  return (
    <ChakraCard 
        bg={{
            base: "transparent",
            md: "white",
            }}
        p={{
            base: "0",
            md: "6",
        }}
        borderRadius= {{
            base: "none",
            md: "1rem",
        }}
        boxShadow={{
            base: "none",
            md: "lg",
        }}
        w="456px">

            {children}
    </ChakraCard>
  )
}

export default Card
