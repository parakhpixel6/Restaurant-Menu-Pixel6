"use strict"


const urlParams = new URLSearchParams(window.location.search);
const operation = urlParams.get('operation');
if (operation === 'delete') {
  del.click()
}