import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const mobileOperators = [
  {
    id: 1,
    name: 'Zong',
  },
  {
    id: 2,
    name: 'Telenor',
  },
  {
    id: 3,
    name: 'Ufone',
  },
  {
    id: 4,
    name: 'Jazz',
  },
];

export default App = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [mobileOperator, setMobileOperator] = React.useState('');
  return (
    <View style={styles.container}>

      <View style={styles.network}>
        <TextInput
          style={styles.input}
          value={mobileOperator}
          editable={false}
        />
        <Text
          style={styles.icon}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          Arrow
        </Text>
      </View>

      <Modal transparent visible={modalVisible}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: '90%',
              height: '50%',
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#bbb',
            }}>
            <View style={styles.mobileOperator}>
              <Text style={styles.mobileOperatorTitle}>Mobile Operator </Text>
            </View>

            <View>
              <FlatList
                data={mobileOperators}
                keyExtractor={(operator) => operator}
                renderItem={({ item: operator }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setMobileOperator(operator.name);
                        setModalVisible(!modalVisible);
                      }}
                      style={[
                        styles.operator,

                        operator.id > 1 && {
                          borderTopWidth: 1,
                          borderTopColor: '#bbb',
                        },
                      ]}>
                      <Text style={styles.operatorName}>{operator.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    paddingHorizontal:10
  },
  network: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
  },

  icon: {
    textAlign: 'center',
    paddingRight: 20,
    backgroundColor: 'gray',
    padding: 10,
    color: 'white',
    width: '30%',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    width: '70%',
  },
  mobileOperator: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  mobileOperatorTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  operator: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  operatorName: {
    fontWeight: '500',
  },
});
