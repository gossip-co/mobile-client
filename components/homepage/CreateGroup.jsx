import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import { useForm, Controller } from "react-hook-form";

const GROUP_NAME_MIN_CHAR = 5
const GROUP_NAME_MAX_CHAR = 20

const ErrorView = () => {
  return (
    <View>
      <Text className="py-0.5  text-gray-500 w-64 tracking tracking-tighter text-xs">Group name should be more than 5 & less than 20 charactor in length.</Text>
      <Text className="py-0.5  text-red-500 text-center">This is required.</Text>
    </View>
  )
}

const CreateGroup = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      groupName: '',
    }
  });

  const onSubmit = (data )=>{
    return console.log(data);
  }

  return (
    <View className="h-96 items-center justify-center">
       
         <Controller
        control={control}
        rules={{
         required: true,
         maxLength: 20,
         minLength: 5
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className="text-2xl bg-gray-200 w-72 py-12  px-2"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Group Name"
          />
        )}
        name="groupName"
      />
      {errors.groupName && <ErrorView/>}

      <View className="my-3">
        <Button 
        title="Create"
        onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}

export default CreateGroup