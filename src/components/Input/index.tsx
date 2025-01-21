import { Fragment } from 'react'
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons"

import { s } from './styles'
import { themas } from '../../global/themes'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,
    iconRigthName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void
}

export function Input(props: Props) {
    const { IconLeft, IconRigth, iconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthPress, ...rest } = props
    return (
        <Fragment>
            <Text style={s.titleInput}>{title}</Text>
            <View style={s.boxInput}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity>
                        <IconLeft
                            name={iconLeftName as any}
                            size={20}
                            color={themas.colors.gray}
                            style={s.icon}
                        />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={s.input}
                />
                <MaterialIcons
                    name="email"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>
        </Fragment>
    )
} 