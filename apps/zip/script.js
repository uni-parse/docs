
function download(){
    let zip = new JSZip()
 
    let files = document.getElementById('files')
 
    console.log(files.files)
 
    Array.from(files.files).forEach((f,i) => {
        zip.file(f.name,f)
    })
 
    zip.generateAsync({type:'blob'})
    .then((content) => {
        saveAs(content,"output.zip")
    })
}