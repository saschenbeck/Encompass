import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder='Course Goal'
          style={styles.inputContainer.input}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
              color='green'
            />
          </View>
          <View style={styles.buttonContainer.button}>
            <Button
              title='Cancel'
              onPress={props.onCancel}
              color='red'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
    input: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      borderRadius: 6,
      backgroundColor: '#e4d0ff',
      color: '#120438',
      width: '100%',
      padding: 16,
    },
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    button: {
      width: '30%',
      marginHorizontal: 8,
    },
  },
});
