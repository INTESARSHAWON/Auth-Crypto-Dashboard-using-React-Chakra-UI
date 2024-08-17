import { Button, Center, Text, Stack, FormControl,FormLabel, FormErrorMessage, Input, Icon, Container } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { Formik, Form, Field } from "formik";
import { object, string, ref } from 'yup';


const ResetPassword = () => {

    const resetValidationSchema = object({
        password: string().min(6, "Password must be atleast 6 characters").required("Password is required"),
        confirmPassword: string().oneOf([ref("password"), null],"Passwords must match").required("Confirm your Password"),
    });


  return (
    <Container>
        <Center minH="100vh">
            <Card>
               
                <Text fontWeight="medium" textStyle="h1" mt={4}>Reset Password</Text>
                <Text textStyle="p2" color="black.60" mt="4">Enter Your New Password</Text>
                <Formik
                    initialValues={{
                    password: "",
                    confirmPassword: "",
                }}
                    
                    onSubmit={(values) => {
                            console.log (values);
                        }}
                    validationSchema={resetValidationSchema}
                >
                {()=>(
                    <Form>
                        <Stack mt="8" spacing={6}>
                            <Field name="password">
                                {({field, meta})=>(
                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "password">New Password</FormLabel>
                                        <Input 
                                        {...field}
                                        name="password" type="password" placeholder="Type your Password......."/>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="confirmPassword">
                                {({field, meta})=>(
                                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                        <FormLabel htmlFor= "confirm password">Confirm New Password</FormLabel>
                                        <Input 
                                        {...field}
                                        name="confirmPassword" type="password" placeholder="Re-Type your Password......."/>
                                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <Button type="submit" w="full">
                                Reset Password
                            </Button>
                        </Stack>
                    </Form>
                    )}
                </Formik>
            </Card>
        </Center>
    </Container>
  )
}

export default ResetPassword
