const validatePhoneAr = /^(\+[0-9]{3}|1)?\s*\d{3}[- ]?\d{3}[- ]?\d{4}$/;
const validatePhonePe = /^(\+[0-9]{2})?((1[1-9]|9[1-9])[0-9]{7})$/;
const validatePhoneCl = /^(\+[0-9]{2})?(9\d{8})$/;
const validatePhoneCo = /^(3(0[0-5]|1[0-9]|2[0-7])|3(1[6-9]|2[0-4]|3[0-4])|4(0[1-9]|1[0-9]|2[0-5])|5(0[1-7]|1[0-9]|2[0-3]|3[0-9]|4[0-9]|5[0-8]|6[0-4])|6(1[0-4]|2[0-5]|4[0-5])|7(0[1-9]|1[0-3]|3[0-3]|4[0-9])|8(0[1-9]|1[0-9]|2[0-8]|3[0-6]))\d{7}$/;
const validatePhoneVe  = /^(212|412|416|426|414|424|418|424|426|412|424|416|424|412|414|424|212|412|414|424|414|424|416|426|412|414|424|416|426|212|412|416|426|212|414|424|212|412|414|424|416|212|412|416|426|412|416|424|416|424|212|414|416|426|414|424|418|424|416|426|412|424|416|426)\d{7}$/;
const emailRegex = /\S+@\S+\.\S+/;
const fechaRegex = /^\d{4}-\d{2}-\d{2}$/
const horaRegex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/
export {
    validatePhoneAr,
    validatePhonePe,
    validatePhoneCl,
    validatePhoneCo,
    validatePhoneVe,
    emailRegex,
    fechaRegex,
    horaRegex
}