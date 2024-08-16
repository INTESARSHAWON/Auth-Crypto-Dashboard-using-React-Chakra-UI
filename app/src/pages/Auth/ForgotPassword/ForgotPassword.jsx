import { Button, Center, Text, Stack, FormControl,FormLabel, FormErrorMessage, Input, Icon } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { Formik, Form, Field } from "formik";
import { object, string, ref } from 'yup';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";


const ForgotPassword = () => {

    const ForgotValidationSchema = object({
        email: string().email("Email is invalid").required("Email is required"),
    });


  return (
    <Center minH="100vh">
        <Card>
            <Link to="/signin">
                <Icon as={AiOutlineArrowLeft} boxSize="6"/>
            </Link>
            <Text fontWeight="medium" textStyle="h1" mt={4}>Forgot Password</Text>
            <Text textStyle="p2" color="black.60" mt="4">Enter Your Email address for which account you want to reset your password</Text>
            <Formik
                initialValues={{
                    email: "",
                }}
                    
                onSubmit={(values) => {
                        console.log (values);
                    }}
                validationSchema={ForgotValidationSchema}
                >
                {()=>(
                    <Form>
                        <Stack mt="8" spacing={6}>
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
                            <Button type="submit" w="full">
                                Reset Password
                            </Button>
                        </Stack>
                    </Form>
                    )}
                </Formik>
            </Card>
    </Center>
  )
}

export default ForgotPassword
