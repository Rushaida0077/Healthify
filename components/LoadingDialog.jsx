import {View, Text, Modal, ActivityIndicator} from 'react-native';
import Colors from '../shared/Colors';

export default function LoadingDialog({loading=false}) {

  return (
    <Modal transparent={true} visible={loading} animationType="fade">
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',   
            backgroundColor: '#00000070'
        }}>
            <View style={{
                padding:20,
                borderRadius: 15,
                backgroundColor: Colors.PRIMARY,
                alignItems: 'center'
                }}>

                <ActivityIndicator size={"large"} color={Colors.WHITE} />
                <Text style={{
                    color: Colors.WHITE,
                    fontSize: 16,
                    marginTop: 10
                }}>Loading...</Text>
                
            </View>

        </View>
    </Modal>
  );
}