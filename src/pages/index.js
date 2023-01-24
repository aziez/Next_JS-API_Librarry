import { Button, Center, Container, SimpleGrid, Spacer } from "@chakra-ui/react"
import { Next, PageGroup, Paginator, Previous, usePaginator } from "chakra-paginator"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiArrowBack, BiArrowFromRight } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import ErrorComponent from "../component/ErrorComponent"
import GalleryComponent from "../component/GalleryComponent"
import HeadingComponent from "../component/HeadingComponent"
import LoadingComponent from "../component/loadingComponent"
import PaginationComponent from "../component/PaginationComponent"
import { fetchItems } from "../state/axios/AxiosServices"
import {itemSelector } from "../state/slice/gallerySlice"




export default function Home() {
  const dispatch = useDispatch()
  const { loading, error, data } = useSelector(itemSelector)
  const pageNum = data.length
  const {currentPage, setCurrentPage} = usePaginator({initialState: {currentPage: 1}})
  const router = useRouter()

  useEffect(() => {
    dispatch(fetchItems(currentPage))
  }, [dispatch, currentPage])

  console.log(currentPage);

  if (data.length === 0) {
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
  if (loading) return <LoadingComponent />
  if (error) return <ErrorComponent />
  return (
    <div>
      <HeadingComponent />
      <Paginator 
        pagesQuantity={pageNum}
        currentPage={currentPage}
        onPageChange={setCurrentPage}>
      <SimpleGrid minChildWidth={300} columns={2} spacing={10}>
        {data.map((item) => (
          <Link key={item.id} href={{ pathname: '/detail', query: { id: item.id } }}>
            <GalleryComponent key={item.id} IM={item.urls.regular} USER={item.user.name} LIKES={item.likes} TAG={item.color} />
          </Link>
        ))}

      </SimpleGrid>
      <Center>
      <PaginationComponent /> 
      </Center>
      </Paginator>
    </div>
  )
}
