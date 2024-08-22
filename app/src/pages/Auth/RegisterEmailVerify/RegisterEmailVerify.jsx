import { Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

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
    const { isSuccess, isLoading } = useQuery({
        queryKey: ["send-verification-mail"],
        queryFn: ()=> sendVerificationMail({email}),
        onSuccess: (data) =>{
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

    if (isLoading) {
        <Center h="100vh">
            <Spinner/>
        </Center>
    }

  return (
    <Container>
        <Center minH="100vh">
            { 
                isSuccess && (  
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
                <Button variant="outline" w="full">
                    Re-send Email
                </Button>
                </VStack>
            </Card>
        )}
        </Center>
    </Container>
  )
}

export default RegisterEmailVerify
