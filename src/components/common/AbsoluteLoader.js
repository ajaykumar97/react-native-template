import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../utilities/constants';

const AbsoluteLoader = (props) => (
    <View
        {...props}
        style={[
            StyleSheet.absoluteFill,
            styles.flexCenterStyle,
            {
                backgroundColor: Colors.loaderBackgroundColor
            }
        ]}
    >
        <ActivityIndicator color={Colors.white} size={'large'} />
    </View>
);

const styles = StyleSheet.create({
    flexCenterStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export { AbsoluteLoader };
