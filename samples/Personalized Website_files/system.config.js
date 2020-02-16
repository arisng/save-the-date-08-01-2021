(function (global) {
    // packages tells the System loader how to load when no filename and/or no extension
    var systemjsPackages = {
        app: {main: './main.js' + global.application.cacheVersion, defaultExtension: 'js' + global.application.cacheVersion},
        '@shared': {defaultExtension: 'js' + global.application.cacheVersion},
        '@addressbook': {defaultExtension: 'js' + global.application.cacheVersion},
        rxjs: {defaultExtension: 'js' + global.application.cacheVersion},
        // 'angular2-in-memory-web-api': {
        //     main: './index.js',
        //         defaultExtension: 'js'
        // },
        'ng2-file-upload': {
            main: './ng-file-upload.js' + global.application.cacheVersion,
            defaultExtension: 'js' + global.application.cacheVersion
        }
    };

    var systemjsMap = {
        // our app is within the app folder
        '@shared': 'bi:shared/v1',
        '@addressbook': 'bi:addressbook/v4',
        app: 'bi:website/v7/',
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js' + global.application.cacheVersion,
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js' + global.application.cacheVersion,
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js' + global.application.cacheVersion,
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js' + global.application.cacheVersion,
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js' + global.application.cacheVersion,
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js' + global.application.cacheVersion,
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js' + global.application.cacheVersion,
        '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js' + global.application.cacheVersion,
        'tslib': 'npm:tslib/tslib.js' + global.application.cacheVersion,
        // other libraries
        'rxjs': 'npm:rxjs',
        //'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'ng2-file-upload': 'npm:ng2-file-upload',
    };

    var domain = window.location.protocol + '//' + (window.location.hostname != 'www.basicinvite.com' ? window.location.hostname : 'd3octkd2uqmyim.cloudfront.net');
    System.config({
        paths: {
            // paths serve as alias
            'npm:': domain + '/node_modules/',
            'bi:': domain + '/js/basicinvite/'
        },
        // map tells the System loader where to look for things
        map: systemjsMap,

        packages: systemjsPackages
    });
})(this);




