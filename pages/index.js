import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Home({photos}) {

  const [query, setQuery] = useState('')

  const searchFilter = (array) => {
    return array.filter(
      (el) => el.user.name.toLowerCase().includes(query)
    )
  }

  const search = searchFilter(photos)

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }

  return (
    <>
      <Container maxW='10xl' bg='blue.600' centerContent>
        <Heading size="lg">
          <Center>GALLERY IMAGE</Center>
        </Heading>

        <Container margin={10}>
        <Input placeholder="Search User" size='lg' onChange={handleChange} />
        </Container>

        <SimpleGrid columns={2} spacing={5}>
          {search.map((photo, index = photo.id) => (
          // eslint-disable-next-line react/jsx-key
          <Box align='center'>
            <Link href={{pathname: '/detail', query: {
              id: photo.id, 
              photo: photo.urls.small,
              desc: photo.alt_description,
              likes: photo.likes,
              user: photo.user.name,
              avatar: photo.user.profile_image.large,
              bio: photo.user.bio,
              }}}>  
            <Image
              src={photo.urls.small}
              alt="Green double couch with wooden legs"
              border={1}
              margin="1"
              boxSize={80}
              borderColor="blue"
              borderRadius="lg"
              />
              <Text fontSize='3xl' color='orange' >{photo.user.name}</Text>
            </Link>
          </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getStaticProps(){
  const url = 'https://api.unsplash.com/photos/'
  const ci = process.env.CLIENT_ID

  const photos = await fetch(`${url}?client_id=${ci}`)

  const getPhotos = await photos.json()

  return {
    props: {
      photos: getPhotos
    }
  }
}
