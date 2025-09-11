import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from "../shared/Colors";

export default function Progress() {
  const router = useRouter();
  return (
    <LinearGradient 
        colors={[Colors.BLUE, Colors.PRIMARY]}
    style={{
        marginTop: 15,
        padding: 15,    
        borderRadius: 10,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.WHITE,
      }}>Need Meal Ideas?✨</Text>

      <Text style={{       
      fontSize: 18,
        color: Colors.WHITE,
        opacity: 0.8,
        marginTop: 7,
      }}>Let Our AI generate personalized recipes just for you!</Text>
    
     <TouchableOpacity  
      onPress={() => router.push('/generate-ai-recipe')}
     style={{
        padding: 12,
        backgroundColor: Colors.WHITE,
        marginTop: 10,
        borderRadius: 10,
        width: '70%',
        display: 'flex',
        flexDirection: 'row',   
        alignItems: 'center',
        gap: 7

     }}>
        <Text style={{
            fontSize: 18,
            color: Colors.PRIMARY,
    
        }}>Generate with AI</Text>
         <HugeiconsIcon icon={ArrowRight02Icon}  color={Colors.PRIMARY}/>
     </TouchableOpacity>
    

    </LinearGradient>
  );
}