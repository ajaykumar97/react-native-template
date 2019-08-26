/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import {
    Header,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { login } from '../actions';
import { LearnMoreLinksComponent } from '../components/LaunchScreen';
import { AbsoluteLoader } from '../components/common';

class LaunchScreen extends PureComponent {
    componentDidMount() {
        this.timeOut = setTimeout(() => {
            this.props.login();
        }, 2000);
    }
    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }
    render() {
        const { user_logged_in, loading } = this.props;
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header />
                        {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                        )}
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>User login status</Text>
                                <Text style={styles.sectionDescription}>
                                    {String(user_logged_in)}
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Step One</Text>
                                <Text style={styles.sectionDescription}>
                                    Edit <Text style={styles.highlight}>LaunchScreen.js</Text> to change this
                                    screen and then come back to see your edits.
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>See Your Changes</Text>
                                <Text style={styles.sectionDescription}>
                                    <ReloadInstructions />
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Debug</Text>
                                <Text style={styles.sectionDescription}>
                                    <DebugInstructions />
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Learn More</Text>
                                <Text style={styles.sectionDescription}>
                                    Read the docs to discover what to do next:
                                </Text>
                            </View>
                            <LearnMoreLinksComponent />
                        </View>
                    </ScrollView>
                    {loading && <AbsoluteLoader />}
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

const mapStatesToProps = ({ auth }) => {
    const { user_logged_in, loading } = auth;
    return { user_logged_in, loading };
};

export default connect(mapStatesToProps, { login })(LaunchScreen);
