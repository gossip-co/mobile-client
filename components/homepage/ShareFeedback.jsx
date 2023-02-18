import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import { useForm, Controller } from "react-hook-form";


const ShareFeedback = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      feedback: '',
    }
  });

  const onSubmit = (data )=>{
    return console.log(data);
  }

  return (
    <View className="h-96 px-5 items-center justify-center">
       <Text className="text-3xl text-center tracking-tighter my-5">Your every feedback is valuable.</Text>
         <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className="text-2xl bg-gray-200 w-72 py-12  px-2"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Feedback"
          />
        )}
        name="feedback"
      />
      {errors.groupName && 
      <Text className="py-0.5  text-red-500 w-64 tracking tracking-tighter text-xs">This field is required.</Text>
      }

      <View className="my-3">
        <Button 
        title="Share"
        onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}

export default ShareFeedback;