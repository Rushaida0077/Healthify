import { Dumbbell01Icon, FemaleSymbolFreeIcons, MaleSymbolFreeIcons, PlusSignSquareIcon, WeightScaleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useMutation } from 'convex/react';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './../../components/shared/Button';
import Input from './../../components/shared/Input';
import { UserContext } from './../../context/UserContext';
import { api } from './../../convex/_generated/api';
import { CalculateCaloriesAI } from './../../services/AiModel';
import Colors from './../../shared/Colors';
import Prompt from './../../shared/Prompt';
export default function Preferance() {
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [gender, setGender] = useState()
    const [goal, setGoal] = useState()
    const {user,setUser} = useContext(UserContext)
    const router = useRouter();
    const UpdateUserPref=useMutation(api.User.UpdateUserPref)
    console.log(user)
    const OnContinue = async() => {
        if (!user?.email) {
    console.log("Error", "User not loaded yet. Please wait.");
    return;
  }
        if (!weight || !height || !gender){
            Alert.alert(' Fill All Fields', 'Enter all fields to continue');
            return;
        }
     
          const data = {
  email: user.email,
  height: Number(height), // ✅ now matches v.float64()
  weight: Number(weight),
  gender: gender,
  goal: goal
};
        //Calculate Calories using AI
        const PROMPT =JSON.stringify(data) + Prompt.CALORIES_PROMPT
        console.log(PROMPT);
        const AIResult = await CalculateCaloriesAI(PROMPT);
        console.log(AIResult.choices[0].message.content)
        const AIResp=AIResult.choices[0].message.content;
        const JSONContent=JSON.parse(AIResp.replace('```json','').replace('```','')) 

       console.log(JSONContent)
        console.log(data)
       const result=await UpdateUserPref({
          ...data,
          ...JSONContent
    })

        setUser(prev=>({
           ...prev,
            ...data
        }))

        router.replace('/(tabs)/Home') 
    
    }

  return (
    <View style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30
      }}>Tell us about yourself</Text>
      <Text style={{
            fontSize: 16,
            textAlign: 'center',
            color:Colors.GARY
      }}>This help us create your personalized meal plan</Text>

      <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}
        >
             <View style={{
                flex: 1
             }} >
                <Input placeholder={'e.g 70'} label='Weight (kg)'
                    onChangeText={setWeight} />
                
            </View>
             <View style ={{
                flex: 1
             }} >
                <Input placeholder={'e.g 5.10'} label='Height (ft)'
                 onChangeText={setHeight} />
               
            </View>
        
        </View>

        <View style={{
            marginTop: 20,
        }}>
            <Text style={{
            fontWeight: 'medium',
            fontSize: 18
        }}>Gender</Text>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}>
                <TouchableOpacity
                onPress={()=>setGender('Male')}
                style={{
                    borderWidth: 1,
                    padding: 15,
                    borderColor: gender=='Male'?Colors.PRIMARY: Colors.GRAY,
                    borderRadius: 10,
                    flex:1,
                    alignItems: 'center',

                    }}>
                    <HugeiconsIcon icon={MaleSymbolFreeIcons} size={40}
                        color={Colors.BLUE}
                    />
                </TouchableOpacity>
                 <TouchableOpacity
                 onPress={()=> setGender('Female')}
                 style={{
                    borderWidth: 1,
                    padding: 15,
                    borderColor: gender=='Female'?Colors.PRIMARY: Colors.GRAY,
                    borderRadius:  10,
                    flex:1,
                    alignItems: 'center',
                    }}>
                    <HugeiconsIcon icon={FemaleSymbolFreeIcons} size={40}
                    color={Colors.PINK}/>
                </TouchableOpacity>
            </View>

        </View>

        <View style={{
            marginTop:15
        }}>
            <Text style={{
                fontWeight: 'medium',
                fontSize:18,
            }}> What's your Goal?</Text>
            <TouchableOpacity
            onPress={()=> setGoal('Weight Loss')}
            style={[styles.goalContainer,{
                borderColor: goal=='Weight Loss' ? Colors.PRIMARY:Colors.GRAY
            }]}>
            <HugeiconsIcon icon={WeightScaleIcon} />
                <View>
                    <Text style={styles.goalText}>Weight Loss</Text>
                    <Text>Reduce body fat & get leaner</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> setGoal('Muscle Gain')}
            style={[styles.goalContainer,{
                borderColor: goal=='Muscle Gain' ? Colors.PRIMARY:Colors.GRAY
            }]}>
                <HugeiconsIcon icon={Dumbbell01Icon} />
                <View>
                    <Text style={styles.goalText}>Muscle Gain</Text>
                    <Text>Build Muscle & get Stronger</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.goalContainer,{
                borderColor: goal=='Weight Gain' ? Colors.PRIMARY:Colors.GRAY
            }]}
                onPress={()=>setGoal('Weight Gain')}
            >
                <HugeiconsIcon icon={PlusSignSquareIcon} />
                <View>
                    <Text style={styles.goalText}>Weight Gain</Text>
                    <Text>Increase healthy body mass</Text>
                </View>
            </TouchableOpacity>
        </View>

           <View style={{
                marginTop: 25,
           }}>
                <Button title={'Continue'} onPress={OnContinue}/>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    goalContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        marginTop: 10
    },
    
    goalText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    goalSubText:{
        color:Colors.GRAY
    }
}) 


