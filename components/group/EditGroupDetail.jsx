import { 
  View,
  Text,
  ScrollView,
  Image, 
  Button, 
  Alert,
  TextInput, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback, 
  Keyboard,
  Platform,
}from 'react-native'
import React, {useState} from 'react'

import { useForm, Controller } from "react-hook-form";

const InputStyle = {
  inputHeader: " text-lg tracking-tighter",
  input:
    "text-sm text-gray-800 tracking-tighter border-b-2 border-gray-200 pt-1 py-1",
  inputError: "text-red-500 text-xs",
};

const EditGroupDetail = () => {
  // const userGroupData = fetch
  const [userGroupData, setUserGroupData] = useState({
    group_name: "Gossip Official",
    group_id: "1293903jsksd29032903109302",
    intro_video: "https://www.youtube.com/watch?v=EYU5C7r_xNw",
    group_subscription_amount: null,
    about_group: null

  })

  // const userHadSetTheGroupSubAmount = ()=> {return userGroupData[group_subscription_amount]===null ? false : true}
  const isGroupSubAmountChangable = () => {return userGroupData['group_subscription_amount']===null ? true : false}


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValue: userGroupData
    defaultValues: userGroupData
  });
  const onSubmit = (data) => console.log(data);
  return (
    <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1}}>
<ScrollView className=" bg-white" bounces={false} showsVerticalScrollIndicator={false}>
  <View className="w-screen h-40 bg-gray-50" >
      <Image
        onPress={()=>{console.log("Profile timeline pic changed option...")}}
          className="w-screen h-40 bg-gray-50 py-2 aspect-auto"
          source={{
            uri: "https://source.unsplash.com/1640x856/?portrait?3",
          }}
        />

      <View className="px-5 w-fit items-left"  >
        <Image
        style={{borderWidth: 4, borderColor: "white"}}
        onPress={()=>{console.log("Profile pic changed option...")}}
        className="w-20 rounded-3xl  bg-gray-50 bottom-8  border-4 border-white aspect-square"
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      </View>
      </View>
      
      <View className="px-5 mt-16">
        <View>
            <View className="my-3" >
              <Text className={InputStyle.inputHeader}>Group Name</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 20,
                  minLength: 5
                }}
                render={({ field: { onChange, onBlur, value,  } }) => (
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Group Name"
                    
                  />
                )}
                name="group_name"
              />
              {errors.group_name&&<Text className={InputStyle.inputError}>group name should be 5 characters long and less than 20 characters</Text>}
            </View>

            <View className="my-3" >
              <Text className={InputStyle.inputHeader}>Group Id</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value,  } }) => (
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    editable={false}
                    onPressIn={()=>Alert.alert("fuck off")}
                    
                  />
                )}
                name="group_id"
              />              
            </View>
            <View className="my-3" >
              <Text className={InputStyle.inputHeader}>Intro Video (YTB Link)</Text>
              <Controller
                control={control}
                rules={{
                  
                }}
                render={({ field: { onChange, onBlur, value,  } }) => (
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Uplode the intro video on Youtube abd paste the link here"
                    keyboardType='url'
                    
                  />
                )}
                name="intro_video"
              />              
            </View>

            <View className="my-3" >
              <Text className={InputStyle.inputHeader}>Subscription Amount ₹</Text>
              <Controller
                control={control}
                rules={{
                  maxLength:4,
                  minLength:3
                }}
                render={({ field: { onChange, onBlur, value,  } }) => (
                  <TextInput
                    // style={styles.input}
                    className={InputStyle.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Subscription mount can't be changed"
                    keyboardType='number-pad'
                    editable={isGroupSubAmountChangable()}
                    
                  />
                )}
                name="group_subscription_amount"
              />       
              {errors.group_subscription_amount && <Text className={InputStyle.inputError}>Subscription amount should me min of ₹100 and max of ₹9999</Text>}       
            </View>

            <View className="my-3" >
              <Text className={InputStyle.inputHeader}>About</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value,  } }) => (
                  <ScrollView className="bg-gray-50 px-1 pb-10">
                  <TextInput
                    // style={styles.input}
                    className="h-44 rounded-xl"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Describe what the Group is all about" 
                    multiline={true}
                    
                  />
                  </ScrollView>
                )}
                name="about_group"
              />              
            </View>
            
            
           {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <View className="my-5"></View>  */}
          <View className="items-center">
          <View className="bg-blue-500 w-28 mt-5 mb-12 rounded-full shadow-inner " >
            <Text
              onPress={handleSubmit(onSubmit)}
              className="text-lg  text-center py-1.5 text-white "
            >
              Save
            </Text>
          </View> 

          </View>
           
        </View>
      </View>

    </ScrollView>
    </KeyboardAvoidingView>

    
  )
}

export default EditGroupDetail