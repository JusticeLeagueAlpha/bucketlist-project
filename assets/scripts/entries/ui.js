'use strict';

$.fn.clearForm = function() {
  return this.each(function() {
    let type = this.type, tag = this.tagName.toLowerCase();
    if (tag === 'form')
      {return $(':input',this).clearForm();}
    if (type === 'text' || type === 'password' || tag === 'textarea')
      {this.value = '';
    }else if (type === 'checkbox' || type === 'radio'){
      this.checked = false;
    }else if (tag === 'select'){
      this.selectedIndex = -1;
  }});
};

const success = (data) => {
  console.log(data);
  $('.create-entry').clearForm();
};

const failure = (error) => {
  console.error(error);
};

const patchSuccess = (id) => {
  console.log(id);
  $('.' + id).addClass('completed-goals');
};
const indexEntriesSuccess = (data) => {
  $('.entries-container').html('');

  const viewIndexEntries = require('../templates/index-entries.handlebars');
  $('.entries-container').html(viewIndexEntries({
    entries: data.entries
  }));
  console.log(data);
};


const indexCompleteEntiresSuccess  =(data) => {
  $('.entries-container').html('');

const viewShowCompleted= require('../templates/completed-entries.handlebars');
  $('.entries-container').html(viewShowCompleted({
   entries: data.entries
}));
};

const showEntriesCompleteSuccess = (data) => {
  $('.entries-container').html('');

  const showEntriesComplete =require('../templates/show-entries-complete.handlebars');
  $('.entries-container').html(showEntriesComplete({
    entries: data.entries
  }));
};
const showEntriesSuccess = (data) => {
  $('.entries-container').html('');

  const viewShowEntries = require('../templates/show-entries.handlebars');
  $('.entries-container').html(viewShowEntries({
    entries: data.entries
  }));
  console.log(data);
};

// const uploadImageSuccess = (data) => {
//   console.log(data);
// };

module.exports = {
  success,
  failure,
  indexEntriesSuccess,
  showEntriesSuccess,
  patchSuccess,
  showEntriesCompleteSuccess,
  indexCompleteEntiresSuccess
  // uploadImageSuccess,
};
