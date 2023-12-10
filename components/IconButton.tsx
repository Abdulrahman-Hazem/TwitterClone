import {View, Text} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

type IconButtonProps = {
    icon: string;
    text?: number | string;
  };
  
  const IconButton = ({icon, text}: IconButtonProps) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* ICON */}
        <EvilIcons name={icon} size={22} color="grey" />
        {/* NUMBER */}
        <Text style={{fontSize: 12, color: 'grey'}}>{text}</Text>
      </View>
    );
  };
  
  export default IconButton