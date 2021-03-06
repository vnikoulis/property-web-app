(function () {
    const $modalElement = $('#remove_owner');

    $modalElement.on('show.bs.modal', function (event) {
        let modalButton = $(event.relatedTarget);
        let id = modalButton.closest('[data-id]').data('id');

        let modalTitle = $('.modal-title');
        modalTitle.text(`Confirm Owner Delete`);

        let deleteForm = $('#deleteForm_owner');

        deleteForm.attr('action', '/admin/owner/'+id+'/delete');
    });
})();