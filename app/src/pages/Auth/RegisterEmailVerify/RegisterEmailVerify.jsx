import { Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useEffect } from "react";

const RegisterEmailVerify = () => {
    const toast = useToast();
    const location = useLocation();
    const email = location.state?.email ?? "";
    console.log(location);
    

    if (email == "") {
        return <Center h="100vh">
            invalid email
        </Center>
    }
    const { mutate, isSuccess, isLoading } = useMutation({
        mutationKey: ["send-verification-mail"],
        mutationFn: sendVerificationMail,
        onSettled: (data) =>{
            console.log(data);
        },
        onError: (error) => {
            toast({
                title: "SignUp Error",
                description: error.message,
                status: "error",

            })
        },
        enabled: !!email,
    });

    useEffect(()=>{
        mutate({email});
    }, [email]);

  return (
    <Container>
        <Center minH="100vh">
            {/* {isSuccess && (   */}
            <Card
            p={{
                base: "4",
                md: "10",
            }}
            showCard={true}
            >
                <VStack spacing={6}>
                <Icon as={MdEmail} boxSize="48px" color="p.purple"/>
                <Text textStyle="h4" color="p.black" fontWeight="medium">
                    Email Verifiction 
                </Text>
                <Text textStyle="p2" color="black.60" textAlign="center">
                    We have sent you an Email Verifiction to <b> {email} </b>. If you didn't receive it, click the button below
                </Text>
                <Button 
                    variant="outline"
                    w="full"
                    onClick={ () => {
                        mutate({email});
                    }}
                    isLoading={isLoading}>
                    Re-send Email
                </Button>
                </VStack>
            </Card>
        {/* )} */}
        </Center>
    </Container>
  )
}

export default RegisterEmailVerify