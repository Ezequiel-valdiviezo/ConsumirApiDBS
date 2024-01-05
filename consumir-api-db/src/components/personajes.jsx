import React, { useState, useEffect } from "react";
import '../estilos/personajes.css';

const Personajes = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters');
                if (!response.ok) {
                    throw new Error('Hubo un error en el response');
                }
                const data = await response.json();
                setCharacters(data.items.map(character => ({ ...character, showDescription: false })));
            } catch (error) {
                console.error('Error al traer los personajes:', error);
            }
        };

        fetchCharacters();
    }, []);

    const verDescripcion = (characterId) => {
        setCharacters(prevCharacters => prevCharacters.map(character =>
            character.id === characterId ? { ...character, showDescription: true } : character
        ));
    };

    const ocultarDescripcion = (characterId) => {
        setCharacters(prevCharacters => prevCharacters.map(character =>
            character.id === characterId ? { ...character, showDescription: false } : character
        ));
    };

    return (
        <div className="personajes">
            <h2>Personajes de Dragon Ball API</h2>
            <div className='contenedorPersonajes'>
                {characters.map(character => (
                    <div key={character.id} className="cardPersonaje">
                        <img src={character.image} alt={character.name} />
                        <div className="datos">
                            <p id="name">{character.name}</p>
                            <p>{character.race}</p>
                            <p>Personaje N{character.id}</p>
                            <p>Poder: {character.ki}</p>
                            <p>Máximo poder: {character.maxKi}</p>

                            {character.showDescription ? (
                                <div>
                                    <p>Descripción: {character.description}</p>
                                    <button onClick={() => ocultarDescripcion(character.id)}>Ver menos</button>
                                </div>
                            ) : (
                                <button onClick={() => verDescripcion(character.id)}>Ver descripción</button>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Personajes;
