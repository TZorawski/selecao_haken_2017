$(function () {

  $('input:checkbox, input:radio').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    inheritClass: true
  })

  $('#cp-ex-1').simplecolorpicker ();

  $('#cp-ex-2').simplecolorpicker({ 
    picker: true
  });

  $('#count-textarea1').textareaCount({
    maxCharacterSize: -2,
    warningNumber: 40
  })

  $('#count-textarea2').textareaCount({
    maxCharacterSize: 200,
    warningNumber: 40,
    displayFormat : '#input/#max | #words words'
  })

  $('#s2_basic').select2 ({
    allowClear: true,
    placeholder: "Select..."
  })

  $('#s2_basic1').select2 ({
    allowClear: true,
    placeholder: "Select..."
  })

  $('#s2_multi_value').select2 ({
    placeholder: "Select..."
  })

  $('#s2_tokenization').select2 ({
    placeholder: "Select...",
    tags:["red", "green", "blue", "black", "orange", "white"],
    tokenSeparators: [",", " "]
  })

  $('#as-ex-1').autosize ()
  $('#as-ex-2').autosize ().addClass ('autosize-animate')
      
})