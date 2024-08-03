import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import IcBan from '../../assets/icons/icBan.svg';
import {Body1} from '../TextComponents';

import styles from './styles';

export default function NoInternetBanner() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <IcBan />
        <Body1 style={styles.noInternet}>{t('noInternetConnected')}</Body1>
      </View>
    </View>
  );
}
