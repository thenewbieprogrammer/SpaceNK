import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageSourcePropType,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SocialMediaItem {
    id: string;
    image: ImageSourcePropType;
    label: string;
    username: string;
    caption: string;
    likes: number;
    onPress?: () => void;
}

interface Props {
    data: SocialMediaItem[];
    showModalOnPress?: boolean;
}

const SocialMediaSlider = ({ data, showModalOnPress = false }: Props) => {
    const [selectedItem, setSelectedItem] = useState<SocialMediaItem | null>(null);

    const handlePress = (item: SocialMediaItem) => {
        if (showModalOnPress) {
            setSelectedItem(item);
        } else {
            item.onPress?.();
        }
    };

    const renderItem = ({ item }: { item: SocialMediaItem }) => (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.expandIcon}>
                <Ionicons name="open-outline" size={16} color="#fff" />
            </View>
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {selectedItem && (
                <Modal transparent animationType="slide" visible onRequestClose={() => setSelectedItem(null)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.modalClose} onPress={() => setSelectedItem(null)}>
                                <Ionicons name="close" size={24} />
                            </TouchableOpacity>

                            <Image source={selectedItem.image} style={styles.modalImage} />
                            <Text style={styles.modalUsername}>{selectedItem.username}</Text>
                            <Text style={styles.modalLikes}>{selectedItem.likes} likes</Text>
                            <Text style={styles.modalCaption}>{selectedItem.caption}</Text>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    card: {
        width: 120,
        marginRight: 12,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 160,
        borderRadius: 8,
    },
    expandIcon: {
        position: 'absolute',
        top: 6,
        right: 6,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 4,
        borderRadius: 12,
    },
    label: {
        marginTop: 6,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    modalClose: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    modalUsername: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 4,
    },
    modalLikes: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
    },
    modalCaption: {
        fontSize: 13,
        textAlign: 'center',
    },
});

export default SocialMediaSlider;
