import { useState, useEffect } from 'react';
import { FlatList, Platform, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Board from './Board';
import Move from './Move';
import PlayAgain from './PlayAgain';

const Game = () => {

    const winningSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [gameWon, setGameWon] = useState('NO');

    const xIsNext = (currentMove % 2 === 0) ? true : false;
    const currentSquares = history[currentMove];

    useEffect(() => {
        winningSquares.forEach((winner) => {
            const [a, b, c] = winner;
            const [sA, sB, sC] = [currentSquares[a], currentSquares[b], currentSquares[c]]
            if (sA === 'X' && sB === 'X' && sC === 'X') {
                setGameWon('X');
                return;
            } else if (sA === 'O' && sB === 'O' && sC === 'O') {
                setGameWon('O')
                return;
            }
        });
        if (!currentSquares.includes(null)) {
            setGameWon(prev => prev === 'NO' ? "TIE" : prev)
        }
    }, [currentSquares]);

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const handleHistory = (move) => {
        const revertedHistory = [...history.slice(0, move + 1)]
        setCurrentMove(revertedHistory.length);
    };

    const handleReset = () => {
        setCurrentMove(0);
        setHistory([Array(9).fill(null)]);
        setGameWon('NO');
    };

    return (
        <SafeAreaView >
            <View style={styles.boardContainer}>
                <Text style={styles.titleText}>Tic-Tac-Toe</Text>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} gameWon={gameWon} />
            </View>
            <View style={styles.movesContainer}>
                <PlayAgain gameWon={gameWon} reset={handleReset} />
                <FlatList
                    contentContainerStyle={styles.movesContainerContent}
                    alwaysBounceVertical='false'
                    data={history}
                    renderItem={history =>
                        <Move history={history} handleHistory={handleHistory} />
                    }
                    extraData={history}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    movesContainer: {
        alignItems: 'center',
        ...Platform.select({
            native: {
                flex: 1,
            },
            default: {}
        })
    },
    movesContainerContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default Game;