const expressions = {
    fourletters: /^[a-zA-ZÀ-ÿ\s]{4,60}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/,
    lesseight: /^.{3,8}$/,
    cardnumber: /^\d{15,16}$/,
    fournumbers: /^\d{4}$/,
    threenumbers: /^\d{3}$/,
    expdate: /^(((20{1})(22{1})(-)(0[6-9]{1}|1[012]{1}))|((20{1})(2[3-9])(-)(0[1-9]{1}|1[012]{1}))|((20{1})([3-5]\d)(-)(0[1-9]{1}|1[012]{1})))$/
}

export default expressions