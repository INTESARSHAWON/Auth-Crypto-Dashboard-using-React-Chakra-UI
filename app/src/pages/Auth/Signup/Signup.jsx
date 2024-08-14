import { Card, Center, Container, FormControl, Stack, Text, FormLabel, Input, Flex, Checkbox, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Formik, Form, Field } from "formik";

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
                <Formik
                    initialValues={{
                        name: "",
                        surname: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    
                    onSubmit={(values) => {
                            console.log (values);
                        }}
                    >
                    {()=>(
                    <Form>
                        <Stack mt="10" spacing={6}>
                            <Flex gap="4">
                                <Field name="name">
                                    {({field, meta})=>(
                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "name">Name</FormLabel>
                                        <Input 
                                        {...field} 
                                        name="name" placeholder="Enter your Name......."/>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field name="surname">
                                    {({field, meta})=>(    
                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "surname">Surname</FormLabel>
                                        <Input 
                                        {...field}
                                        name="surname" placeholder="Enter your Surname......."/>
                                    </FormControl>
                                    )}
                                </Field>    
                            </Flex>
                            <Field name="email">
                                    {({field, meta})=>(
                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "email">Email</FormLabel>
                                        <Input 
                                        {...field}
                                        name="email" type="email" placeholder="Enter your Email......."/>
                                </FormControl>
                                    )}
                            </Field>
                            <Field name="password">
                                    {({field, meta})=>(
                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "password">Password</FormLabel>
                                        <Input 
                                        {...field}
                                        name="password" type="password" placeholder="Type your Password......."/>
                                </FormControl>
                                    )}
                            </Field>
                            <Field name="confirmPassword">
                                    {({field, meta})=>(
                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                    <FormLabel htmlFor= "confirm password">Confirm Password</FormLabel>
                                    <Input 
                                    {...field}
                                    name="confirmPassword" type="password" placeholder="Re-Type your Password......."/>
                                </FormControl>
                                    )}
                            </Field>
                            <Checkbox>
                                <Text textStyle="p3">    
                                    I agree with {" "} <Text as="span" color="p.purple" >Terms & Conditions</Text>
                                </Text>
                            </Checkbox>
                            <Button type="submit">
                                Create Account
                            </Button>
                            <Text textStyle="p3" color="black.60" textAlign="center">
                                Already have an account? {" "}
                                <Link to="/signin"><Text as="span" color="p.purple">Log in</Text></Link> 
                            </Text>
                        </Stack>
                    </Form>
                    )}
                </Formik>
            </Card>
        </Center>
    </Container>
  )
}

export default Signup
