import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
    heading: string;
    subheading?: string;
    code?: string;
    description?: string;
    buttonText: string;
    onPress: () => void;
    footerText?: string;
    backgroundImage?: any;
}

const CTASectionCard = ({
                            heading,
                            subheading,
                            code,
                            description,
                            buttonText,
                            onPress,
                            footerText,
                            backgroundImage,
                        }: Props) => {

    const renderContent = () => (
        <>
            {subheading && <Text style={styles.subheading}>{subheading}</Text>}
            <Text style={styles.heading}>{heading}</Text>

            {code && <Text style={styles.code}>USE CODE: {code}</Text>}
            {!code && description && <Text style={styles.code}>{description}</Text>}

            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>

            {footerText && <Text style={styles.footer}>{footerText}</Text>}
        </>
    );

    return (
        <View style={styles.wrapper}>
            {backgroundImage ? (
                <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
                    {renderContent()}
                </ImageBackground>
            ) : (
                <View style={[styles.background, styles.fallbackBackground]}>
                    {renderContent()}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        margin: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    background: {
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    fallbackBackground: {
        backgroundColor: '#f0f0f0',
    },
    subheading: {
        fontSize: 12,
        color: '#000',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    code: {
        fontSize: 16,
        letterSpacing: 1,
        color: '#444',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    footer: {
        fontSize: 11,
        color: '#555',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 12,
    },
});

export default CTASectionCard;
