import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { PasswordField } from '../components/PasswordField.tsx'
  
  export const Login = () => (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xl', md: 'xl' })}>
              Inicia Sesión
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">No tienes cuenta?</Text>
              <Button variant="link" colorScheme="green">
                Registrate
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Correo</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked colorScheme='green'>Recuerdame</Checkbox>
              <Button variant="link" colorScheme="green" size="sm">
                Olvidó su contraseña?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme='green'>Ingresar</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
  