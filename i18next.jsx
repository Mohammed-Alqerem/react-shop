import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {

          "Home": "Home",
          "Login": "Login",
          "Register": "Register",
          "Cart": "Cart",
          "Categories": "Categories",
          "Checkout": "Checkout",
          "Products": "Products",
          "Profile": "Profile",
          "Settings": "Settings",
          "Shop": "Shop",
          "Wishlist": "Wishlist",
          "Logout": "Logout",
          "View All":"View All"
        }
      },
      ar: {
        translation: {

          "Home": "الرئيسية",
          "Login": "تسجيل الدخول",
          "Register": "تسجيل",
          "Cart": "السلة",
          "Categories": "التصنيفات",
          "Checkout": "الدفع",
          "Products": "المنتجات",
          "Profile": "الملف الشخصي",
          "Settings": "الإعدادات",
          "Shop": "التسوق",
          "Wishlist": "المفضلة",
          "Logout": "تسجيل الخروج",
           "View All":"عرض الكل"
        }
      }
    },
    fallbackLng: "en",

  });

 export default i18n;