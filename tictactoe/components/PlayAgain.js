import { Pressable, StyleSheet, Text } from "react-native";

const PlayAgain = (props) => {
    return props.gameWon === 'NO'
        ? ''
        : <Pressable onPress={props.reset} style={styles.button}>
            <Text style={styles.text}>Play again!</Text>
        </Pressable >
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 40,
        width: 200,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    }
});

export default PlayAgain;