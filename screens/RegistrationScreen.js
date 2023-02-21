import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthScreenLayouts from "../components/Layouts/AuthScreenLayouts";

const FormStyle = {
  header: "text-lg font-medium tracking-tighter pt-2 pb-1",
  input: " bg-gray-100 rounded-lg text-gray-800 tracking-tighter  px-2  py-4",
  error: "text-red-600 px-1",
  TextInput: "bg-green-300 py-2 px-2 w-screen",
};

const isEmailValid = (email) => {
  // const email = this.state.email
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(String(email).toLowerCase())
}


const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log(data); //Username should be in smaller case
  return (
    <SafeAreaView className="bg-white " style={{ flex: 1 }}>
      <ScrollView bounces={false}>
        <AuthScreenLayouts>
          <Text className={FormStyle.header}>Email</Text>
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
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text className={FormStyle.error}>This is required.</Text>
          )}

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
                maxLength={20}
              />
            )}
            name="username"
          />
          {errors.username && (
            <Text className={FormStyle.error}>This is required.</Text>
          )}

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
          {errors.password && (
            <Text className={FormStyle.error}>This is required.</Text>
          )}

          {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
          <Pressable
            className="items-center mt-9 bg-blue-500 py-2 rounded-xl "
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-lg">Register</Text>
          </Pressable>
        </AuthScreenLayouts>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
