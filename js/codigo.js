const contenedor = document.querySelector("#galeria-albumes");

fetch("json/albumes.json")
    .then((res) => res.json())
    .then((albumes) => {
        let htmlAcumulado = "";
        albumes.forEach((album) => {
            htmlAcumulado += `
                <div class="col-12 col-md-6 col-lg-4 p-4">
                    <div class="card border rounded p-4 h-100">

                        <img src="${album.Imagen}" class="card-img-top rounded" alt="${album.Nombre}">

                        <h3 class="card-title">${album.Nombre}</h3>

                        <p class="card-text">${album.Año}</p>

                        <p class="card-text"><strong>Description:</strong> ${album.Descripción}</p>

                        <p class="card-text"><strong>Hits:</strong> ${album.Hits}</p>

                        <a href="${album.Link}" class="btn btn-primary">Listen on YouTube</a>

                    </div>
                </div>
            `;
        });
        contenedor.innerHTML = htmlAcumulado;
    });

const botoncolor = document.querySelector("#boton-color");
const body = document.querySelector("body");

const cambiarcolor = () => {
    body.classList.toggle("oscuro");};

botoncolor.addEventListener("click", cambiarcolor);

const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});