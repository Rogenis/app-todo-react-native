import React from 'react'
import { useState } from "react";
import { 
  Alert,
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View 
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Tasks } from "../../components/tasks";
import { Divider } from "../../components/Divider";

import { styles } from "./styles";
import { Counter } from '../../components/Counter';
import { ListEmpty } from '../../components/ListEmpty';

type TaskArgs = {
  name: string;
  isComplete: boolean;
}

export function Home() {
  const [, setIschecked] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskArgs[]>([]);
  const [tasksName, setTasksName] = useState('');
  const [createdTasks, setCreatedTasks] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  
  function handleTasksAdd() {
    const taskAlreadyExists = tasks.find((task) => {
      task.name
      if(task.name === tasksName) {
        return true
      }
    });

    if (taskAlreadyExists) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    const newTask = {
      name: tasksName,
      isComplete: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setTasksName('');
    setIschecked(false)
    setCreatedTasks(createdTasks + 1)
  }

  function handleTasksRemove(name: string) {
    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(tasks => tasks.name !== name) )  
          setCreatedTasks(createdTasks - 1)}
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskCompleted(name: string) {
    const updatedTasks = tasks.map((task) => {
      if(task.name === name) {
        task.isComplete = !task.isComplete
        if (task.isComplete === true) {
          setCompletedTasks(completedTasks+1)
        } else if(task.isComplete === false) {
          setCompletedTasks(completedTasks-1)
        }
      } return task
    })
    setTasks(updatedTasks)
  }

return (
  <>
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')} />
        </View>
      </View>
    <View style={styles.body}>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#6B6B6B"
        onChangeText={setTasksName}
        value={tasksName}
      />
      <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
        <Text style={styles.buttonText}>
          <Icon
            name='plus-circle'
            color='#F2F2F2'
            size={16} />
        </Text>
      </TouchableOpacity>
    </View>
      <Counter createdTasks={createdTasks} completedTasks={completedTasks}/>
      <Divider />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Tasks
            key={item.name}
            isCompleted={item.isComplete}
            setIsChecked={() => handleTaskCompleted(item.name)}
            name={item.name}
            onRemove={() => handleTasksRemove(item.name)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty />
        )} />
    </View>
    </>
  )
}