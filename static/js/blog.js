document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Manan Tyagi will crack Gsoc2021 at any cost, now he is at full throtel")
    let sc = document.createElement('script')
    sc.setAttribute('src', "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js");
    document.head.appendChild(sc);
    sc.onload = () => {

        tinymce.init({
            selector: '#id_content',
            paste_data_images: true,

        });
    }
});