

import { Button, Center, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function ErrorComponent() {
    const router = useRouter()
  return (
    <Container centerContent>
        <Heading as={'h3'}>ERROR SEMENTARA WAKTU</Heading>
        <Button onClick={() => {
            router.push("/")
        }}>Back To Home</Button>
    </Container>
  )
}

export default ErrorComponent
