import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight , GestureResponderEvent} from 'react-native';

import styles from './styles';
import Icon from './Icon';

type Props = {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    checkmark?: boolean;
    selected?: boolean;
    visible?: boolean;
    iconBackground?: string;
    customIcon:any 
  };
  
  const ListItem = ({
      text,
      onPress,
      checkmark = true,
      selected = false,
      visible = true,
      iconBackground, 
      customIcon = null
    }: Props) => (
      <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
          <Text style={styles.text}>{text}</Text>
          {selected ? (
            <Icon visible={visible} checkmark={checkmark} iconBackground />
          ) : (
            <Icon visible={false} checkmark={false} iconBackground />
    
          )}
          {customIcon}
        </View>
      </TouchableHighlight>
    );


    ListItem.propTypes = {
      text: PropTypes.string,
      onPress: PropTypes.func,
      checkmark: PropTypes.bool,
      selected: PropTypes.bool,
      visible: PropTypes.bool,
      customIcon: PropTypes.element,
    };
    
    export default ListItem;


  

// const ListItem = ({
//   text, onPress, checkmark = true, selected = false, visible = true,
// }) => (
//   <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
//     <View style={styles.row}>
//       <Text style={styles.text}>{text}</Text>
//       {selected ? <Icon visible={visible} checkmark={checkmark} /> : <Icon />}
//     </View>
//   </TouchableHighlight>
// );




// import PropTypes from 'prop-types';
// import React from 'react';
// import { View, Text, TouchableHighlight } from 'react-native';

// import styles from './styles';
// import Icon from './Icon';

// type Props = {
//   text: string;
//   onPress: () => void;
//   checkmark?: boolean;
//   selected?: boolean;
//   visible?: boolean;
//   iconBackground?: string; // NEW: include this in props
// };

// const ListItem = ({
//   text,
//   onPress,
//   checkmark = true,
//   selected = false,
//   visible = true,
//   iconBackground, // NEW: destructure it
// }: Props) => (
//   <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
//     <View style={styles.row}>
//       <Text style={styles.text}>{text}</Text>
//       {selected ? (
//         <Icon visible={visible} checkmark={checkmark} iconBackground />
//       ) : (
//         <Icon visible={false} checkmark={false} iconBackground />

//       )}
//     </View>
//   </TouchableHighlight>
// );

// // PropTypes is optional if you're using TypeScript, but you can keep it for JS fallback
// ListItem.propTypes = {
//   text: PropTypes.string,
//   onPress: PropTypes.func,
//   checkmark: PropTypes.bool,
//   selected: PropTypes.bool,
//   visible: PropTypes.bool,
//   iconBackground: PropTypes.string,
// };

// export default ListItem;
