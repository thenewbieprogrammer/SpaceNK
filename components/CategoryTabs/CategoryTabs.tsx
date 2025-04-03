import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    categories: string[];
    selected: string;
    onTabChange: (category: string) => void;
}

const CategoryTabs = ({ categories, selected, onTabChange }: Props) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            {categories.map((category) => {
                const isActive = category === selected;
                return (
                    <TouchableOpacity
                        key={category}
                        onPress={() => onTabChange(category)}
                        style={[styles.tab, isActive && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, isActive && styles.activeText]}>{category}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 12,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 8,
        borderRadius: 20,
        backgroundColor: '#eee',
    },
    activeTab: {
        backgroundColor: '#333',
    },
    tabText: {
        fontSize: 14,
        color: '#333',
    },
    activeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CategoryTabs;
