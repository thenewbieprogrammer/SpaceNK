import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../styles/context/ThemeContext';
import SearchBar from "../SearchBar/SearchBar";

interface HeaderBarProps {
    showSearch?: boolean;
}
const HeaderBar = ({showSearch}: HeaderBarProps) => {
    const theme = useTheme();

    return (
        <BlurView intensity={50} tint="light" style={[theme.effects.nativeBlurGlass, styles.container, showSearch && styles.containerWithSearch]}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: theme.fontSizes.lg, fontWeight: 'bold', color: theme.colors.text }}>
                    SpaceNK
                </Text>
                {showSearch ? (
                    <View style={styles.searchWrapper}>
                        <SearchBar />
                    </View>
                ) : (
                    <View style={styles.spacer} /> // to maintain layout spacing
                )}
                <TouchableOpacity testID="user-icon">
                    <Ionicons name="person-outline" size={24} color={theme.colors.text} />
                </TouchableOpacity>
            </View>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        height: 64,
        paddingTop: 12,

        position: 'absolute',
        top: 30, // adjust this depends on the height of PromoStrip
        left: 0,
        right: 0,
        zIndex: 100,

    },
    containerWithSearch: {
      height: 78
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    searchWrapper: {
        flex: 1,
        marginHorizontal: 12,
    },

    spacer: {
        flex: 1,
        marginHorizontal: 12,
    },

});

export default HeaderBar;
