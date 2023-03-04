import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, TextInput} from 'react-native';
import {Conversation as ConversationIcon, Picture as PictureIcon, Translate} from './assets';
import { Conversation, Translation, Picture} from './src/components';

interface ContentProps {
  selectedIndex: number;
}

const Content: React.FC<ContentProps> = ({ selectedIndex }) => {
  switch (selectedIndex) {
    case 0: 
      return <Conversation />
    case 1:
      return <Translation />
      case 2:
    return <Picture />
    default: return <></>;
  }
}

const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const changeSelection = (selection: number) => () => setSelectedIndex(selection);
  return (
    <View style={styles.container}>
      <Content {...{selectedIndex}} />
      <View style={styles.tabBar}>
        <Pressable onPress={changeSelection(0)}>
          <Image style={styles.tabIcon} source={ConversationIcon} />
        </Pressable>
        <Pressable onPress={changeSelection(1)}>
          <Image style={styles.tabIcon} source={Translate} />
        </Pressable>
        <Pressable onPress={changeSelection(2)}>
          <Image style={styles.tabIcon} source={PictureIcon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#82AAE3',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      height: -6,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default App;