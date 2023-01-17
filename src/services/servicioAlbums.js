export async function servicioAlbumsTop(){

    const URL="https://api.spotify.com/v1/artists/3qAPxVwIQRBuz5ImPUxpZT/albums?include_groups=single&market=us&limit=10&offset=5"

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQBpNUm0cTVHFmGep5lhoQJOTrQoXF83ewOFjrL-wtFOZsrEKn8sNhjdXw3GiD88xVT4oTU5xJfuQvi--bblh3inmys0DnMqt9cfYf8GyDxWMLbfYANjl2KG4im-UDq0_IwMTNpSupgT8LL0e4-BQxjpzbcBhp7CdDhJaf4Olk3_b49frM49Q45Ojb103gVzy-o"}

    }

    let respuesta=await fetch(URL,PETICION)
    let albums=await respuesta.json()

    return albums
}