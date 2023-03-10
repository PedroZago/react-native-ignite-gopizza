import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { Button, Input } from '@components/index';

import { useAuth } from '@hooks/auth';

import BrandImg from '@assets/brand.png';

import * as S from './styles';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging, forgotPassword } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.Content>
            <S.Brand source={BrandImg} />

            <S.Title>Login</S.Title>

            <Input
              placeholder="E-mail"
              type="secondary"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
            />

            <Input
              placeholder="Senha"
              type="secondary"
              secureTextEntry
              onChangeText={setPassword}
            />

            <S.ForgotPasswordButton onPress={handleForgotPassword}>
              <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
            </S.ForgotPasswordButton>

            <Button
              title="Entrar"
              type="secondary"
              onPress={handleSignIn}
              isLoading={isLogging}
            />
          </S.Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </S.Container>
  );
};
