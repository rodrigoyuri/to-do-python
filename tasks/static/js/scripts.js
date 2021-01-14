$(document).ready(function() {

    var baseUrl = 'http://localhost:8000/'
    var deleteBtn = $('.delete-btn')
    var searchBtn = $('#search-btn')
    var searchForm = $('#search-form')
    var filter = $('#filter')


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

    $(filter).change(function() {
        let filter = $(this).val()
        window.location.href = `${baseUrl}?filter=${filter}`
    })
})