import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard, FlatList} from 'react-native';
import Task from './components/Tasks';

export default function App() {

  const [task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      <View style = {styles.tasksWrapper}>
        <View style = {styles.lilacrect}>
          <Text style = {styles.sectionTitle}>Today's tasks</Text>
          <View style = {styles.items}>
            {/*all the tasks are here*/}
            {
              taskItems.map((item, index)=>{
                return (
                  <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                    <Task  text= {item} />
                  </TouchableOpacity>
                )
                
              })
            }
            
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style = {styles.input} placeholder = {"Write a task"} value ={task} onChangeText = {text =>setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#D3D3FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle : {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff',
  },
  items : {
    marginTop: 10,
  },
  lilacrect: {
    backgroundColor: '#8a2be2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: -35,
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#8a2be2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    
  },
});
