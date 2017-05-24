/**
 * Created by Administrator on 11.05.17.
 */
var winston=require('winston');

module.exports = function (module){
    if (module.filename.match(/request.js$/)){
        var transports = [
            new winston.transports.Console({
                timestamp: true,
                colorized: true,
                level: 'info'
                }),
            new winston.transports.File({
                filename: 'debug.log',
                level: 'debug'
            })
        ];

        return new winston.Logger({transports: transports});
    }
    else {
        return new winston.Logger({transports: []});
    }
}
