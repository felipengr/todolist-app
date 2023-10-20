import React, { useRef, useState } from 'react'
import { View, Text, FlatList, Alert, TextInput } from 'react-native'
import { Empty } from '../components/Empty'
import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { TaskDTO } from '../dtos/TaskDTO'
import { uuid } from '../utils/uuid'
import { styles } from './styles'

export function HomeScreen() {
    const [tasks, setTasks] =useState<TaskDTO[]>([])
    const [newTask, setNewTask] = useState('')
    const newTaskInputRef = useRef<TextInput>(null)

    function handleTaskAdd() {
        if (newTask !== '' && newTask.length >= 5) {
            setTasks((tasks) => [...tasks,
                {id: uuid(), isCompleted: false, title: newTask.trim()}
            ])
        }
        setNewTask('')

        newTaskInputRef.current?.blur()
    }

    function handleTaskDone(id: string) {
        setTasks((task) =>
            task.map((task) => {
                task.id === id ? (task.isCompleted = !task.isCompleted) : null
                return task
            })
        )
    }

    function handleTaskDeleted(id: string) {
        Alert.alert('Exluir tarefa', 'Deseja exluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () =>
                    setTasks((tasks) => tasks.filter((task) => task.id !== id)),
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ])
    }

    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length

    return (
        <>
            <View style={styles.container}>
                <Header
                    task={newTask}
                    onChangeText={setNewTask}
                    onPress={handleTaskAdd}
                    inputRef= {newTaskInputRef}
                />
                <View style={styles.tasksContainer} >
                    <View style={styles.info}>
                        <View style={styles.row}>
                            <Text style={styles.tasksCreated}>Criadas</Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.counterText}>
                                    {totalTasksCreated}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style= {styles.tasksDone}>Concluídas</Text>
                            <View style={styles.counterContainer}>
                                <Text style={styles.counterText}>
                                    {totalTasksCompleted}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <FlatList 
                        data={tasks}
                        keyExtractor={(tasks) => tasks.id}
                        renderItem={({item}) => (
                            <Task
                                key={item.id}
                                onTaskDone={() => handleTaskDone(item.id)}
                                onTaskDeleted={() => handleTaskDeleted(item.id)}
                                {...item}
                            />
                        )}
                        ListEmptyComponent={<Empty />}
                    />
                </View>
            </View>
        </>
    )
}