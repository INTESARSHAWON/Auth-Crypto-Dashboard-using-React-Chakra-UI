import { Center, Container, FormControl, Stack, Text, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage, HStack, Box, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Formik, Form, Field } from "formik";
import { object, string, ref } from 'yup';
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";

const SigninValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "Password must be atleast 6 characters").required("Password is required"),
});


const Signin = () => {
    const toast = useToast();
    const { mutate, isLoading, error, isError } = useMutation({
        mutationKey: ["signin"],
        mutationFn: signinUser,
        onSuccess: (data) =>{},
        onError: (data) => {
            toast({
                title: "Signin Error",
                description: error.message,
                status: "error",

            })
        }
    })

    // if (isError) {
    //     return <Box>
    //         {error.message}
    //     </Box>
    // }



  return (
    <Container bg="white">
        <Center minH="100vh">
            <Card>
                <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
                <Text textStyle="p2" color="black.60" mt="4">Enter Your credentials to access the account</Text>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    
                    onSubmit={(values) => {
                            console.log (values);
                            mutate(values);
                        }}
                    validationSchema={SigninValidationSchema}
                    >
                    {()=>(
                    <Form>
                        <Stack mt="10" spacing={6}>
                            <Field name="email">
                                    {({field, meta})=>(
                                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "email">Email</FormLabel>
                                        <Input 
                                        {...field}
                                        name="email" type="email" placeholder="Enter your Email......."/>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
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
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                </FormControl>
                                    )}
                            </Field>
                            <HStack justify="space-between">
                              <Checkbox>
                                  <Text textStyle="p3">    
                                      Remember Me
                                  </Text>
                              </Checkbox>
                              <Link to="/forgot-password">
                                  <Text textStyle="p3" as="span" color="p.purple">
                                      Forgot Password?
                                  </Text>
                              </Link>
                            </HStack>
                            <Box>
                              <Button isLoading={isLoading} type="submit" w="full">
                                  Login
                              </Button>
                              <Link to="/signup">
                                  <Button w="full" mt="3" variant="outline">
                                      Create New Account
                                  </Button>
                              </Link>
                            </Box>
                        </Stack>
                    </Form>
                    )}
                </Formik>
            </Card>
        </Center>
    </Container>
  )
}

export default Signin
