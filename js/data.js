window.RESTAURANT_DATA = {
  restaurant: {
    name: "البيت الدمشقي",
    shortName: "البيت الدمشقي",
    tagline: "مطعم سوري على أصوله",
    openHours: "من 1 ظهرًا إلى 12 مساءً",
    payment: "كاش فقط",
    location: "إسماعيلية"
  },

  categories: [
    {
      id: "pizza",
      name: "ركن البيتزا",
      description: "عجينة هشة، صوص غني، وطعم يفتح النفس.",
      items: [
        {
          id: "pizza-margherita",
          name: "بيتزا مارجريتا",
          desc: "موزاريلا، صوص طماطم، عجينة سميكة",
          full: "عجينة طازة، صوص طماطم، موزاريلا، ريحان",
          price: 69,
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "pizza-pepperoni",
          name: "بيتزا بيبروني",
          desc: "بيبروني، جبنة، صوص خاص",
          full: "عجينة طازة، صوص بيتزا، جبنة موزاريلا، بيبروني",
          price: 89,
          image: "https://images.unsplash.com/photo-1534308983496-4f65b1f1c9b8?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "sandwiches",
      name: "ركن السندوتشات العربية",
      description: "سندوتشات شامية خفيفة ومشبعة.",
      items: [
        {
          id: "saj-chicken",
          name: "سندوتش دجاج ساج",
          desc: "دجاج متبل، صوص، خضار طازة",
          full: "دجاج متبل، خبز ساج، بطاطس، صوص ثوم، خضار",
          price: 58,
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "shawarma-beef",
          name: "شاورما لحم",
          desc: "لحم، طحينة، مخلل",
          full: "لحم شاورما، خبز عربي، طحينة، مخلل، بطاطس",
          price: 72,
          image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "pies",
      name: "ركن الفطائر",
      description: "فطائر ذهبية بخبز هش وطعم غني.",
      items: [
        {
          id: "spinach-pie",
          name: "فطيرة سبانخ",
          desc: "سبانخ، دبس رمان، عجينة ذهبية",
          full: "سبانخ، بصل، دبس رمان، عجينة طازة",
          price: 34,
          image: "https://images.unsplash.com/photo-1600628422019-8f3f8d0f0c1b?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "cheese-pie",
          name: "فطيرة جبنة",
          desc: "جبنة، زعتر خفيف، عجينة طرية",
          full: "جبنة، عجينة فطيرة، لمسة زعتر، خبز طازة",
          price: 38,
          image: "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "borak",
      name: "ركن البُرك",
      description: "طبقات مقرمشة ومحشية بعناية.",
      items: [
        {
          id: "borak-cheese",
          name: "بورك جبنة",
          desc: "جبنة، رشة زعتر، قرمشة",
          full: "جبنة مشكلة، عجينة بورك، لمسة زعتر",
          price: 42,
          image: "https://images.unsplash.com/photo-1601924582975-7f1a9fb9b3bf?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "borak-meat",
          name: "بورك لحمة",
          desc: "لحمة مفرومة، بهارات، خبز هش",
          full: "لحمة مفرومة، بصل، بهارات، عجينة بورك",
          price: 49,
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "manakish",
      name: "ركن المناقيش",
      description: "عطر الزعتر والجبنة في كل لقمة.",
      items: [
        {
          id: "manakish-zatar",
          name: "مناقيش زعتر",
          desc: "زعتر، زيت زيتون، عجينة شامية",
          full: "زعتر، زيت زيتون، سماق خفيف، عجينة مناقيش",
          price: 29,
          image: "https://images.unsplash.com/photo-1571997478779-2a9f70f0ab54?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "manakish-cheese",
          name: "مناقيش جبنة",
          desc: "جبنة موزاريلا، عجينة محمصة",
          full: "جبنة موزاريلا، عجينة مناقيش، لمسة زعتر",
          price: 33,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "crepes",
      name: "ركن الكريب",
      description: "خيار حلو أو حادق بمظهر فاخر.",
      items: [
        {
          id: "crepe-nutella",
          name: "كريب نوتيلا",
          desc: "نوتيلا، موز، سكر بودرة",
          full: "كريب رقيق، نوتيلا، موز، سكر بودرة",
          price: 54,
          image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "crepe-chicken",
          name: "كريب دجاج",
          desc: "دجاج، جبنة، صوص",
          full: "دجاج متبل، جبنة، صوص ثوم، كريب طري",
          price: 61,
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "desserts",
      name: "ركن الحلويات",
      description: "خاتمة حلوة بطابع شرقي أنيق.",
      items: [
        {
          id: "kunafa",
          name: "كنافة بالقشطة",
          desc: "قشطة، شيرة، كنافة ذهبية",
          full: "كنافة، قشطة، شيرة، فستق مجروش",
          price: 48,
          image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "basbousa",
          name: "بسبوسة",
          desc: "جوز هند، شيرة، طعم أصيل",
          full: "بسبوسة، شيرة، لمسة فانيلا، جوز هند",
          price: 32,
          image: "https://images.unsplash.com/photo-1601003908687-43ab7b5d29ce?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "addons",
      name: "ركن الإضافات",
      description: "أكمل طلبك بإضافات صغيرة لكنها مهمة.",
      items: [
        {
          id: "fries",
          name: "بطاطس مقلية",
          desc: "مقرمشة وذهبية",
          full: "بطاطس مقلية، ملح خفيف، توابل",
          price: 22,
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "garlic-sauce",
          name: "صوص ثوم",
          desc: "كريمي وخفيف",
          full: "ثوم، زبادي، ليمون، بهار خفيف",
          price: 12,
          image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "drinks",
      name: "ركن المشروبات",
      description: "مشروبات باردة تكمل التجربة.",
      items: [
        {
          id: "mango",
          name: "عصير مانجو",
          desc: "مانجو طازة، ثلج",
          full: "مانجو طازة، ثلج، سكر خفيف حسب الطلب",
          price: 24,
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "lemon-mint",
          name: "ليمون بالنعناع",
          desc: "منعش وبارد",
          full: "ليمون، نعناع، ثلج، سكر خفيف",
          price: 21,
          image: "https://images.unsplash.com/photo-1528823872057-9c018a7f7b5c?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    },
    {
      id: "specials",
      name: "ركن العروض الخاصة",
      description: "اختيارات مميزة بسعر ولون أروع.",
      items: [
        {
          id: "special-family",
          name: "عرض عائلي",
          desc: "تشكيلة مختارة تكفي الجميع",
          full: "بيتزا، فطائر، سندوتشات، إضافات، مشروب",
          price: 179,
          image: "https://images.unsplash.com/photo-1482275548304-5f9d5f5f4aa5?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: "special-chef",
          name: "اختيار الشيف",
          desc: "وجبة مختارة بعناية",
          full: "وجبة رئيسية، إضافة، مشروب، حلو",
          price: 129,
          image: "https://images.unsplash.com/photo-1520201163981-8cc1eb16c5b8?auto=format&fit=crop&w=1200&q=80"
        }
      ]
    }
  ]
};
