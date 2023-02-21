import { View, Text, SafeAreaView, Button, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";

import AuthScreenLayouts from '../components/Layouts/AuthScreenLayouts'

const FormStyle = {
  header: "text-lg font-medium tracking-tighter pt-2 pb-1",
  input: "bg-gray-100 rounded-lg text-gray-800 tracking-tighter  px-2  py-4",
  error: "text-red-600 px-1",
  TextInput: "bg-green-300 py-2 px-2 w-screen"
}
const LoginScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          username: '',
          password: ''
        }
    });
    const onSubmit = data => console.log(data);
  return (
    <SafeAreaView className="bg-white " style={{flex:1}}>
      <AuthScreenLayouts>
      <View>
      <Text className={FormStyle.header}>Username</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={FormStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text className={FormStyle.error}>This is required.</Text>}

      <Text className={FormStyle.header}>Password</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className={FormStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            
          />
        )}
        name="password"
      />
      {errors.password && <Text className={FormStyle.error}>This is required.</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      <Pressable
       className="items-center mt-9 bg-blue-500 py-2 rounded-xl "
       onPress={handleSubmit(onSubmit)}
       >
        <Text className="text-white text-lg">Log In</Text>
      </Pressable>

    </View>

      </AuthScreenLayouts>
    </SafeAreaView>
  )
}

export default LoginScreen