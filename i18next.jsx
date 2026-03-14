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
          "View All": "View All",
          "Running": "Running",
          "Sneakers": "Sneakers",
          "Basketball": "Basketball",
          "Casual": "Casual",
          "Boots": "Boots",
          "Sandals": "Sandals",
          "FAQ": "FAQ",
          "Shipping & Returns": "Shipping & Returns",
          "Size Guide": "Size Guide",
          "Contact Us": "Contact Us",
          "Track Order": "Track Order",
          "Our Story": "Our Story",
          "Sustainability": "Sustainability",
          "Athletes": "Athletes",
          "Careers": "Careers",
          "Store Locator": "Store Locator",
          "Help": "Help",
          "Privacy": "Privacy",
          "About": "About",
          "Terms": "Terms",
          "Premium footwear for every step of your journey. From athletic performance to everyday comfort.": "Premium footwear for every step of your journey. From athletic performance to everyday comfort.",
          "© 2026 Stride. All rights reserved.": "© 2026 Stride. All rights reserved.",
          "Happy Customers": "Happy Customers",
          "Average Rating": "Average Rating",
          "Styles Available": "Styles Available",
          "Step Into": "Step Into",
          "Your Best": "Your Best",
          "Browse Categories": "Browse Categories",
          "Shop Now": "Shop Now",
          "Explore":"Explore",
          "Adding...":"Adding...",
          "Add to Cart":"Add to Cart",
          "Customer Reviews":"Customer Reviews",
          "Free Shipping":"Free Shipping",
          "On orders over $75":"On orders over $75",
          "60-Day Returns":"60-Day Returns",
          "Try it, love it":"Try it, love it",
          "reviews":"reviews"

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
          "View All": "عرض الكل",
          "Running": "الجري",
          "Sneakers": "السناكير",
          "Basketball": "كرة السلة",
          "Casual": "كلاسيك",
          "Boots": "البوتات",
          "Sandals": "السندالات",
          "FAQ": "الأسئلة الشائعة",
          "Shipping & Returns": "الشحن والعودة",
          "Size Guide": "دليل الحجم",
          "Contact Us": "اتصل بنا",
          "Track Order": "تتبع الطلب",
          "Our Story": "قصةنا",
          "Sustainability": "الاستدامة",
          "Athletes": "الرياضي",
          "Careers": "الوظائف",
          "Store Locator": "الموقع",
          "Help": "المساعدة",
          "Privacy": "الخصوصية",
          "About": "حول",
          "Terms": "الشروط",
          "Premium footwear for every step of your journey. From athletic performance to everyday comfort.": "أحذية فاخرة لكل خطوة في رحلتك. من الأداء الرياضي إلى الراحة اليومية.",
          "© 2026 Stride. All rights reserved.": "© 2026 Stride. جميع الحقوق محفوظة.",
          "Happy Customers": "العملاء سعداء",
          "Average Rating": "التقييم المتوسط",
          "Styles Available": "الأنماط المتاحة",
          "Step Into": "Step Into",
          "Your Best": "Your Best",
          "Browse Categories": "تصفح التصنيفات",
          "Shop Now": "تسوق الآن",
          "Explore":"استكشف",
          "Adding...":"جاري الاضافة...",
          "Add to Cart":"اضافة اللى السلة",
          "Customer Reviews":"تقييمات العملاء",
          "Free Shipping":"شحن مجاني",
          "On orders over $75":"فوق 75 دولار",
          "60-Day Returns":"الارجاع خلال 60 يوم",
          "Try it, love it":"جربها، حتعجبك",
          "reviews":"تقييمات"
          
        }
      }
    },
    fallbackLng: "en",

  });

 export default i18n;



