// Параметр numbers - строка из 10 символов
// её необходимо преобразовать в вид '7 (xxx) xxx-xxxx'
const toPhoneNumber = (numbers) => {
    const newNumbers = `7 (${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,10)}`
    return newNumbers;
}

export default toPhoneNumber;
