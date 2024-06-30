import { Comic } from './interfaces';

function fetchComic(id: number): Promise<Comic> {
    return fetch(`/api/comics/${id}`)
        .then(response => response.json())
        .then((data: Comic) => {
            // Обработка данных здесь, если нужно
            return data;
        });
}

export default fetchComic;
