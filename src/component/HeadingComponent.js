import { CloseIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Center, Collapse, Container, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, Slide, SlideFade, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import axios, {Axios} from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, getItems, itemSelector } from '../state/slice/gallerySlice'
import GalleryComponent from './GalleryComponent'
import LoadingComponent from './loadingComponent'

function HeadingComponent() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const {loading, error, result} = useSelector(itemSelector)
    
    function onSubmit(e) {
        e.preventDefault()
        dispatch(getItems(query))
        if (loading) {
          return(
            <LoadingComponent />
          )
        }
        if (error) {
          return(
            <Center>
              <Heading>Items Error</Heading>
            </Center>
          )
        }

      }

  return (
    <Box>
      <Flex
        bg={'gray.500'}
        color={'white'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        align={'center'}>
        <Heading as={'h3'} size='md'>GALLERY</Heading>


        <InputGroup >
        <Spacer />
        <form onSubmit={onSubmit}>
        <Input  width='auto' 
                htmlSize={25} 
                value={query} 
                variant={'outline'} 
                placeholder='Search Images' 
                bg={'white'} 
                color={'gray.500'}
                onChange={(e) => setQuery(e.target.value)} />
        <InputRightElement>
            <Search2Icon boxSize={6} color={'gray.900'}/>
        </InputRightElement>
        </form>
        </InputGroup>
    </Flex>
    </Box>
  )
}

export default HeadingComponent


