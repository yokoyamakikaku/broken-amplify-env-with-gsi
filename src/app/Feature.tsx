"use client"

import { FC, PropsWithChildren, ReactNode } from "react"
import { Flex, Heading, useTheme } from "@aws-amplify/ui-react"
import { Breakpoint } from "@aws-amplify/ui-react/dist/types/primitives/types/responsive"

interface FeatureProps extends PropsWithChildren {
  title: string
  actions?: ReactNode
  maxWidth?: Breakpoint
}

const Feature:FC<FeatureProps> = ({title, actions, children, maxWidth }) => {
  const theme = useTheme()

  return (
    <Flex
      direction="column"
      maxWidth={maxWidth ? theme.breakpoints.values[maxWidth] : undefined}>
      <Flex alignItems="center">
        <Heading level={1} grow={1}>{title}</Heading>
        {actions}
      </Flex>
      {children}
    </Flex>
  )
}

export default Feature
