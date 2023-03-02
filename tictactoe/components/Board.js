import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Board = (props) => {

    let status;
    props.gameWon === 'NO'
        ? status = `Next player: ${props.xIsNext ? 'X' : 'O'}`
        : status = props.gameWon === 'TIE'
            ? 'Cat scratch!'
            : `${props.gameWon} wins!`

    const handlePress = (i) => {
        const updatedSquares = [...props.squares];
        updatedSquares[i] = props.xIsNext ? 'X' : 'O';
        props.onPlay(updatedSquares);
    };

    return (
        <View style={styles.board}>
            <Text style={styles.statusText}>{status}</Text>
            <View style={styles.row}>
                <Square value={props.squares[0]} onSquarePress={() => handlePress(0)} gameWon={props.gameWon} />
                <Square value={props.squares[1]} onSquarePress={() => handlePress(1)} gameWon={props.gameWon} />
                <Square value={props.squares[2]} onSquarePress={() => handlePress(2)} gameWon={props.gameWon} />
            </View>
            <View style={styles.row}>
                <Square value={props.squares[3]} onSquarePress={() => handlePress(3)} gameWon={props.gameWon} />
                <Square value={props.squares[4]} onSquarePress={() => handlePress(4)} gameWon={props.gameWon} />
                <Square value={props.squares[5]} onSquarePress={() => handlePress(5)} gameWon={props.gameWon} />
            </View>
            <View style={styles.row}>
                <Square value={props.squares[6]} onSquarePress={() => handlePress(6)} gameWon={props.gameWon} />
                <Square value={props.squares[7]} onSquarePress={() => handlePress(7)} gameWon={props.gameWon} />
                <Square value={props.squares[8]} onSquarePress={() => handlePress(8)} gameWon={props.gameWon} />
            </View>
        </View>
    );
};

const Square = (props) => {
    const disabled = props.value === 'X' || props.value === 'O' || props.gameWon !== 'NO';
    return (
        <Pressable onPress={props.onSquarePress} disabled={disabled}>
            <View style={styles.square}>
                <Text style={[styles.squareText, props.value === 'X' ? styles.squareX : styles.squareO]}>{props.value}</Text>
            </View>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    statusText: {
        color: 'white',
        fontSize: 28,
        paddingBottom: 10,
    },
    board: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'dashed',
        borderWidth: 1,
    },
    squareText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    squareX: {
        color: 'black',
    },
    squareO: {
        color: 'red',
    },
    row: {
        flexDirection: 'row',
    }
});

export default Board;