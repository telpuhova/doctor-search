import { getAll } from './../js/doctorLookup';
import { issueApiRequest } from './../js/doctorLookup';
import { nameApiRequest } from './../js/doctorLookup';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#issue-search-form").submit(function(event) {
    event.preventDefault();
    let issue = $("#issue").val();
    issueApiRequest(issue);
  })

  $("#name-search-form").submit(function(event) {
    event.preventDefault();
    let name = $("#doc-name").val();
    nameApiRequest(name);
  })

  $("#get-all").click(function() {
    getAll();
  })
});
