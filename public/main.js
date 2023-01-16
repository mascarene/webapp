function init() {
    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            // Search for the metadata prefix and replace it with an empty string
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
        console.log(input.files[0])
        console.log(base64)
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0])
    })
}

init()