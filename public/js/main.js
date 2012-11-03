require.config({

    'locale' : 'en_us',

    'paths' : {
        'underscore'        : 'lib/underscore',
        'backbone'          : 'lib/backbone',
        'backbone-rel'      : 'lib/backbone-relational',
        'backbone-m-binder' : 'lib/Backbone.ModelBinder.min',
        'backbone-c-binder' : 'lib/Backbone.CollectionBinder.min',
        'backbone-bind'     : 'lib/backbone.iobind',
        'backbone-sync'     : 'lib/backbone.iosync',
        'jquery'            : 'lib/jquery-1.8.1',
        'jquery-hammer'     : 'lib/jquery.hammer',
        'json2'             : 'lib/json2',
        'jstorage'          : 'lib/jstorage',
        'qrcode'            : 'lib/jquery.qrcode.min',
        'socket'            : 'lib/socket.io',
        'modernizr'         : 'lib/modernizr-2.6.2',
        'hbs'               : 'lib/hbs',
        'handlebars'        : 'lib/handlebars',
        'i18nprecompile'    : 'lib/i18nprecompile',
        'app'               : 'application',
        'config'            : 'config',
        'controller'        : 'controller',
        'info'              : 'modules/info',
        'utils'             : 'modules/utils'
    },

    'hbs' : {
        templateExtension : 'template',
        disableI18n       : true
    },

    'shim' : {
        'backbone' : {
            'deps'    : ['jquery', 'underscore'],
            'exports' : 'Backbone'
        },

        'backbone-collection-binder' : {
            'deps' : ['backbone-model-binder']
        },

        'backbone-rel' : {
            'deps' : ['backbone']
        },

        'backbone-bind' : {
            'deps' : ['backbone', 'underscore']
        },

        'backbone-sync' : {
            'deps' : ['backbone', 'underscore']
        },

        'modernizr' : {
            'exports' : function () {
                return window.Modernizr
            }
        },

        'info' : {
            deps : ['jquery']
        },

        'jquery-hammer' : {
            deps : ['jquery', 'lib/hammer']
        },

        'jstorage' : {
            deps : ['jquery']
        },

        'qrcode' : {
            deps : ['jquery']
        },

        'underscore' : {
            'exports' : '_'
        },

        'socket' : {
            'exports' : function () {
                return window.io;
            }
        }

    }
});

require(['app', 'socket', 'utils'],

    function (Application, Socket) {

        window.socket = Socket;
        window.app = Application;
        window.app.initialize(window.socket);

    });