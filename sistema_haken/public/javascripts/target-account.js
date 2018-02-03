var target_account = function () {

  "use strict"

  var initPlaceholder = function () {
    $.support.placeholder = false
    var test = document.createElement('input')
    if('placeholder' in test) $.support.placeholder = true

    if (!$.support.placeholder) {
      $('.placeholder-hidden').show ()
    }
  }

  return {
    init: function() {
      initPlaceholder ()
    }
  }

}()

$(function () {
  target_account.init ()
})

//Vitor Settings
function popularEquip(x) {
  $.get("php/populaEquip/popId.php", {
    id: x
  },
  function(data, status) {
    $("#id").val(data);
  });

  $.get("php/populaEquip/popData.php", {
    id: x
  },
  function(data, status) {
    $("#date-2").val(data);
  });

  $.get("php/populaEquip/popOrigem.php", {
    id: x
  },
  function(data, status) {
    $("#s2_basic").select2("val", data);
  });

  $.get("php/populaEquip/popLocalizacao.php", {
    id: x
  },
  function(data, status) {
    $("#s2_basic1").select2("val", data);
  });

  $.get("php/populaEquip/popDescricao.php", {
    id: x
  },
  function(data, status) {
    $("#textarea").empty();
    $("#textarea").html(data);
  });
}

$(document).ready(function() {
  $("tr.es").click( function() {
    $.get("php/populaSala.php", {
      id: $(this).attr('id')
    },
    function(data, status) {
      $("#popularSala").html(data);
    });
  });

  $("tr.ee").click( function() {
    popularEquip($(this).attr('id'));

    $("[type='submit']").removeAttr("disabled");
    $("#btn-limpa").removeAttr("disabled");
    $("#velho_id").val($(this).attr('id'));
  });

  $("#btn-limpa").click( function() {
    if($('#velho_id').val() != "") {
      popularEquip($('#velho_id').val());
    } else {

    }
  });

  $("#apagaEquip").click( function() {
    $("#tabelaEquip tbody tr.checked").each( function() {
      $.get("php/apagaEquip.php", {
        id: $(this).find(':nth-child(2)').text()
      },
      function(data, status) {
        window.location.href = 'remocao.php';
      });
    });
  });

  $("#apagaSala").click( function() {
    $("#tabelaSala tbody tr.checked").each( function() {
      $.get("php/apagaSala.php", {
        id: $(this).find(':nth-child(2)').text()
      },
      function(data, status) {
        if(data == "") {
          window.location.href = 'remocao.php';
        } else {
          alert("Erro ao deletar Sala: Equipametos ligados a essa sala. Apague-os primeiro...");
        }
      });
    });
  });

  $("#moverEquip").click( function() {
    $("#resultado").empty(); 
    $("#tabelaEquip tbody tr.checked").each( function() {     
      $.get("php/geraEquip.php", {
        id: $(this).find(':nth-child(2)').text()
      },
      function(data, status) {
        $("#resultado").append(data);
      });
    });
  });

  $("#historico tr").each( function() {
    if($(this).find(':nth-child(2)').text() == $('#selectEquip select').val()) {
      $(this).css("display", "contents");
    } else {
      $(this).css("display", "none");
    }
  });

  $('#selectEquip select').on('change', function() {
    $("#historico tr").each( function() {
      if($(this).find(':nth-child(2)').text() == $('#selectEquip select').val()) {
        $(this).css("display", "");
      } else {
        $(this).css("display", "none");
      }
    });
  });

  $("#pesquisa").click( function() {
    $("div.sala").each( function() {
      if($(this).attr("name") == $("#pesquisa-texto").val().toUpperCase() || $("#pesquisa-texto").val() == "") {
        $(this).css("display", "");
      } else {        
        $(this).css("display", "none");
      }
    });
  });

  $("div.sala a.ola").click( function() {  
    $.get("php/equipamentoSala.php", {
      id: $(this).attr("name")
    },
    function(data, status) {
      $("#resultado").empty();      
      $("#resultado").html(data);
    });
  });

  $("#emprestar").click( function() {  
    $("#resultado tr").each( function() {
      $.get("php/emprestimo.php", {
        idEquip: $(this).find(':nth-child(1)').text(),
        idSala: $('select[name=localizacao]').val()
      },
      function(data, status) {
        window.location.href = 'emprestimos.php';
      });
    });
  });

  $("#mover").click( function() {  
    $("#resultado tr").each( function() {
      $.get("php/movimentacao.php", {
        idEquip: $(this).find(':nth-child(1)').text(),
        idSala: $('select[name=localizacao]').val()
      },
      function(data, status) {
        window.location.href = 'emprestimos.php';
      });
    });
  });
});