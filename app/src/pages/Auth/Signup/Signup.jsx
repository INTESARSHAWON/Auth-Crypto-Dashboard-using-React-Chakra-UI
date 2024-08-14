import { Card, Center, Container, FormControl, Stack, Text, FormLabel, Input, Flex, Checkbox, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <Container>
        <Center minH="100vh">
            <Card
                p="6"
                borderRadius="1rem"
                w="456px">
                <Text textStyle="h1">Welcome to Crypto App</Text>
                <Text textStyle="p2" color="black.60" mt="4">Create a free account by filling data below</Text>
                <Stack mt="10" spacing={6}>
                    <Flex gap="4">
                        <FormControl>
                            <FormLabel htmlFor= "name">Name</FormLabel>
                            <Input name="name" placeholder="Enter your Name......."/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor= "surname">Surname</FormLabel>
                            <Input name="surname" placeholder="Enter your Surname......."/>
                        </FormControl>
                    </Flex>
                    <FormControl>
                            <FormLabel htmlFor= "email">Email</FormLabel>
                            <Input name="email" type="email" placeholder="Enter your Email......."/>
                    </FormControl>
                    <FormControl>
                            <FormLabel htmlFor= "password">Password</FormLabel>
                            <Input name="password" type="password" placeholder="Type your Password......."/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor= "confirm password">Confirm Password</FormLabel>
                        <Input name="confirm password" type="password" placeholder="Re-Type your Password......."/>
                    </FormControl>
                    <Checkbox>
                        <Text textStyle="p3">    
                            I agree with {" "} <Text as="span" color="p.purple" >Terms & Conditions</Text>
                        </Text>
                    </Checkbox>
                    <Button>
                        Create Account
                    </Button>
                    <Text textStyle="p3" color="black.60" textAlign="center">
                        Already have an account? {" "}
                        <Link to="/signin"><Text as="span" color="p.purple">Log in</Text></Link> 
                    </Text>
                </Stack>
            </Card>
        </Center>
    </Container>
  )
}

export default Signup
