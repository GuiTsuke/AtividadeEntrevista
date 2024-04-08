
//$(document).ready(function () {
//    $('#formCadastro').submit(function (e) {
//        e.preventDefault();

//        // Obtém os valores dos campos do formulário
//        var nome = $('#nomeBeneficiario').val();
//        var cpf = $('#cpfBeneficiario').val();

//        // Envia os dados do formulário por AJAX
//        $.ajax({
//            url: urlPost,
//            method: "POST",
//            data: {
//                "NOME": nome,
//                "CPF": cpf
//            },
//            error: function (r) {
//                if (r.status == 400)
//                    ModalDialog("Ocorreu um erro", r.responseJSON);
//                else if (r.status == 500)
//                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor");
//            },
//            success: function (r) {
//                // Exibe uma mensagem de sucesso
//                ModalDialog("Sucesso!", r);

//                // Limpa os campos do formulário
//                $('#formBeneficiarioModal')[0].reset();
//            }
//        });
//    });
//});

//function ModalDialog(titulo, texto) {
//    var random = Math.random().toString().replace('.', '');
//    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
//        '        <div class="modal-dialog">                                                                                 ' +
//        '            <div class="modal-content">                                                                            ' +
//        '                <div class="modal-header">                                                                         ' +
//        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
//        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
//        '                </div>                                                                                             ' +
//        '                <div class="modal-body">                                                                           ' +
//        '                    <p>' + texto + '</p>                                                                           ' +
//        '                </div>                                                                                             ' +
//        '                <div class="modal-footer">                                                                         ' +
//        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
//        '                </div>                                                                                             ' +
//        '            </div><!-- /.modal-content -->                                                                         ' +
//        '  </div><!-- /.modal-dialog -->                                                                                    ' +
//        '</div> <!-- /.modal -->                                                                                        ';

//    $('body').append(texto);
//    $('#' + random).modal('show');
