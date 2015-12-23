'use strict';

module.exports = Object.freeze({
  email: /\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,3})+$/,
  phone: /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/,
  integer: /[0-9]+$/
});
