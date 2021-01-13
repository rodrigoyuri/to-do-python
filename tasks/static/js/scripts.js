$(document).ready(function() {

    var deleteBtn = $('.delete-btn')

    var searchBtn = $('#search-btn')

    var searchForm = $('#search-form')


    $(deleteBtn).on('click', function(el) {
        el.preventDefault()

        let deleteLink = $(this).attr('href')
        let result = confirm('Quer deletar esta tarefa?')

        if(result) {
            window.location.href = deleteLink
        }
    })

    $(searchBtn).on('click', function() {
        searchForm.submit()
    })
})