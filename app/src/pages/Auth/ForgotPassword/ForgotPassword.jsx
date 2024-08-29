import { Button, Center, Text, Stack, FormControl,FormLabel, FormErrorMessage, Input, Icon, Container, useToast } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { Formik, Form, Field } from "formik";
import { object, string } from 'yup';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { sendForgotMail } from "../../../api/query/userQuery";
import { useMutation } from "react-query";
import { useState } from "react";


const ForgotPassword = () => {

    const [ email, setEmail ] = useState(" ");
    const toast = useToast();
    const navigate = useNavigate();
    const { mutate, isSuccess, isLoading } = useMutation({
        mutationKey: ["forgot-email"],
        mutationFn: sendForgotMail,
        onSettled: (data) =>{
            console.log(data);
            navigate(`/forgot-success/${email}`);
        },
            onError: (error) => {
            toast({
                title: "Forgot Error",
                description: error.message,
                status: "error",
            })
        },
    });


    const ForgotValidationSchema = object({
        email: string().email("Email is invalid").required("Email is required"),
    });


  return (
    <Container>
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
                            setEmail((prev) => (prev = values.email));
                            mutate({email: values.email});
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
    </Container>
  )
}

export default ForgotPassword
