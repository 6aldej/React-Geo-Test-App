// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase
const toCamelCase = (user) => {
    let str = '';
    const edUser = user.replace(/-/g, ' ').replace(/_/g, ' ');   
      for (let i = 0; i < edUser.length; i++ ) {
        let a = edUser[i - 1];
        if ( a == 0 || a === undefined) {
            str += edUser[i].toUpperCase(); 
        } else {
            str += edUser[i];
        }
      }
      return str;
}

export default toCamelCase;