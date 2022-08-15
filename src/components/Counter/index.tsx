import { Text, View,  } from 'react-native';
import { styles } from './styles'

type Props = {
  createdTasks: number;
  completedTasks: number;
}

export function Counter({ createdTasks, completedTasks }: Props){
  return (
       <View style={styles.info}>
        <Text style={styles.infoTitle}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.text}>{createdTasks}</Text>
        </View>
        <Text style={styles.infoSubtitle}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.text}>{completedTasks}</Text>
        </View>
      </View>
  )
}