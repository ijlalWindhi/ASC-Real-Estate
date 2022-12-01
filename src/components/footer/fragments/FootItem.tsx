import React from 'react'
import {Text} from '@chakra-ui/react'
import {Link} from 'react-scroll'

type FootType = {
    title: string,
    path: string
}

export default function FootItem({title, path}: FootType) {
  return (
    <Link to={path} smooth={true} duration={500}>
        <Text fontSize={"md"} fontWeight={"light"} color={"white"}>{title}</Text>
    </Link>
  )
}
