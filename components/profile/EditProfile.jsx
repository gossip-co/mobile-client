import {
  View, 
  Text, 
  Image,  
  TextInput, 
  Button, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";


const InputStyle = {
  inputHeader: " text-lg tracking-tighter",
  input:
    " text-sm text-gray-800 tracking-tighter border-b-2 border-gray-200 pt-1 py-1",
  inputError: "text-red-600 px-1",
};

const EditProfile = ({ profile }) => {
  const [inputs, setInputs] = useState([
    { name: "name", title: "Name" },
    { name: "username", title: "Username", editable: false },
    {
      name: "bio",
      title: "Bio",
      multiline: true,
    },
    { name: "email", title: "Email", editable: false },
    { name: "twitterUsername", title: "Twitter Username" },
    { name: "instagramUsername", title: "Instagram Username" },
  ]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValue: profile/userProfile props
    defaultValues: {
      name: "Aditya", //profile.username or something like
      username: "aditya",
      bio: "Creating something out of nothing",
      email: "adityapushkar@gmail.com",
      twitterUsername: "_aditya_pushkar",
      instagramUsername: "pushkar_aditya",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1}}
    >
    <ScrollView className=" bg-white" bounces={false} showsVerticalScrollIndicator={false}>
      <View className="w-screen h-36 bg-gray-50">
      <Image
        onPress={()=>{console.log("Profile timeline pic changed option...")}}
          className="w-screen h-36 bg-gray-50 py-2 aspect-auto"
          source={{
            uri: "https://source.unsplash.com/1500x500/?portrait?3",
          }}
        />

      <View className="px-5 w-fit items-left"  >
        <Image
        style={{borderWidth: 3, borderColor: "white"}}
        onPress={()=>{console.log("Profile pic changed option...")}}
        className="w-24 rounded-full bg-gray-50 bottom-10  border-4 border-white  aspect-square "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      </View>
      </View>

      <View className="px-5 mt-16">
        <View>
          {inputs.map((input, key) => (
            <View className="my-3" key={key}>
              <Text className={InputStyle.inputHeader}>{input.title}</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    multiline={input.multiline && true}
                    // editable={false}
                  />
                  </TouchableWithoutFeedback>
                )}
                name={input.name}
              />
            </View>
          ))}

           <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <View className="my-5"></View> 
          {/* <View className="bg-blue-600 w-full mt-5 mb-12 rounded-xl shadow-inner ">
            <Text
              onPress={handleSubmit(onSubmit)}
              className="text-xl  text-center py-3 text-white "
            >
              Save
            </Text>
          </View> */}

        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
