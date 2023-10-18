import { View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'

export function HomeScreen() {
    return (
        <>
            <View style={styles.container}>
                <Header />
            </View>
        </>
    )
}