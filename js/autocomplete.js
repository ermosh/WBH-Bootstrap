$('.typeahead').typeahead({
  minLength: 0,
  highlight: true,
},
{
  name: 'my-dataset',
  source: mySource
});