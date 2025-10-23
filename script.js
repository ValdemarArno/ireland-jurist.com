// Translations
const translations = {
    ru: {
        nav_about: "Обо мне",
        nav_services: "Услуги",
        nav_experience: "Опыт",
        nav_contact: "Контакты",
        hero_title: "Вальдемар Арно",
        hero_subtitle: "Международный Юрист & Юридический Консультант",
        hero_desc: "Специализируюсь на ирландском, европейском и международном праве с обширным опытом в трансграничных юридических вопросах.",
        hero_contact: "Связаться",
        hero_about: "Узнать больше",
        about_title: "Обо мне",
        about_name: "Вальдемар Арно",
        about_text1: "Международный юрист с опытом в ирландском и европейском праве. Родился в 2000 году, применяю современные подходы к традиционной юридической практике.",
        about_text2: "Моя практика сосредоточена на предоставлении комплексных юридических решений для международных клиентов в различных юрисдикциях.",
        stat_clients: "Клиентов",
        stat_years: "Лет опыта",
        stat_cases: "Рассмотренных дел",
        services_title: "Юридические Услуги",
        service1_title: "Международное право",
        service1_desc: "Трансграничные юридические консультации и разрешение споров.",
        service2_title: "Корпоративное право",
        service2_desc: "Создание бизнеса и корпоративное управление в Ирландии и ЕС.",
        service3_title: "Законодательство ЕС",
        service3_desc: "Консультации по правовой системе Европейского Союза.",
        experience_title: "Опыт работы",
        exp1_title: "Старший международный юрист",
        exp1_desc: "Руководство трансграничными юридическими делами и международными переговорами.",
        exp2_title: "Специалист по праву ЕС",
        exp2_desc: "Консультирование клиентов по нормам ЕС и соответствию требованиям.",
        exp3_title: "Младший юрисконсульт",
        exp3_desc: "Начало карьеры в международной юридической практике.",
        contact_title: "Свяжитесь со мной",
        contact_email: "Email",
        contact_phone: "Телефон",
        contact_location: "Местоположение",
        form_name: "Ваше имя",
        form_email: "Ваш email",
        form_message: "Ваше сообщение",
        form_button: "Отправить сообщение",
        footer_copyright: "© 2023 Вальдемар Арно. Все права защищены."
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_experience: "Experience",
        nav_contact: "Contact",
        hero_title: "Valdem'ar Arno",
        hero_subtitle: "International Lawyer & Legal Consultant",
        hero_desc: "Specializing in Irish, EU, and International Law with extensive experience in cross-border legal matters.",
        hero_contact: "Contact Me",
        hero_about: "Learn More",
        about_title: "About Me",
        about_name: "Valdem'ar Arno",
        about_text1: "International lawyer with expertise in Irish and European Union law. Born in 2000, I bring modern approaches to traditional legal practices.",
        about_text2: "My practice focuses on providing comprehensive legal solutions for international clients across various jurisdictions.",
        stat_clients: "Clients",
        stat_years: "Years Experience",
        stat_cases: "Cases Handled",
        services_title: "Legal Services",
        service1_title: "International Law",
        service1_desc: "Cross-border legal advice and dispute resolution.",
        service2_title: "Corporate Law",
        service2_desc: "Business establishment and governance in Ireland & EU.",
        service3_title: "EU Legislation",
        service3_desc: "Consulting on European Union legal framework.",
        experience_title: "Work Experience",
        exp1_title: "Senior International Lawyer",
        exp1_desc: "Leading cross-border legal cases and international negotiations.",
        exp2_title: "EU Law Specialist",
        exp2_desc: "Advising clients on European Union regulations and compliance.",
        exp3_title: "Junior Legal Counsel",
        exp3_desc: "Starting career in international law practice.",
        contact_title: "Get In Touch",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Your Message",
        form_button: "Send Message",
        footer_copyright: "© 2023 Valdem'ar Arno. All rights reserved."
    },
    ga: {
        nav_about: "Maidir Liom",
        nav_services: "Seirbhísí",
        nav_experience: "Taithí",
        nav_contact: "Teagmháil",
        hero_title: "Valdem'ar Arno",
        hero_subtitle: "Dlíodóir Idirnáisiúnta & Comhairleoir Dlí",
        hero_desc: "Ag speisialú i ndlí na hÉireann, an AE agus dlí idirnáisiúnta le taithí fhairsing i gcúrsaí dlí trasteorann.",
        hero_contact: "Déan Teagmháil Liom",
        hero_about: "Tuilleadh Eolais",
        about_title: "Maidir Liom",
        about_name: "Valdem'ar Arno",
        about_text1: "Dlíodóir idirnáisiúnta le saineolas i ndlí na hÉireann agus an Aontais Eorpaigh. Rugadh sa bhliain 2000, tugaim cur chuige nua-aimseartha do chleachtais dlí traidisiúnta.",
        about_text2: "Díríonn mo chleachtas ar réitigh dlí cuimsitheacha a sholáthar do chliaint idirnáisiúnta ar fud dlínsí éagsúla.",
        stat_clients: "Cliaint",
        stat_years: "Blianta Taithí",
        stat_cases: "Cásanna Láimhseáilte",
        services_title: "Seirbhísí Dlí",
        service1_title: "Dlí Idirnáisiúnta",
        service1_desc: "Comhairle dlí trasteorann agus réiteach achrainn.",
        service2_title: "Dlí Corparáideach",
        service2_desc: "Bunú gnó agus rialachas in Éirinn & AE.",
        service3_title: "Reachtaíocht an AE",
        service3_desc: "Comhairliúchán ar chreat dlí an Aontais Eorpaigh.",
        experience_title: "Taithí Oibre",
        exp1_title: "Dlíodóir Sinsearach Idirnáisiúnta",
        exp1_desc: "Ag treorú cásanna dlí trasteorann agus idirbhearta idirnáisiúnta.",
        exp2_title: "Saineolaí Dlí an AE",
        exp2_desc: "Ag comhairliú do chliaint ar rialacháin an Aontais Eorpaigh agus comhlíonadh.",
        exp3_title: "Comhairleoir Dlí Sóisearach",
        exp3_desc: "Ag tosú gairme i gcleachtas dlí idirnáisiúnta.",
        contact_title: "Déan Teagmháil Liom",
        contact_email: "Ríomhphost",
        contact_phone: "Fón",
        contact_location: "Suíomh",
        form_name: "D'Ainm",
        form_email: "Do Ríomhphost",
        form_message: "Do Theachtaireacht",
        form_button: "Seol Teachtaireacht",
        footer_copyright: "© 2023 Valdem'ar Arno. Gach ceart ar cosaint."
    }
};

// Language functions
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language selector
    const langSwitch = document.getElementById('languageSwitch');
    if (langSwitch) {
        langSwitch.value = lang;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Apply translations if we're on main page
    if (document.querySelector('.main-page')) {
        applyTranslations(savedLang);
        
        // Set up language switcher
        const langSwitch = document.getElementById('languageSwitch');
        if (langSwitch) {
            langSwitch.value = savedLang;
            langSwitch.addEventListener('change', function() {
                changeLanguage(this.value);
            });
        }
        
        // Contact form handler
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Message sent successfully!');
                this.reset();
            });
        }
    }
});