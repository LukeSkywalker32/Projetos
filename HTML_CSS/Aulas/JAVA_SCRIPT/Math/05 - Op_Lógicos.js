/*
    Operadores Lógicos

    && -> AND -> E
        true && true && true = true
        true && true && false = false
        true && false && false = false
        false && false && false = false

    || -> OR -> OU
        true || true || true = true
        true || true || false = true
        true || false || false = true
        false || false || false = false

    ! -> NOT -> NÃO => operador de negação, transforma o valor lógico em seu oposto
        !true = false
        !false = true
*/

// AND examplo
const hasLicense = true;
const hasAge = true;
const canDrive = hasLicense && hasAge; // true

// OR examplo
const hasCreditCard = false;
const hasCash = true;
const canPay = hasCreditCard || hasCash; // true

// NOT examplo
const isBlocked = false;
const canAccess = !isBlocked; // true

// Complex examples
const age = 25;
const hasId = true;
const canBuyDrinks = age >= 21 && hasId; // true

// Multiple conditions
const isWeekend = true;
const isHoliday = false;
const isOffDay = isWeekend || isHoliday; // true

// Combining operators
const isLoggedIn = true;
const isAdmin = false;
const isSuperUser = false;
const hasAccess = isLoggedIn && (isAdmin || isSuperUser); // false