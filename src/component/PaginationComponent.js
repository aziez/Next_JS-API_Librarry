import { Box, Center, HStack } from '@chakra-ui/react'
import { PageGroup, Paginator } from 'chakra-paginator'
import React from 'react'
import gallerySlice from '../state/slice/gallerySlice'

function PaginationComponent() {
  
  return (

    <HStack pb={10} m={5}>
        <Center color={'black'}>
            <Box fontSize={'lg'}  border={"1px solid"} bg={'gray.500'}
                 borderRadius={2}
                 borderColor={"blue.900"}  >
                <PageGroup spacing={3} 
                 alignContent={'center'} />  
            </Box>
        </Center>
    </HStack>
  )
}

export default PaginationComponent
