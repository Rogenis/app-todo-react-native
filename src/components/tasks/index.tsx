import { Text, View,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles'

type Props = {
  name: string;
  isCompleted: boolean;
  setIsChecked: () => void;
  onRemove: () => void;
}

export function Tasks({ name, onRemove, isCompleted, setIsChecked }: Props){
  return (
    <View style={styles.container}>
      {
        isCompleted ?
        (
          <Icon 
            name='check-circle'
            style={{  left: 12 }}
            color='#5E60CE'
            size={17}
            onPress={setIsChecked}
          /> 
        ) :
        (
        <Icon 
          name='circle'
          style={{  left: 12 }}
          color='#4EA8DE'
          size={17}
          onPress={setIsChecked}
        /> 
        )
      }
        {
          isCompleted ?
          ( <Text style={styles.isChecked}>{name}</Text>) :
          ( <Text style={styles.name}>{name}</Text>)
        }
        <Icon 
          name='trash'
          style={{ right: 16 }}
          color='#808080'
          size={14}
          onPress={onRemove}
        />
    </View>
  )
}