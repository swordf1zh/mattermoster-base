#!/usr/bin/env node

const MattermosterClass = require('mattermoster');

/**
 * Mattermoster API instance
 */
const mattermoster = new MattermosterClass;
// Use i18n if you want to change default API language:
// const mattermoster = new MattermosterClass('es');

/**
 * INSTALL PLUGINS HERE
 *
 * Eg:
 * const todoPlugin = require('mattermoster-todo-plugin');
 * const pluginEndpoint = '/todo';
 * mattermoster.addPlugin(pluginEndpoint, todoPlugin);
 */

/**
 * Run the server
 */
mattermoster.init();