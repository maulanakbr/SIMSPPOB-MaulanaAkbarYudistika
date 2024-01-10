import * as React from 'react';
import {View} from 'react-native';

import {Text} from 'react-native-paper';

import style from './style';

type HeadlineTopicProps = {
  title: string;
};

export default function HeadlineTopic({title}: HeadlineTopicProps) {
  return (
    <View style={style.headlineContainer}>
      <Text variant="headlineLarge" style={style.headlineText}>
        {title}
      </Text>
    </View>
  );
}
