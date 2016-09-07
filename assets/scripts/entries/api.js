'use strict';

const app = require('../app');

//gets all entries
const indexEntries = function (){
  return $.ajax({
    url: app.api + '/entries/',
    method: 'GET',
  });
};

//gets all user specific entries
const showEntries = function (){
  return $.ajax({
    url: app.api + '/user-entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};


const completeEntires = function(){
  return $.ajax({
    url: app.api + '/completed-entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};
const createEntry = function (data){
  return $.ajax ({
    url: app.api + '/entries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const patchEntry = function (id, isCompleted){
  return $.ajax ({
    url: app.api + '/entries/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "entry": {
        "completed": isCompleted
      }
    }
  });
};

const deleteEntry = function (id){
  return $.ajax ({
    url: app.api + '/entries/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};


module.exports = {
  indexEntries,
  showEntries,
  createEntry,
  patchEntry,
  deleteEntry,
  completeEntires
};
