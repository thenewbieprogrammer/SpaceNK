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
                            <View style={styles.modalTopWrapper}>
                                <Image source={selectedItem.image} style={styles.modalImage} />
                                <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.closeButton}>
                                    <Ionicons name="close" size={16} color="#fff" />
                                </TouchableOpacity>
                            </View>
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
    headerImageWrapper: {
        width: '100%',
        position: 'relative',
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
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 8,
        paddingTop: 8,
        marginBottom: -12,
    },
    modalTopWrapper: {
        width: '100%',
        position: 'relative',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
    },
    modalImageWrapper: {
        width: '100%',
        position: 'relative',
    },
    modalImage: {
        width: '100%',
        height: 200,
    },
    modalImageContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        marginBottom: 12,
    },
    closeButton: {
        position: 'absolute',
        top: 1,
        right: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 26,
        height: 26,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    modalUsername: {
        fontWeight: '600',
        fontSize: 14,
        marginTop: 12,
        marginBottom: 4,
        textAlign: 'center',
    },
    modalLikes: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
        textAlign: 'center',
    },
    modalCaption: {
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
});

export default SocialMediaSlider;
