"use client"

import { FC, PropsWithChildren } from "react"
import { View, Flex, useTheme } from "@aws-amplify/ui-react"

const Container:FC<PropsWithChildren> = ({ children }) => {
  const { tokens, breakpoints } = useTheme()
  return (
    <View
      maxWidth={breakpoints.values.large}
      padding={tokens.space.large}>
      <Flex direction="column" gap={tokens.space.large}>
        {children}
      </Flex>
    </View>
  )
}

export default Container
