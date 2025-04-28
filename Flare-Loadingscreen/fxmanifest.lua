fx_version 'cerulean'
game 'gta5'

author 'Flare-Scripts'
description 'Modern FiveM Loadingscreen'
version '1.0.1'

loadscreen 'html/index.html'
loadscreen_cursor 'yes'

files {
    'html/index.html',
    'html/css/style.css',
    'html/css/config.css',
    'html/js/app.js',
    'html/js/config.js',
    'html/assets/**/*'
}

client_script 'client.lua'