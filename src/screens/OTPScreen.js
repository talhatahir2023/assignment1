import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'

const OtpScreen = ({navigation}) => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
    const et6 = useRef();

    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f3, setF3] = useState('')
    const [f4, setF4] = useState('')
    const [f5, setF5] = useState('')
    const [f6, setF6] = useState('')

    const [count, setCount] = useState(15)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count == 0) {
              clearInterval(interval)
            } else {
              setCount(count - 1)
          }
            
      }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count])
    
    const otpValidate = () => {
        let otp = '123456';
        let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6;
        if (enteredOtp == otp) {
            Alert.alert('OTP Matched')
        } else {
            Alert.alert('Wrong OTP')
        }
    }

   
  return (
    <View style={styles.container}>
          <Text style={styles.OtpTxt}>OTP Verification</Text>
          <View style={styles.otpView}>
              <TextInput
                  ref={et1}
                  value={f1}
                  style={[styles.inputView,
                    {borderColor: f1.length >= 1 ? 'green' : 'white'}]}
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF1(txt)
                      if (txt.length >= 1) {
                          et2.current.focus()
                      }
                  }}
              />
              <TextInput
                  ref={et2}
                  value={f2}
                  style={[styles.inputView,
                    {borderColor: f2.length >= 1 ? 'green' : 'white'}]} 
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF2(txt)
                      if (txt.length >= 1) {
                          et3.current.focus()
                      }  else if (txt.length < 1) {
                          et1.current.focus()
                      }
                  }}
                  />
              <TextInput
                  ref={et3}
                  value={f3}
                  style={[styles.inputView,
                    {borderColor: f3.length >= 1 ? 'green' : 'white'}]} 
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF3(txt)
                      if (txt.length >= 1) {
                          et4.current.focus()
                      }  else if (txt.length < 1) {
                          et2.current.focus()
                      }
                  }}
                  />
              <TextInput
                  ref={et4}
                  value={f4}
                  style={[styles.inputView,
                  {borderColor: f4.length >= 1 ? 'green' : 'white'}]} 
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF4(txt)
                      if (txt.length >= 1) {
                          et5.current.focus()
                      } else if (txt.length < 1) {
                          et3.current.focus()
                      }
                  }}
                  />
              <TextInput
                  ref={et5}
                  value={f5}
                  style={[styles.inputView,
                  {borderColor: f5.length >= 1 ? 'green' : 'white'}]} 
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF5(txt)
                      if (txt.length >= 1) {
                          et6.current.focus()
                      } else if (txt.length < 1) {
                          et4.current.focus()
                      }
                  }}
                  />
              <TextInput
                  ref={et6}
                  value={f6}
                  style={[styles.inputView,
                  { borderColor: f6.length >= 1 ? 'green' : 'white'}]} 
                  keyboardType='number-pad'
                  maxLength={1}
                  onChangeText={txt => { 
                      setF6(txt)
                      if (txt.length >= 1) {
                          et6.current.focus()
                      } else if (txt.length < 1) {
                          et5.current.focus()
                      }
                  }}
                  />
          </View>
          <View style={styles.resendView}>
              <Text
                  style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: count == 0 ? 'green' : 'gray'
                      
                  }} onPress={() => {
                      setCount(15)
                  }}>Resend</Text>
              {
                  count !== 0 && (
                    <Text style={{marginLeft: 20}}>{ count + ' seconds' }</Text>
                  )
             }
          </View>
          <TouchableOpacity
              disabled={
                f1 !== '' && f1 !== '' && f3 !== '' && f4 !== '' && f5 !== '' && f6 !== '' ? false : true
              }
              style={[styles.verifyOtpBtn,
                  {
                      backgroundColor:
                          f1 !== '' && f1 !== '' && f3 !== '' && f4 !== '' && f5 !== '' && f6 !== '' ? 'green' : 'red'
                  }]} onPress={() => navigation.navigate('Home')}
          title>
              <Text style={styles.OtpBtnTxt}>Verify OTP</Text>
          </TouchableOpacity>
    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    OtpTxt: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
        alignSelf: 'center'
    },
    verifyOtpBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 100
    },
    otpView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 100,
    },
    inputView: {
        width: 50,
        height: 50,
        borderWidth: .5,
        borderRadius: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        borderColor: 'white' 
    },
    OtpBtnTxt: {
        color: '#fff',
        fontWeight: "700",
    },
    resendView: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    }
})