/* eslint-disable no-param-reassign */

const logger = {
    error: (header, err) => {
        if (!__DEV__) { //to disable log in production mode
            return;
        }

        if (!err) { //single argument is passed;
            err = header;
            header = 'ERROR';
        }

        console.log('\n');

        try {
            /* if (text) {
                // console.log(colorCodes.FgRed, header, text);
                console.log(`%c ${header} `, 'background:red;color:#FFFFFF', text);
            } */
            if (!err.stack) {
                // console.log(colorCodes.FgRed, header, err);
                console.log(`%c ${header} `, 'background:red;color:#FFFFFF', err);
            } else {
                console.log(`%c ${header} `, 'background:red;color:#FFFFFF', err.stack);
            }
            console.log('\n');
        } catch (loggerError) {
            // console.log(colorCodes.FgRed, header, text);
            console.log(`%c ${header} `, 'background:red;color:#FFFFFF', err);
            console.log('\n');
        }
    },

    apiError: (header, error) => {
        if (!__DEV__) { //to disable log in production mode
            return;
        }

        console.log('\n');

        if (!error) { //single argument is passed;
            error = header;
            header = 'API ERROR';
        }

        console.log(`%c ${header} `, 'background:red;color:#FFFFFF');

        try {
            if (error.config) {
                console.log(
                    '%c URL ', 'background:orange;color:#FFFFFF',
                    error.config.url
                );
                console.log(
                    '%c DATA ', 'background:#00ffff;color:#FFFFFF',
                    error.config.data
                );
            }

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                /* console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers); */

                if (error.response.status) {
                    console.log(
                        '%c STATUS CODE ', 'background:orange;color:#FFFFFF',
                        error.response.status
                    );
                }

                if (error.response.data) {
                    console.log(
                        '%c RESPONSE DATA ', 'background:orange;color:#FFFFFF',
                        JSON.stringify(error.response.data, null, 4).replace(/'/g, '')
                    );
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js

                console.log(
                    '%c REQUEST ', 'background:orange;color:#FFFFFF',
                    error.request
                );
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error);
            }
        } catch (err) {
            console.log('API ERROR', err);
        }

        console.log('\n');
    },

    log: (header, text, expandJson) => {
        if (!__DEV__) { //to disable log in production mode
            return;
        }
        console.log('\n');

        try {
            if (!text) {
                text = header;
                header = 'LOG';
            }

            if (expandJson) {
                console.log(
                    `%c ${header} `, 'background:green;color:#FFFFFF',
                    JSON.stringify(text, null, 4).replace(/'/g, '')
                );
            } else {
                console.log(`%c ${header} `, 'background:green;color:#FFFFFF', text);
            }

            console.log('\n');
        } catch (err) {
            console.log(`%c ${header} `, 'background:green;color:#FFFFFF', text);
            console.log('\n');
        }
    },

    data: (header, text, noJsonExpand) => {
        if (!__DEV__) { //to disable log in production mode
            return;
        }

        console.log('\n');

        try {
            if (!text) {
                text = header;
                header = 'DATA';
            }

            if (noJsonExpand) {
                console.log(`%c ${header} `, 'background:#00ffff;color:#FFFFFF', text);
            } else {
                console.log(
                    `%c ${header} `, 'background:#00ffff;color:#FFFFFF',
                    JSON.stringify(text, null, 4).replace(/\\/g, ''),
                    // JSON.stringify(text, null, 4).replace(/'/g, '')
                    // text
                );
            }

            console.log('\n');
        } catch (err) {
            console.log(`%c ${header} `, 'background:#00ffff;color:#FFFFFF', text);
            console.log('\n');
        }
    }
};

export default logger;
