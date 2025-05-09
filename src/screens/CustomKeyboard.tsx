// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// type Props = {
//   onKeyPress: (key: string) => void;
// };

// const keys = [
//   ['1', '2', '3'],
//   ['4', '5', '6'],
//   ['7', '8', '9'],
//   ['.', '0', 'del'],
// ];

// const CustomKeyboard = ({ onKeyPress }: Props) => {
//   return (
//     <View style={styles.container}>
//       {keys.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((key) => (
//             <TouchableOpacity
//               key={key}
//               style={styles.key}
//               onPress={() => onKeyPress(key)}
//             >
//               <Text style={styles.keyText}>{key === 'del' ? '⌫' : key}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// export default CustomKeyboard;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginBottom: 10,
//   },
//   key: {
//     width: 70,
//     height: 70,
//     backgroundColor: '#ddd',
//     borderRadius: 35,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   keyText: {
//     fontSize: 24,
//   },
// });
