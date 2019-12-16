import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function goBack(key) {
    let options;
    
    if (key) {
        options = { key };
    }

    return _navigator.dispatch(NavigationActions.back(options));
}

function resetStack(screenName) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: screenName })],
    });
    _navigator.dispatch(resetAction);
}

function push(routeName, params) {
    _navigator.dispatch(
        StackActions.push({
            routeName,
            params,
        })
    );
}

export {
    setTopLevelNavigator,
    navigate,
    goBack,
    resetStack,
    push,
};
