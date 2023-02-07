import { View, Text, TextInput, Button, ScrollView } from "react-native";
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

import { Tile } from "@rneui/themed";

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
    <ScrollView className=" bg-white" bounces={false}>
      <View className="w-screen h-36 bg-gray-50">
        <Tile
          imageSrc={{
            uri: "https://source.unsplash.com/1500x500/?portrait?3",
          }}
          height={185}
          icon={{
            name: "camera-outline",
            type: "ionicon",
            size: 50,
            color: "#f9fafb",
          }}
          onPress={() => {
            console.log("image button pressed");
          }}
        />
      </View>
      <View className="w-24 h-24 px-5 bottom-8 ">
        <Tile
          imageSrc={{
            uri: "https://source.unsplash.com/150x150/?portrait?3",
          }}
          icon={{
            name: "camera-outline",
            type: "ionicon",
            size: 30,
            color: "#f9fafb",
          }}
          width={90}
          height={130}
          imageContainerStyle={{
            borderRadius: 50,
            borderWidth: 4,
            borderColor: "white",
          }}
          onPress={() => {
            console.log("image button pressed");
          }}
        />
      </View>

      <View className="px-5">
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
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    multiline={input.multiline && true}
                    // editable={false}
                  />
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
  );
};

export default EditProfile;
