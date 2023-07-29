import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const WordleGame = () => {
  const wordList = ['cake', 'tree'];
  const [targetWord, setTargetWord] = useState(wordList[Math.floor(Math.random() * wordList.length)]);
  const [guessedWord, setGuessedWord] = useState('_'.repeat(targetWord.length));
  const [guess, setGuess] = useState('');
  const [triesRemaining, setTriesRemaining] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [coins, setCoins] = useState(0);
  const [coinsUpdated, setCoinsUpdated] = useState(false); // new state variable

  const handleGuess = () => {
    if (guess === targetWord) {
      setGuessedWord(targetWord);
      setGameOver(true);
      setCoins(coins + 100);
    } else {
      setTriesRemaining(triesRemaining - 1);
      if (triesRemaining - 1 === 0) {
        setGameOver(true);
      }
      // Find the indices of the correctly guessed letters
      const correctIndices = [];
      for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === guess) {
          correctIndices.push(i);
        }
      }
      // Update the guessedWord state with the correctly guessed letters
      let newGuessedWord = guessedWord.split('');
      correctIndices.forEach(index => {
        newGuessedWord[index] = guess;
      });
      setGuessedWord(newGuessedWord.join(''));
    }
    setGuess('');
  };
  

  const handleRestart = () => {
    setTargetWord(wordList[Math.floor(Math.random() * wordList.length)]);
    setGuessedWord('_'.repeat(targetWord.length));
    setGuess('');
    setTriesRemaining(5);
    setGameOver(false);
    setCoins(0);
  };

  return (
    <><Text style={styles.coinsText}>Coins: {coins}</Text><View style={styles.container}>
      <Text style={styles.title}>A simple 4 letter word game.</Text>
      <Text style={styles.title}>Guess the word:</Text>
      <View style={styles.wordContainer}>
        {guessedWord.split('').map((letter, index) => (
          <Text
            key={index}
            style={[
              styles.letter,
              targetWord[index] === letter && styles.correct
            ]}
          >
            {letter}
          </Text>
        ))}
      </View>

      {!gameOver && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={guess}
            onChangeText={setGuess}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="ascii-capable" />
          <Button title="Guess" onPress={handleGuess} disabled={!guess} />
        </View>
      )}
      <Text style={[styles.triesRemainingText, triesRemaining <= 2 && styles.triesRemaining]}>Tries remaining: {triesRemaining}</Text>
      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>{guessedWord === targetWord ? 'You win!' : 'You lose!'}</Text>
          
          <Button title="Play again" onPress={handleRestart} />
        </View>
      )}
    </View></>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  letterContainer: {
    marginHorizontal: 5,
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    width: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tries: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameOverContainer: {
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameOverButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  gameOverButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  correct: {
    color: '#28A745',
  },
  coinsText: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    },
});

export default WordleGame;