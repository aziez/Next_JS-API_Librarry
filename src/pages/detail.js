/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../component/loadingComponent";
import ErrorComponent from "../component/ErrorComponent";
import {itemSelector } from "../state/slice/gallerySlice";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { getItemById } from "../state/axios/AxiosServices";
import {BiArrowBack, BiChat, BiDownload, BiHappyHeartEyes, BiLike, BiShare, BiStreetView} from "react-icons/bi";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;


  const dispatch = useDispatch();
  const { loading, error, individu } = useSelector(itemSelector);

  console.log(individu.data);

  useEffect(() => {
    dispatch(getItemById(id));
  }, [dispatch, id]);

  if(loading) return <LoadingComponent />
  if(error) return <ErrorComponent />

  return (
    <Container maxW={'2xl'} centerContent>
    <Card maxW={'md'} bg={individu.color}>
      <CardHeader>
        <Flex spacing={4}>
          <Flex flex={1} gap={4} alignItems={'center'} flexWrap='wrap'>
            <Avatar name={individu.name} src={individu.avatar}  />
            <Box>
              <Heading size='sm'>{individu.name}</Heading>
            </Box>
          </Flex>
          <IconButton size={'lg'}  colorScheme='teal'  icon={<BiArrowBack /> } onClick={() => router.push('/')} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{individu.desc}</Text>
      </CardBody>
        <Image
          objectFit={'cover'}
          boxSize='500px'
          src={individu.images} />
      <CardFooter
        justify={'space-between'}
        flexWrap='wrap'
        sx={{
          '& > button' : {
            minW: '136px'
          }
        }}>
      <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      {individu.likes}
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiHappyHeartEyes />}>
      {individu.views}
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiDownload />}>
      {individu.downloads}
    </Button>
        </CardFooter>
    </Card>
    </Container>
  )
}
