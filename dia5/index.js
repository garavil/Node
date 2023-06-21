async function obtenerInfo(nombrePokemon) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;
      const respuesta = await fetch(url);

      if (respuesta.ok) {
        const data = await respuesta.json();
        const nombre = data.name;
        const imagen = data.sprites.front_default;
        const habilidades = data.abilities.map((habilidad) => habilidad.ability.name);

        const resultado = document.getElementById("resultadoPoke");
        resultado.innerHTML = `
          <h2>${nombre}</h2>
          <img src="${imagen}" alt="Imagen de ${nombre}">
          <table>
            <tr>
              <th>Habilidades</th>
            </tr>
            ${habilidades.map((habilidad) => `<tr><td>${habilidad}</td></tr>`).join("")}
          </table>
        `;
      } else {
        console.log("Error al obtener los datos del Pokémon");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
}

function buscar() {
    const inputPokemon = document.getElementById("inputPokemon");
    const nombrePokemon = inputPokemon.value;

    if (nombrePokemon.trim() !== "") {
      obtenerInfo(nombrePokemon);
    }
    
}