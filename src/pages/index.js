import { Box, Button, Center, Container, Heading, SimpleGrid, Spacer } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import GalleryComponent from "../component/GalleryComponent"
import HeadingComponent from "../component/HeadingComponent"
import LoadingComponent from "../component/loadingComponent"
import { fetchItems, itemSelector } from "../state/slice/gallerySlice"


export default function Home() {
  const dispatch = useDispatch()
  const {loading, error, data} = useSelector(itemSelector)
  const router = useRouter()

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

    if(data.length === 0) {
      return (
        <Container centerContent maxW={'container.sm'} maxH={'100%'} bg='blue.600' color={'white'}>
        <Center>
          <h1>Data Yang di Cari Kosong</h1>
        </Center>
          <Button onClick={() => {
            router.reload(window.location.home)
          }}>Reload</Button>
        </Container>
      )
    }
    if(loading) {
      return(
        <LoadingComponent />
      )
    }
    if(error) {
      return(
        <Center>
          <Heading>Items Error Sementara</Heading>
        </Center>
      )
    }
  return (
    <div>
      <HeadingComponent />
      <SimpleGrid minChildWidth={300} columns={2}  spacing={10}>
      {data.map((item) => (
        <GalleryComponent key={item.id} IM={item.urls.regular} USER={item.user.name} LIKES={item.likes} TAG={item.color} />
      ))}

      </SimpleGrid>
    </div>
  )
}
