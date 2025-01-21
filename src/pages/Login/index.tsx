import { Image, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { s } from "./styles"
import Logo from "../../assets/logo.png"
import { themas } from "../../global/themes"
import { useState } from "react"
import { Input } from "../../components/Input"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }
            setTimeout(() => {
                if (email == 'rodrigo55pereira@gmail.com' && password == '123456') {
                    Alert.alert('Logado com sucesso.')
                } else {
                    Alert.alert('Usuário não encontrado.')
                }
                setLoading(false)
            }, 3000)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    return (
        <View style={s.container}>
            <View style={s.boxTop}>
                <Image
                    source={Logo}
                    style={s.logo}
                    resizeMode="contain"
                />
                <Text style={s.title}>Bem vindo de volta!</Text>
            </View>
            <View style={s.boxMid}>
                <Input
                    title="ENDEREÇO E E-MAIL"
                />
                {/* <Text style={s.titleInput}>ENDEREÇO E E-MAIL</Text>
                <View style={s.boxInput}>
                    <TextInput
                        style={s.input}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={s.titleInput}>SENHA</Text>
                <View style={s.boxInput}>
                    <TextInput
                        style={s.input}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View> */}
            </View>
            <View style={s.boxBottom}>
                <TouchableOpacity style={s.button} onPress={() => getLogin()}>
                    {loading ? <ActivityIndicator color={'#FFFF'} size={'small'} /> : <Text style={s.textButton}>Entrar</Text>}
                </TouchableOpacity>
            </View>
            <Text style={s.textBottom}>Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie agora</Text></Text>
        </View>
    )
}