import React from 'react'
import {
    Image,
    Text,
    View,
} from 'react-native'

import SkiImage from '../assets/ski.png'

export default function CategoryListItem(props){
    return <View>
        <Text>
            CategoryListItem
        </Text>
        <Image source ={SkiImage}/>
        </View>
} 