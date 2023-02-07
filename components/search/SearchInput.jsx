import { View, Text } from 'react-native'
import React, {useState} from 'react'

import { SearchBar } from '@rneui/themed';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
    };
    console.log(search)
  return (
    <View className="items-center w-screen px-3">
      <SearchBar
      placeholder="Paste the group code..."
      onChangeText={updateSearch}
      value={search}
      lightTheme={true}
      platform="ios"
      
    />
    </View>
  )
}

export default SearchInput