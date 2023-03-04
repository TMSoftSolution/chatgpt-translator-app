import { View, Text, TextInput, Button, ActivityIndicator, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import styles from './styles';
import { getPicture } from '../../services/api';

export const Picture: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const generatePicture = useCallback(async () => {
    setLoading(true);
    const result = await getPicture(text);
    setUrl(result);
    setLoading(false);
  }, [text]);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Describe what image do you want?"
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholderTextColor={'#1116'}
      />
      
      {loading ? (
        <ActivityIndicator size={'large'} color={'#2094FA'} />
      ) : (
        <Button title="Generate Picture" onPress={generatePicture} />
      )}
      {url.length != 0 && <Image source={{uri: url}} style={styles.picture}/>}
    </View>
  );
};