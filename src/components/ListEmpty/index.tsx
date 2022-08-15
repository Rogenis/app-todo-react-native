import { Text, View,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles'

export function ListEmpty(){
  return (
    <>
    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Icon
        name='clipboard-list'
        color='#808080'
        size={57} />
    </View>
    <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
    <Text style={styles.listEmptySubtitle}>Crie tarefas e organize seus itens a fazer</Text></>
  )
}