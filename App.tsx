import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import Char from './components/Char';

interface wordDataIntf {
  index: number
  char: string
}

const answerWord = "APPLE";

function App(): JSX.Element {
  const [wordData, setWordData] = useState<wordDataIntf[]>([])
  const [msg, setMsg] = useState("")
  const reset = () => {
    const wordObjs : wordDataIntf[] = []
    for (let i = 0; i < 35; i++) {
      const obj : wordDataIntf = {
        index: i,
        char: " "
      }
      wordObjs.push(obj)
    }
    setWordData(wordObjs)
  }
  useEffect(reset, [])

  const [word, setWord] = useState("");
  const [line, setLine] = useState(0);

  const wordHandler = (inputWord: string) => {
    if (inputWord.length < 6) {
      setWord(inputWord.toUpperCase())
    }
    let upperWord = inputWord.toUpperCase();
    for (let i = 0; i < 5; i++) {
      wordData[line*5+(i)].char = upperWord.length < i ? " " : upperWord[i];
    }
  }

  const nextHandler = () => {
    if (word.length > 4) {
      console.log(line);
      
      if (word == answerWord) {
        setMsg("game clear");
      } else if (line > 5) {
        setMsg("game over")
      }
      setWord("")
      setLine(line=> line+1)
    }
  }

  const resetHandler = () => {
    reset()
    setLine(0)
    setWord("")
    setMsg("")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        style={{
          marginTop: 50
        }}
        data={wordData}
        renderItem={({item}) => <Char char={item.char} type={(line)*5<item.index+1?0:!answerWord.includes(item.char) ? 0 : item.char == answerWord[item.index%5] ? 2 : 1} />}
        keyExtractor={(item) => item.index.toString()}
        numColumns={5}
      />

      <Text>{msg}</Text>

      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Button title="reset" onPress={resetHandler} />
        {msg.length < 1 &&
        <TextInput
        onChangeText={wordHandler}
        style={{
          borderWidth: 1,
          height: 50,
          margin: 10,
          width: 100,
          textAlign: "center",
          fontSize: 20,
            display: "flex"
          }}
          value={word}
          />
        }
        <Button title='->' onPress={nextHandler} />
      </View>
    </View>
  );
}
export default App;
