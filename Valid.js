/*4. Реализуйте класс `Валидатор`, который будет проверять строки. 
К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true,
 если не является - то false. Кроме того, класс будет иметь следующие методы: 
 метод `isDomain` для проверки домена, метод `isDate` для проверки даты
  и метод `isPhone` для проверки телефона.
    
    Сделайте 2 версии этого класса - стандартную и статическую.
    
    ```jsx
    //стандартная вызывается вот так
    var validator **=** new Validator();
    console.log(validator.isEmail('alisa@mail.ru'));
    console.log(validator.isDomain('itgirlschool.ru'));
    console.log(validator.isDate('12.05.2021'));
    console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
    
    //а статическая так
    console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
    console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
    console.log(ValidatorStatic.isDate('12.05.2021'));
    console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
    ```*/
    class Validator {
        constructor() {
    
        }
        isEmail(str) {
            return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
        }
        isDomain(str) {
            return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
        }
        isDate(str) {
            let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
            return date === null ? false : true;
        }
        isPhone(str) {
            let phone = str.match(/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/);
            return phone === null ? false : true;
        }
    
    }
    let validator = new Validator();
    console.log(validator.isEmail('alisa@mail.ru'));
    console.log(validator.isDomain('itgirlschool.ru'));
    console.log(validator.isDate('12.05.2021'));
    console.log(validator.isPhone('+7(915)123-45-67'));
