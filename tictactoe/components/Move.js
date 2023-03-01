import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const Move = (props) => {

    const move = props.history.index - 1;

    return move < 0 ? '' : (
        <Pressable onPress={() => props.handleHistory(move)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{`Go to move ${move + 1}`}</Text>
            </View>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        margin: 5,
    },
    buttonText: {
        fontSize: 20,
    }
});

export default Move;