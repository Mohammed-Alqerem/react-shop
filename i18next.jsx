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
          "reviews":"reviews",
          "What Our Customers Say":"What Our Customers Say",
          "Join thousands of happy customers who have made Stride their go-to footwear brand":"Join thousands of happy customers who have made Stride their go-to footwear brand",
          "5-Star Reviews":"5-Star Reviews",
          "Would Recommend":"Would Recommend",
          "Shop By Product Category":"Shop By Product Category",
          "Find the perfect pair for every occasion":"Find the perfect pair for every occasion",
          "Shop All":"Shop All",
          "Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes.":"Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes.",
          "Join the Stride Club":"Join the Stride Club",
          "Get 15% off your first order, plus early access to new drops.":"Get 15% off your first order, plus early access to new drops.",
          "Enter your email":"Enter your email",
          "Subscribe":"Subscribe",
          "Email":"Email",
          "Ready to Step Up Your Game?":"Ready to Step Up Your Game?",
          "Join the Stride community and get 15% off your first order. Plus, early access to new releases and exclusive member-only deals.":"Join the Stride community and get 15% off your first order. Plus, early access to new releases and exclusive member-only deals.",
          "No spam, ever. Unsubscribe anytime.":"No spam, ever. Unsubscribe anytime.",
          "Download Our App":"Download Our App"
          
          


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
          "reviews":"تقييمات",
          "Step Into":"خطوة الى",
          "Your Best":"الافضل",
          "What Our Customers Say":"ماذا يقول عملاؤنا",
          "Join thousands of happy customers who have made Stride their go-to footwear brand":"انضم إلى آلاف العملاء السعداء الذين جعلوا من Stride علامتهم التجارية المفضلة للأحذية",
          "5-Star Reviews":"تقييمات 5 نجوم",
          "Would Recommend":"نوصي",
          "Shop By Product Category":"تسوق حسب الفئة",
          "Find the perfect pair for every occasion":"ابحث عن الحذاء المثالي لكل مناسبة",
          "Shop All":"تسوق الكل",
          "Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes.":"قد غيرت ”سترايد“ تجربة الجري لديّ تمامًا. ساعدني حذاء ”فيلوسيتي رانر برو“ على تحطيم رقمي القياسي الشخصي في الماراثون الأخير بفارق 8 دقائق.",
          "Join the Stride Club":"انضم إلى نادي سترايد",
          "Get 15% off your first order, plus early access to new drops.":"احصل على خصم 15% على طلبك الأول، بالإضافة إلى إمكانية الوصول المبكر إلى المنتجات الجديدة.",
          "Enter your email":"أدخل بريدك الإلكتروني",
          "Subscribe":"اشترك",
          "Email":"البريد الالكتروني",
          "Ready to Step Up Your Game?":"هل أنت مستعد للارتقاء بمستواك؟",
          "Join the Stride community and get 15% off your first order. Plus, early access to new releases and exclusive member-only deals.":"انضم إلى مجتمع Stride واحصل على خصم 15% على طلبك الأول. بالإضافة إلى إمكانية الوصول المبكر إلى الإصدارات الجديدة والعروض الحصرية للأعضاء.",
          "No spam, ever. Unsubscribe anytime.":"لا رسائل مزعجة، أبدًا. يمكنك إلغاء الاشتراك في أي وقت.",
          "Download Our App":"حمل تطبيقنا",
          
         
        }
      }
    },
    fallbackLng: "en",

  });

 export default i18n;



