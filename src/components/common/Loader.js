import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../../utilities/constants';

const Loader = (props) => {
    if (!props.isLoading) {
        return null;
    }

    if (props.isAbsolute) {
        return (
            <View
                {...props}
                style={[
                    StyleSheet.absoluteFill,
                    styles.flexCenterStyle,
                    {
                        backgroundColor: colors.black2,
                    },
                ]}
            >
                <ActivityIndicator color={colors.white1} size={'large'} />
            </View>
        );
    }

    return (
        <View
            {...props}
            style={[
                styles.flexCenterStyle,
                { flex: 1 },
            ]}
        >
            <ActivityIndicator
                color={colors.green}
                size={'large'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flexCenterStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Loader };
