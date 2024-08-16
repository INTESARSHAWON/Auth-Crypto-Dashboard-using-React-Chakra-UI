import { Button, Center, Icon, Text, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Center minH="100vh">
        <Card>
            <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple"/>
            <Text textStyle="h4" color="p.black" fontWeight="medium">
                Email Verifiction 
            </Text>
            <Text textStyle="p2" color="black.60" textAlign="center">
                We have sent you an Email Verifiction to <b>Jenny.Won@gmail.com</b>. If you didn't receie it, click the button below
            </Text>
            <Button variant="outline" w="full">
                Re-send Email
            </Button>
            </VStack>
        </Card>
    </Center>
  )
}

export default RegisterEmailVerify
