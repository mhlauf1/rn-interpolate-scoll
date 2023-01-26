import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, useAnimatedScrollHandler } from 'react-native-reanimated';
import { Page } from "./components/Page";


const WORDS = ["Scroll", "view", "animation", "!"]

export default function App() {

  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  })

  return (
    <Animated.ScrollView
      pagingEnabled
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      horizontal
      style={styles.container}
    >
      {WORDS.map((title, index) => {
        return <Page key={index.toString()} title={title} index={index} translateX={translateX} />
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
