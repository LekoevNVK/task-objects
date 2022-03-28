/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male' && !data.hasOwnProperty('income')) {
        data.income = 100000;
    }
    return { ...data };
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const array = [];
    for (const key in obj1) {
        array.push(key);
    }
    for (const key in obj2) {
        array.push(key);
    }
    for (const key in obj3) {
        array.push(key);
    }
    return array.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    const array = [];
    function findClones(_obj) {
        const cloneObj = {};
        for (const i in _obj) {
            if (_obj[i] instanceof Object) {
                cloneObj[i] = findClones(_obj[i]);
                continue;
            }
            cloneObj[i] = _obj[i];
        }
        return cloneObj;
    }
    for (let i = 0; i < count; i++) {
        obj.id = i;
        array.push(findClones(obj));
    }
    return array;
}
