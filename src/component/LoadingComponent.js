import { Center, Container, Spinner } from '@chakra-ui/react'
import React from 'react'

function LoadingComponent() {
  return (

      <Center bg="tomato">
        <Spinner size={"xl"} />
        <h1 className="text-center">Loading Data...</h1>
      </Center>

  );
}

export default LoadingComponent
