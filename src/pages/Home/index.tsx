import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Octicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import * as S from './styles'

import logo from '../../assets/logo.png'
import clipboard from '../../assets/clipboard.png'
import { useMemo, useRef, useState } from 'react';

type ITaskProps = {
    id: string
    description: string
    done: boolean
}

export const Home = () => {
    const [inputText, setInputText] = useState('')
    const [tasks, setTasks] = useState<ITaskProps[]>([
        {
            id: String(uuid.v4()),
            description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
            done: false
        },
        {
            id: String(uuid.v4()),
            description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
            done: true
        },
    ])

    function handleToggleCheck(id: string) {
        setTasks(state => state.map(task => task.id === id ? ({...task, done: !task.done}) : task))
    }

    function handleDeleteTask(id: string) {
        setTasks(state => state.filter(task => task.id !== id))
    }

    function handleCreateTask(){
        if(!inputText){
            return
        }

        setTasks(state => ([...state, {
            description: inputText,
            id: String(uuid.v4()),
            done: false
        }]))
    }

    const tasksDone = useMemo(() => {
        return tasks.filter(task => task.done).length
    }, [tasks])

    return (
        <S.Container>
            <StatusBar style='light'></StatusBar>
            <S.Header>
                <S.Logo source={logo} />

                <S.InputContainer>
                    <S.Input 
                        onChangeText={setInputText}
                        value={inputText}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                    />
                    <S.ButtonAdd onPress={handleCreateTask}>
                        <AntDesign
                            name="pluscircleo"
                            size={16}
                            color="white"
                        />
                    </S.ButtonAdd>
                </S.InputContainer>
            </S.Header>
            <S.ListContainer>
                <S.ListHeader>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <S.TaskCountContainer>
                            <S.TaskHeaderText style={{ color: '#4EA8DE' }}>
                                Criadas
                            </S.TaskHeaderText>
                            <S.TaskHeaderCount>
                                <S.TaskCountText>
                                    {tasks.length}
                                </S.TaskCountText>
                            </S.TaskHeaderCount>
                        </S.TaskCountContainer>

                        <S.TaskCountContainer>
                            <S.TaskHeaderText style={{ color: '#8284FA' }}>
                                Concluídas
                            </S.TaskHeaderText>
                            <S.TaskHeaderCount>
                                <S.TaskCountText>
                                    {tasksDone}
                                </S.TaskCountText>
                            </S.TaskHeaderCount>
                        </S.TaskCountContainer>
                    </View>
                    {tasks.length === 0 && <S.Line></S.Line>}
                </S.ListHeader>

                {tasks.length === 0 ? (
                    <S.EmptyList>
                        <S.ClipBoardImage source={clipboard} />

                        <S.EmptyListTitle>
                            Você ainda não tem tarefas cadastradas
                        </S.EmptyListTitle>

                        <S.EmptyListSubTitle>
                            Crie tarefas e organize seus itens a fazer
                        </S.EmptyListSubTitle>
                    </S.EmptyList>
                ) : (
                    <S.TasksList
                        data={tasks}
                        renderItem={({ item }) => (
                            <S.Task checked={item.done}>
                                <S.CheckCircle onPress={() => handleToggleCheck(item.id)} checked={item.done} >
                                    {item.done && (
                                        <Octicons name="check" size={10} color="#fff" />
                                    )}
                                </S.CheckCircle>
                                <S.TaskText checked={item.done}>{item.description}</S.TaskText>

                                <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                                    <EvilIcons name="trash" size={22} color="#808080" />
                                </TouchableOpacity>
                            </S.Task>
                        )}
                        keyExtractor={(item) => item.id}
                    >
                    </S.TasksList>
                )}
            </S.ListContainer>
        </S.Container>
    )
}