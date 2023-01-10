import Swal from 'sweetalert2';

export const entryModal = (titleEntry) => {
    Swal.fire({
        title: titleEntry,
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (true) {
          Swal.fire({
            title: `Entry Success`,
            imageUrl: result.value.avatar_url
          })
        }
      })
}
