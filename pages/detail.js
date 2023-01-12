import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Details(detail){
    const router = useRouter()
    const query = router.query
    const id = query.id
    const photos = query.photo
    const desc = query.desc
    const likes = query.likes
    const user = query.user
    const avatar = query.avatar
    const bio = query.bio
        
    console.log(query)
    
    return(
        <div>
            <Card maxW='xl' padding={2} backgroundImage={photos} align='center'>
                <CardHeader>
                <Flex spacing='4'></Flex>
                <Flex flex='1' gap='4' alignContent='center' alignItems='center' flexWrap='wrap'>
                    <Box align='center' alignItems='center' background='red' blur={6} filter='auto' padding={1}>
                    <Avatar  name={user} src={avatar} width={24} height={24}  />
                        <Heading textAlign='center' size='md' padding={5} color='white'>{user}</Heading>
                        <Text background='white' borderRadius={10} padding='2' textAlign='center'>{bio}</Text>
                    </Box>
                </Flex>
                </CardHeader>
                <CardBody align='center' backgroundColor='gray-100'>
                    <Text fontSize='4xl' color='black'>{desc}</Text>
                </CardBody>
                <CardFooter justify='space-between' flexWrap='wrap' sx={{'& > buton': {
                    minW: '136px'
                }}}>
                    <Button flex={1} colorScheme='whiteAlpha' color='black'>{likes} Likes</Button>
                </CardFooter>  
                    <Button align='center' colorScheme='teal' variant='solid'  onClick={() => router.back()}>BACK</Button>
    
            </Card>
        </div>

)
}