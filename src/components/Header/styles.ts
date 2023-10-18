import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.base.gray700,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 173,
        position: 'relative',
    },
    form: {
        height: 54,
        bottom: -54 /2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        gap: 4,
    },
    input: {
        height: 54,
        width: '75%',
        backgroundColor: theme.colors.base.gray500,
        borderRadius: 5,
        padding: 16,
        fontSize: theme.font_size.md,
        borderColor: theme.colors.base.gray700,
        borderWidth: 1,
    },
    button: {
        height: 54,
        width: 54,
        borderRadius: 5,
        backgroundColor: theme.colors.brand.blue_dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
})