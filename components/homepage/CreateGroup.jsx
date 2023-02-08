import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import { useForm, Controller } from "react-hook-form";


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
      {errors.groupName && 
      <Text className="py-0.5  text-red-500 w-64 tracking tracking-tighter text-xs">group name should be more than 5 and less than 20 charactor in length.</Text>
      }

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