let isSpanish = true;

function Copy(englishContent, spanishContent) {
    this.spanish = spanishContent;
    this.english = englishContent;

    this.getContent = function(languageState){
        if(!languageState) return this.spanish;
        else return this.english;
    };
}

const languageToggleCopy = new Copy('Español','English');

const header1Copy = new Copy('Únete a nuestro equipo hoy.',
        'Join our team today!');

const subHeaderCopy = new Copy('Experimenta una '+
            'formación de primera categoría y una compensación competitiva que '
            +'refleja tu dedicación para mantener un entorno limpio y '+
            'saludable','Experience top-notch training and competitive '
            +'compensation that reflects your dedication to maintaining a clean '
            +'and healthy environment');

const centerPromoCopy = new Copy('¡Regístrate ahora!','Register Today!')

const fnamePlaceHolder = new Copy('Nombre','First Name');
const lnamePlaceHolder = new Copy('Apellido','Last Name');
const emailPlaceHolder = new Copy('tu-correo@example.com','your-email@example.com');
const passwordPlaceHolder = new Copy('contraseña','password');
const submitBtnValue = new Copy('Enviar','Submit');

const languageToggle = document.querySelector('.toggle');

languageToggle.addEventListener('click', () => {
    isSpanish = !isSpanish;
    switchLanguage();
});

const switchLanguage = ()=>{
    const languageUsed = document.querySelector('.language .lang-selected');
    languageUsed.textContent = languageToggleCopy.getContent(isSpanish);

    const header = document.querySelector('.header-1')
    header.textContent = header1Copy.getContent(isSpanish);

    const subHeader = document.querySelector('.description');
    subHeader.textContent = subHeaderCopy.getContent(isSpanish);

    // const centerPromo = document.querySelector('.promo-copy .bolded');
    // centerPromo.textContent = centerPromoCopy.getContent(isSpanish);

    const fName = document.querySelector('.input-1');
    fName.placeholder = fnamePlaceHolder.getContent(isSpanish);

    const lName = document.querySelector('.input-2');
    lName.placeholder = lnamePlaceHolder.getContent(isSpanish);
    
    const email = document.querySelector('.input-3');
    email.placeholder = emailPlaceHolder.getContent(isSpanish);

    const password = document.querySelector('.input-4');
    password.placeholder = passwordPlaceHolder.getContent(isSpanish);

    const submitBtn = document.querySelector('.claim-button');
    submitBtn.value = submitBtnValue.getContent(isSpanish);

}