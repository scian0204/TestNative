import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput } from 'react-native';

function App(): JSX.Element {
  const [answerWord, setAnswerWord] = useState("")
  const [word, setWord] = useState("")
  const [score, setScore] = useState(-1)
  const textRef = useRef<TextInput>(null);

  useEffect(()=>{
    if (answerWord.toUpperCase() == word.toUpperCase()) {
      setScore((score)=>score+1)
      axios.get("https://random-word-api.herokuapp.com/word")
      .then((res) => {
        let word = res.data[0];
        textRef.current?.clear()
        setWord(word);
      })
    }
  }, [answerWord])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{fontSize: 50}}>score : {score}</Text>
      <Text style={{fontSize: 30}}>word : {word}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          height: 50,
          margin: 10,
          paddingHorizontal: 100
        }}
        value={answerWord}
        onChangeText={setAnswerWord}
        ref={textRef}
      />
    </View>
  );
}
export default App;
