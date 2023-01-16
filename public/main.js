function init() {
    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result
        console.log(input.files[0])
        console.log(base64)
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0])
    })
}

init()