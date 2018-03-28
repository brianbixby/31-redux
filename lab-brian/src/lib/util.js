'use strict';

export const renderIf = (condition, component) => condition ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => options[key]).join(' ');