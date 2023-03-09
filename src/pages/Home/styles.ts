import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components';

type ITaskProps = {
    checked: boolean
}

export const Container = styled(View)`
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Header = styled(View)`
    background-color: #0D0D0D;

    width: 100%;
    height: 173px;

    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 2;
`

export const Logo = styled(Image)``

export const InputContainer = styled(View)`
    position: absolute;
    flex-direction: row;
    gap: 4px;

    width: 100%;
    padding: 0 24px;

    bottom: -27px;
`

export const Input = styled(TextInput)`
    flex: 1;

    height: 54px;

    padding: 0 16px;

    border: 1px solid #0D0D0D;
    border-radius: 6px;

    background-color: #262626;
    color: #fff;

    font-size: 16px;
`

export const ButtonAdd = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    height: 54px;
    width: 54px;

    background-color: #1E6F9F;

    border-radius: 6px;
`

export const ListContainer = styled(View)`
    background-color: #1A1A1A;
    height: 100%;
    width: 100%;
    z-index: 1;
`

export const ListHeader = styled(View)`
    margin-top: 55px;
    padding: 0 24px;
`

export const TaskCountContainer = styled(View)`
    flex-direction: row;
    align-items: center;

    gap: 8px;
`

export const Line = styled(View)`
    width: 100%;
    height: 1px;

    background-color: #333333;

    margin-top: 20px;
`

export const TaskHeaderText = styled(Text)`
    font-weight: 700;
    font-size: 14px;
`

export const TaskHeaderCount = styled(View)`
    width: 25px;
    height: 19px;

    align-items: center;
    justify-content: center;

    background-color: #333333;
    border-radius: 100px;
`

export const TaskCountText = styled(Text)`
    font-weight: 700;
    color: #D9D9D9;
    font-size: 12px;
`

export const EmptyList = styled(View)`
    align-items: center;
    padding: 48px 0;
`

export const ClipBoardImage = styled(Image)`
`

export const EmptyListTitle = styled(Text)`
    margin-top: 16px;

    color: #808080;
    font-weight: 700;
`

export const EmptyListSubTitle = styled(Text)`
    color: #808080;
`

export const TasksList = styled(FlatList)`
    padding: 0 24px;
    margin-top: 20px;
` as unknown as typeof FlatList;

export const Task = styled(View) <ITaskProps>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 8px;

    gap: 8px;

    background-color: #262626;

    border-width: 1px;
    border-color: #333333;

    padding: 12px;

    border-radius: 8px;

    ${props => props.checked && css`
        border-color: transparent;
    `}
`

export const CheckCircle = styled(TouchableOpacity)<ITaskProps>`
    width: 17px;
    height: 17px;

    margin: 0 4px;

    border-width: 2px;
    border-color: #4EA8DE;
    border-radius: 50%;
    
    ${props => props.checked && css`
        align-items: center;
        justify-content: center;
        border-width: 0px;
        border-color: #5E60CE;
        background-color: #5E60CE;
    `}
`

export const TaskText = styled(Text)<ITaskProps>`
    flex: 1;
    color: #F2F2F2;

    ${props => props.checked && css`
        color: #808080;
        text-decoration: line-through;
        text-decoration-color: #808080;
    `}
`
