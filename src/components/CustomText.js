import React from 'react';
import { Text } from 'react-native';
import I18n from '../utilities/I18n';

const CustomText = (props) => (
    <Text {...props}>
        {I18n.t(props.text)}
    </Text>
);

export { CustomText };
