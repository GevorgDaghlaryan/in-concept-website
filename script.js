// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", ()=>{
  navMenu.classList.toggle("active");
});
// Accordion
document.querySelectorAll(".accordion-header").forEach(btn=>{
  btn.addEventListener("click", function(){
    const content=this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight=null;
    }else{
      content.style.maxHeight=content.scrollHeight+"px";
    }
  });
});

// Scroll Animation
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const windowHeight=window.innerHeight;
    const elementTop=el.getBoundingClientRect().top;
    if(elementTop<windowHeight-100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

// Form
function validateForm(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let message=document.getElementById("message").value;
  if(name===""||email===""||message===""){
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent!");
  return false;
}

// Translations (կրճատ օրինակ — կարող ես ամբողջ երկար տեքստը տեղադրել այստեղ)
const translations = {

hy: {
nav_home:"Գլխավոր",
nav_about:"Մեր մասին",
nav_services:"Ծառայություններ",
nav_contact:"Կապ",

hero_title:"Հաշվապահական և հարկային համապարփակ լուծումներ",
hero_sub:"Վստահելի և հաշվարկված ֆինանսական գործընկեր Ձեր բիզնեսի կայուն զարգացման համար",

about_title:"Մեր մասին",
about_text:`Ին Քոնսեփթ ՍՊԸ-ն հիմնադրվել է 2019 թվականին՝ նպատակ ունենալով առաջարկել հաշվապահական և ֆինանսական խորհրդատվության ժամանակակից, անվտանգ և հաշվարկված լուծումներ։ Սկսած առաջին օրերից՝ ընկերությունը կառուցվել է վստահության, մասնագիտական բարձր չափանիշների և հաճախորդակենտրոն մոտեցման հիման վրա։

Մեր թիմը կազմված է Հայաստանի Հաշվապահների Պալատի կողմից որակավորված փորձագետ հաշվապահներից, ովքեր յուրաքանչյուր նախագծի մոտենում են խորքային վերլուծությամբ և բարձր պրոֆեսիոնալ պատասխանատվությամբ։ Մենք կարևորում ենք ոչ միայն թվերի ճշգրտությունը, այլև բիզնեսի ռազմավարական տեսլականը՝ օգնելով պատվիրատուներին կայացնել մտածված և արդյունավետ ֆինանսական որոշումներ։

Ին Քոնսեփթում մենք հավատում ենք երկարաժամկետ համագործակցությանը։ Այն կառուցվում է թափանցիկ աշխատանքի, օպերատիվ արձագանքի և մշտապես զարգացող փորձագիտական գիտելիքների վրա։ Մեր նպատակն է լինել այն գործընկերը, որի վրա կարող եք ամբողջությամբ վստահել Ձեր բիզնեսի ֆինանսական կողմը։`,

services_title:"Ծառայություններ",

s1_title:"Իրավաբանական անձանց և ԱՁ գրանցում",
s1_text:`Ընկերությունը տրամադրում է իրավաբանական անձանց և անհատ ձեռնարկատերերի գրանցման ամբողջական ծառայություններ՝ ապահովելով գործընթացի արագ, օրինական և անխափան իրականացում։ Մենք իրականացնում ենք անհրաժեշտ փաստաթղթերի պատրաստում, կանոնադրությունների կազմում, հիմնադիր որոշումների ձևակերպում, իրական շահառուների հայտարարագրերի ներկայացում և ներկայացուցչություն պետական ռեգիստրում։

Բացի նոր գրանցումներից, իրականացվում են նաև կանոնադրական փոփոխություններ՝ ներառյալ կանոնադրական կապիտալի փոփոխություն, հասցեի կամ անվանման փոփոխություն և դրանց պետական գրանցում։`,

s2_title:"Հարկային խորհրդատվություն",
s2_text:`Ընկերությունը տրամադրում է համապարփակ հարկային խորհրդատվություն՝ ուղղված հարկային ռիսկերի նվազեցմանը և օրենսդրության ճիշտ կիրառմանը։ Յուրաքանչյուր հարց ուսումնասիրվում է անհատապես՝ հաշվի առնելով գործունեության առանձնահատկությունները և հաշվառման մեթոդները։

Ծառայությունը ներառում է պետական մարմիններից պարզաբանումների ստացման ուղեկցում, մեթոդաբանական աջակցություն, փաստաթղթաշրջանառության կազմակերպման խորհրդատվություն և հարկային հաշվարկների մասնագիտական ուղղորդում։`,

s3_title:"Հարկային հաշվառում (աութսորս)",
s3_text:`Մենք տրամադրում ենք հարկային հաշվառման ամբողջական աութսորս ծառայություններ՝ սկսած բիզնեսի գրանցման պահից մինչև հաշվառման լիարժեք վարում գործունեության ամբողջ ընթացքում։

Ծառայությունը ներառում է հարկային հաշվարկների իրականացում, հաշվետվությունների պատրաստում և ներկայացում, հարկային պարտավորությունների վերահսկում և օրենսդրական փոփոխություններին համապատասխանեցում։`,

s4_title:"Հաշվառման վերականգնում և ծրագրերի ներդրում",
s4_text:`Ընկերությունը իրականացնում է հաշվապահական և հարկային հաշվառման վերականգնում այն դեպքերում, երբ հաշվառումը կատարվել է ոչ ամբողջական կամ սխալ ձևով։

Բացի այդ, մենք իրականացնում ենք հաշվառման ծրագրերի ընտրություն, ներդրում և հարմարեցում՝ ապահովելով արդյունավետ և վերահսկելի հաշվառման համակարգ։`,

s5_title:"Պետական գնումներ և տենդերներ",
s5_text:`Մենք տրամադրում ենք պետական գնումների գործընթացում մասնակցության մասնագիտական աջակցություն՝ ապահովելով տենդերային փաթեթների ամբողջական պատրաստում և ճիշտ ներկայացում։

Իրականացվում է հայտարարությունների մշտադիտարկում, պահանջների ուսումնասիրություն, փաստաթղթերի ձևակերպում և հայտերի տեխնիկական ու ֆինանսական մասերի կազմում։`,

s6_title:"Ծառայություններ ֆիզիկական անձանց համար",
s6_text:`Ընկերությունը տրամադրում է ծառայություններ նաև ֆիզիկական անձանց՝ ներառյալ տարեկան եկամուտների հայտարարագրերի կազմում և ներկայացում, անհատական հարկային խորհրդատվություն և վարձակալությամբ տրամադրված գույքի հարկային հաշվարկների իրականացում։`,

contact_title:"Կապ մեզ հետ",
office_address_title:"Գրասենյակի հասցե",
phone_title:"Հեռախոս",
form_name:"Անուն, ազգանուն",
form_email:"Էլ․ հասցե",
form_subject:"Թեմա",
form_message:"Ձեր հաղորդագրությունը",
send_btn:"Ուղարկել"
},

ru: {
nav_home:"Главная",
nav_about:"О нас",
nav_services:"Услуги",
nav_contact:"Контакты",

hero_title:"Комплексные бухгалтерские и налоговые решения",
hero_sub:"Надежный финансовый партнер для устойчивого развития вашего бизнеса",

about_title:"О нас",
about_text:`Компания In Concept была основана в 2019 году с целью предоставления современных и безопасных бухгалтерских решений.

Наша команда состоит из квалифицированных специалистов, которые подходят к каждому проекту с профессиональной ответственностью и глубоким анализом. Мы ориентированы на долгосрочное сотрудничество и прозрачность работы.`,

services_title:"Услуги",

s1_title:"Регистрация компаний и ИП",
s1_text:"Полное сопровождение процесса регистрации юридических лиц и индивидуальных предпринимателей, включая подготовку документов и представительство в государственных органах.",

s2_title:"Налоговое консультирование",
s2_text:"Комплексные консультации по вопросам налогового законодательства и минимизации рисков.",

s3_title:"Налоговый учет (аутсорсинг)",
s3_text:"Полное ведение налогового учета, подготовка и сдача отчетности.",

s4_title:"Восстановление учета и внедрение программ",
s4_text:"Анализ, корректировка и внедрение учетных систем.",

s5_title:"Государственные закупки и тендеры",
s5_text:"Подготовка тендерной документации и сопровождение участия.",

s6_title:"Услуги для физических лиц",
s6_text:"Подготовка деклараций и индивидуальные налоговые консультации.",

contact_title:"Связаться с нами",
office_address_title:"Адрес офиса",
phone_title:"Телефон",
form_name:"Имя и фамилия",
form_email:"Эл. почта",
form_subject:"Тема",
form_message:"Ваше сообщение",
send_btn:"Отправить"
},

en: {
nav_home:"Home",
nav_about:"About",
nav_services:"Services",
nav_contact:"Contact",

hero_title:"Comprehensive Accounting & Tax Solutions",
hero_sub:"Your trusted financial partner for sustainable business growth",

about_title:"About Us",
about_text:`In Concept LLC was founded in 2019 to provide modern, secure and calculated accounting solutions.

Our team consists of certified professionals who approach every project with deep analysis and professional responsibility. We focus on long-term cooperation, transparency and strategic financial support.`,

services_title:"Services",

s1_title:"Company & Sole Proprietor Registration",
s1_text:"Full registration support including document preparation and state representation.",

s2_title:"Tax Consulting",
s2_text:"Comprehensive tax advisory services and risk minimization strategies.",

s3_title:"Tax Accounting (Outsourcing)",
s3_text:"Full tax accounting and reporting services.",

s4_title:"Accounting Recovery & Software Implementation",
s4_text:"Accounting recovery, correction and system implementation.",

s5_title:"Public Procurement & Tenders",
s5_text:"Preparation of tender documentation and participation support.",

s6_title:"Services for Individuals",
s6_text:"Annual income declarations and personal tax advisory services.",

contact_title:"Contact Us",
office_address_title:"Office Address",
phone_title:"Phone",
form_name:"Full Name",
form_email:"Email",
form_subject:"Subject",
form_message:"Your Message",
send_btn:"Send"
}

};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText=translations[lang][el.dataset.key];
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    el.placeholder=translations[lang][el.dataset.keyPlaceholder];
  });
}
setLang("hy");