
import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabBarWrapper = ({ children }: { children: any }) => (
    <View style={styles.container}>
        <View style={styles.tabBarContainer}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    tabBarContainer: {
        width: '100%',
        borderRadius: 14,
        // Thêm các style khác nếu cần
    },
});

export default TabBarWrapper;