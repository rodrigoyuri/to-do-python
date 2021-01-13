$(document).ready(function() {

    var deleteBtn = $('.delete-btn')

    $(deleteBtn).on('click', function(el) {
        el.preventDefault()

        let deleteLink = $(this).attr('href')
        let result = confirm('Quer deletar esta tarefa?')

        if(result) {
            window.location.href = deleteLink
        }
    })
})