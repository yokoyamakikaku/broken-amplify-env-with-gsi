"use client"

import { View, Heading, useTheme } from "@aws-amplify/ui-react";

const AuthenticatorHeader = () => {
  const { tokens } = useTheme()
  return (
    <View textAlign="center" padding={tokens.space.medium}>
      <Heading>テストアプリケーション</Heading>
    </View>
  )
}

export default AuthenticatorHeader
