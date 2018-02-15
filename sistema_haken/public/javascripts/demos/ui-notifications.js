$(function () {

  $('.howlerSuccess').click (function (e) {

    $.howl ({
      type: $(this).data ('type')
      , title: 'Exclusão realizada com Sucesso'
      , content: 'Atualize a página para vizualizar os campos atualizados.'
      , sticky: $(this).data ('sticky')
      , lifetime: 7500
      , iconCls: $(this).data ('icon')
    });

  });

  $('.howlerFail').click (function (e) {

    $.howl ({
      type: $(this).data ('type')
      , title: 'Não foi possível realizar essa Exclusão'
      , content: 'Por favor tente de novo, caso o erro persista, entre em contato.'
      , sticky: $(this).data ('sticky')
      , lifetime: 7500
      , iconCls: $(this).data ('icon')
    });

  });

});
