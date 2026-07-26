/* ============================================
   KrishiHub Bangladesh — Data Module
   Data sourced from BARI, BRRI, DAE, BARC, Banglapedia
   ============================================ */

// ===== 64 Districts of Bangladesh =====
const DISTRICTS = [
  {div:'Dhaka',name:'ঢাকা',en:'Dhaka',crops:['ধান','সবজি','পাট']},
  {div:'Dhaka',name:'ফরিদপুর',en:'Faridpur',crops:['পাট','সরিষা','গম','মসুর']},
  {div:'Dhaka',name:'গাজীপুর',en:'Gazipur',crops:['ধান','সবজি','আনারস']},
  {div:'Dhaka',name:'গোপালগঞ্জ',en:'Gopalganj',crops:['ধান','পাট','সরিষা']},
  {div:'Dhaka',name:'জামালপুর',en:'Jamalpur',crops:['ধান','পাট','সরিষা','পান']},
  {div:'Dhaka',name:'কিশোরগঞ্জ',en:'Kishoreganj',crops:['ধান','পাট','সরিষা']},
  {div:'Dhaka',name:'মাদারীপুর',en:'Madaripur',crops:['ধান','পাট','সরিষা']},
  {div:'Dhaka',name:'মানিকগঞ্জ',en:'Manikganj',crops:['ধান','সরিষা','সবজি','পাট']},
  {div:'Dhaka',name:'মুন্সিগঞ্জ',en:'Munshiganj',crops:['আলু','ধান','সবজি']},
  {div:'Dhaka',name:'ময়মনসিংহ',en:'Mymensingh',crops:['ধান','পাট','সবজি','সরিষা']},
  {div:'Dhaka',name:'নারায়ণগঞ্জ',en:'Narayanganj',crops:['ধান','সবজি','পাট']},
  {div:'Dhaka',name:'নরসিংদী',en:'Narsingdi',crops:['ধান','সবজি','পান','লিচু']},
  {div:'Dhaka',name:'নেত্রকোনা',en:'Netrokona',crops:['ধান','পাট','সরিষা']},
  {div:'Dhaka',name:'রাজবাড়ী',en:'Rajbari',crops:['পাট','পেঁয়াজ','ধান']},
  {div:'Dhaka',name:'শরীয়তপুর',en:'Shariatpur',crops:['ধান','পাট','সবজি']},
  {div:'Dhaka',name:'শেরপুর',en:'Sherpur',crops:['ধান','সরিষা','পাট']},
  {div:'Dhaka',name:'টাঙ্গাইল',en:'Tangail',crops:['ধান','সরিষা','পাট','লিচু']},
  {div:'Chattogram',name:'বান্দরবান',en:'Bandarban',crops:['ধান','ফল','মসলা']},
  {div:'Chattogram',name:'ব্রাহ্মণবাড়িয়া',en:'Brahmanbaria',crops:['ধান','সরিষা','পাট']},
  {div:'Chattogram',name:'চাঁদপুর',en:'Chandpur',crops:['ধান','আলু','সবজি','ইলিশ']},
  {div:'Chattogram',name:'চট্টগ্রাম',en:'Chattogram',crops:['ধান','আলু','সবজি','ফল']},
  {div:'Chattogram',name:'কুমিল্লা',en:'Cumilla',crops:['ধান','আলু','সবজি','জাফরান']},
  {div:'Chattogram',name:'কক্সবাজার',en:"Cox's Bazar",crops:['ধান','লবণ','সুপারি']},
  {div:'Chattogram',name:'ফেনী',en:'Feni',crops:['ধান','পাট','সরিষা']},
  {div:'Chattogram',name:'খাগড়াছড়ি',en:'Khagrachari',crops:['ধান','ফল','হলুদ']},
  {div:'Chattogram',name:'লক্ষ্মীপুর',en:'Lakshmipur',crops:['ধান','নারিকেল','সয়াবিন']},
  {div:'Chattogram',name:'নোয়াখালী',en:'Noakhali',crops:['ধান','সয়াবিন','সবজি']},
  {div:'Chattogram',name:'রাঙ্গামাটি',en:'Rangamati',crops:['ধান','ফল','আদা']},
  {div:'Rajshahi',name:'বগুড়া',en:'Bogura',crops:['ধান','আলু','সরিষা','লিচু']},
  {div:'Rajshahi',name:'জয়পুরহাট',en:'Joypurhat',crops:['ধান','আলু','গম']},
  {div:'Rajshahi',name:'নওগাঁ',en:'Naogaon',crops:['ধান','গম','আম']},
  {div:'Rajshahi',name:'নাটোর',en:'Natore',crops:['ধান','আম','আখ','পেঁয়াজ']},
  {div:'Rajshahi',name:'চাঁপাইনবাবগঞ্জ',en:'Chapainawabganj',crops:['আম','ধান','গম']},
  {div:'Rajshahi',name:'পাবনা',en:'Pabna',crops:['ধান','পেঁয়াজ','পাট','লিচু']},
  {div:'Rajshahi',name:'রাজশাহী',en:'Rajshahi',crops:['ধান','আম','গম','সরিষা']},
  {div:'Rajshahi',name:'সিরাজগঞ্জ',en:'Sirajganj',crops:['ধান','পাট','সরিষা']},
  {div:'Khulna',name:'বাগেরহাট',en:'Bagerhat',crops:['ধান','চিংড়ি','সুপারি']},
  {div:'Khulna',name:'চুয়াডাঙ্গা',en:'Chuadanga',crops:['ধান','পাট','সরিষা','আম']},
  {div:'Khulna',name:'যশোর',en:'Jashore',crops:['ধান','সবজি','ফুল','খেজুর']},
  {div:'Khulna',name:'ঝিনাইদহ',en:'Jhenaidah',crops:['ধান','পাট','সবজি','আম']},
  {div:'Khulna',name:'খুলনা',en:'Khulna',crops:['ধান','চিংড়ি','সবজি']},
  {div:'Khulna',name:'কুষ্টিয়া',en:'Kushtia',crops:['ধান','পাট','তামাক','আখ']},
  {div:'Khulna',name:'মাগুরা',en:'Magura',crops:['ধান','পাট','সবজি']},
  {div:'Khulna',name:'মেহেরপুর',en:'Meherpur',crops:['ধান','সবজি','আম']},
  {div:'Khulna',name:'নড়াইল',en:'Narail',crops:['ধান','পাট']},
  {div:'Khulna',name:'সাতক্ষীরা',en:'Satkhira',crops:['ধান','চিংড়ি','আম']},
  {div:'Barishal',name:'বরগুনা',en:'Barguna',crops:['ধান','সূর্যমুখী','সবজি']},
  {div:'Barishal',name:'বরিশাল',en:'Barishal',crops:['ধান','পান','সবজি']},
  {div:'Barishal',name:'ভোলা',en:'Bhola',crops:['ধান','সয়াবিন','সরিষা']},
  {div:'Barishal',name:'ঝালকাঠি',en:'Jhalokati',crops:['ধান','পান','সুপারি']},
  {div:'Barishal',name:'পটুয়াখালী',en:'Patuakhali',crops:['ধান','সূর্যমুখী','মুগডাল']},
  {div:'Barishal',name:'পিরোজপুর',en:'Pirojpur',crops:['ধান','সুপারি','নারিকেল']},
  {div:'Sylhet',name:'হবিগঞ্জ',en:'Habiganj',crops:['ধান','চা','পাট']},
  {div:'Sylhet',name:'মৌলভীবাজার',en:'Maulvibazar',crops:['ধান','চা','পাট']},
  {div:'Sylhet',name:'সুনামগঞ্জ',en:'Sunamganj',crops:['ধান','পাট','সরিষা']},
  {div:'Sylhet',name:'সিলেট',en:'Sylhet',crops:['ধান','চা','কমলা']},
  {div:'Rangpur',name:'দিনাজপুর',en:'Dinajpur',crops:['ধান','ভুট্টা','আলু','লিচু']},
  {div:'Rangpur',name:'গাইবান্ধা',en:'Gaibandha',crops:['ধান','পাট','সরিষা']},
  {div:'Rangpur',name:'কুড়িগ্রাম',en:'Kurigram',crops:['ধান','ভুট্টা','পাট']},
  {div:'Rangpur',name:'লালকেজিিরহাট',en:'Lalmonirhat',crops:['ধান','ভুট্টা','তামাক']},
  {div:'Rangpur',name:'নীলফামারী',en:'Nilphamari',crops:['ধান','ভুট্টা','আলু']},
  {div:'Rangpur',name:'পঞ্চগড়',en:'Panchagarh',crops:['ধান','চা','ভুট্টা']},
  {div:'Rangpur',name:'রংপুর',en:'Rangpur',crops:['ধান','ভুট্টা','আলু','তামাক']},
  {div:'Rangpur',name:'ঠাকুরগাঁও',en:'Thakurgaon',crops:['ধান','ভুট্টা','আলু','গম']}
];

// ===== Crops Database (Sample of 60+ representative crops from 1,058) =====
const CROPS = [
  // === CEREALS / দানা শস্য ===
  {id:'boro_dhan',name:'বোরো ধান',en:'Boro Rice',sci:'Oryza sativa L.',cat:'cereal',season:'রবি',soil:['কর্দমাক্ত','দোঁআশ'],temp:'২০-৩৫°C',ph:'৬.০-৭.০',dur:'১৪০-১৫০ দিন',yield:'৬-৭.৫ কেজি/হে',price:'২৮-৩২ ৳/কেজি',water:'উচ্চ',
    origin:'ভারতীয় উপমহাদেশ; বাংলাদেশের প্রধান খাদ্যশস্য। ৭৫% আবাদি জমি ধানে ব্যবহৃত।',
    morph:'উচ্চতা ৯০-১২০ সেমি, কুশি ১৫-২০টি, ছড়ায় ১৫০-২৫০ ধান',
    land:'৪-৫ বার চাষ ও মই দিয়ে জমি কাদা করতে হবে',
    seed:'BRRI dhan28, BRRI dhan29, BRRI dhan58, BRRI dhan89, BRRI dhan92',
    treatment:'প্রোভ্যাক্স/অটোস্টিন ২ গ্রাম/কেজি বীজে শোধন',
    time:'নভেম্বর-ডিসেম্বর (বীজতলা), জানুয়ারি-ফেব্রুয়ারি (রোপণ)',
    spacing:'সারি ২০ সেমি × গোছা ১৫ সেমি',
    method:'২৫-৩০ দিনের চারা, প্রতি গোছায় ২-৩টি চারা',
    fert:'ইউরিয়া ২৬০ কেজি, টিএসপি ১০০ কেজি, এমপি ১২০ কেজি, জিপসাম ৭০ কেজি, দস্তা ১০ কেজি (প্রতি হেক্টরে)',
    irrigation:'৩-৫ সেমি পানি সর্বদা রাখা; কাইচ থোড় ও ফুল ফোটার সময় বিশেষ যত্ন',
    weed:'রোপণের ১৫ ও ৩৫ দিনে হাত নিড়ানি; প্রি-ইমার্জেন্স হার্বিসাইড',
    disease:'ব্লাস্ট, ব্যাকটেরিয়াল ব্লাইট, শিথ ব্লাইট, খোলপচা',
    pest:'মাজরা পোকা, বাদামী ঘাসফড়িং (BPH), পাতা মোড়ানো পোকা, গান্ধী পোকা',
    ipm:'পার্চিং, আলোক ফাঁদ, প্রতিরোধী জাত, নিয়মিত পরিদর্শন',
    harvest:'৮০% ধান পাকলে কাটা; সকালে কাটা ভাল',
    storage:'১২-১৪% আর্দ্রতায় শুকিয়ে বায়ুরোধী পাত্রে',
    faq:[{q:'বোরো ধানে সবচেয়ে বেশি ফলন পেতে কী করব?',a:'সঠিক জাত (BRRI dhan89/92), সময়মতো রোপণ, সুষম সার ও পানি ব্যবস্থাপনা।'},{q:'ব্লাস্ট রোগ কীভাবে প্রতিরোধ করব?',a:'ট্রুপার/নেটিভো ছত্রাকনাশক স্প্রে করুন, নাইট্রোজেন সার সীমিত রাখুন।'}]},
  
  {id:'aman_dhan',name:'আকেজি ধান',en:'T. Aman Rice',sci:'Oryza sativa L.',cat:'cereal',season:'খরিপ-২',soil:['কর্দমাক্ত','দোঁআশ'],temp:'২৫-৩৫°C',ph:'৫.৫-৭.০',dur:'১২০-১৪০ দিন',yield:'৪.৫-৬ কেজি/হে',price:'২৬-৩০ ৳/কেজি',water:'মাঝারি',
    origin:'বাংলাদেশের ঐতিহ্যবাহী বর্ষাকালীন ধান',
    seed:'BRRI dhan49, BRRI dhan75, BRRI dhan87, BINA dhan-7',
    time:'জুলাই (বীজতলা), আগস্ট (রোপণ), নভেম্বর-ডিসেম্বর (কাটা)',
    fert:'ইউরিয়া ১৯০ কেজি, টিএসপি ৮০ কেজি, এমপি ৯০ কেজি (প্রতি হেক্টরে)',
    disease:'ব্লাস্ট, বাদামী দাগ, শিথ ব্লাইট',
    pest:'মাজরা পোকা, পাতা মোড়ানো পোকা'},
  
  {id:'aus_dhan',name:'আউশ ধান',en:'Aus Rice',sci:'Oryza sativa L.',cat:'cereal',season:'খরিপ-১',soil:['দোঁআশ'],temp:'২৫-৩৫°C',ph:'৫.৫-৭.০',dur:'১০০-১২০ দিন',yield:'৩-৫ কেজি/হে',price:'২৫-২৮ ৳/কেজি',water:'মাঝারি',
    seed:'BRRI dhan48, BRRI dhan55, BRRI dhan82, BRRI dhan83',
    time:'মার্চ-এপ্রিল (বপন), জুন-জুলাই (কাটা)'},
  
  {id:'gom',name:'গম',en:'Wheat',sci:'Triticum aestivum L.',cat:'cereal',season:'রবি',soil:['দোঁআশ','বেলে দোঁআশ'],temp:'১৫-২৫°C',ph:'৬.০-৭.৫',dur:'১০৫-১২০ দিন',yield:'৪-৪.৫ কেজি/হে',price:'৩৫-৪০ ৳/কেজি',water:'মাঝারি',
    origin:'মধ্য এশিয়া; বাংলাদেশে দ্বিতীয় প্রধান দানাশস্য',
    seed:'BARI Gom-30, BARI Gom-33, WMRI Gom-3',
    treatment:'প্রোভ্যাক্স-২০০ ৩ গ্রাম/কেজি বীজে',
    time:'১৫ নভেম্বর - ১৫ ডিসেম্বর (বপন), মার্চ-এপ্রিল (কাটা)',
    spacing:'সারি থেকে সারি ২০ সেমি',
    fert:'ইউরিয়া ২২০ কেজি, টিএসপি ১৮০ কেজি, এমপি ৫০ কেজি (প্রতি হেক্টরে)',
    disease:'পাতার মরিচা, ব্লাস্ট, কালো দাগ',
    pest:'পাতা কাটা পোকা, উইপোকা'},
  
  {id:'vutta',name:'ভুট্টা',en:'Maize',sci:'Zea mays L.',cat:'cereal',season:'রবি/খরিপ',soil:['দোঁআশ'],temp:'২৪-৩০°C',ph:'৫.৫-৭.৫',dur:'১০০-১৩৫ দিন',yield:'৯-১১ কেজি/হে',price:'২৫-৩০ ৳/কেজি',water:'মাঝারি',
    origin:'মেক্সিকো; বাংলাদেশে দ্রুত বর্ধনশীল ফসল, বিশেষত পোল্ট্রি ফিডে',
    seed:'BARI Hybrid Maize-7, 9, 13, 14, NK-40, Pacific-11',
    time:'অক্টোবর-নভেম্বর (রবি), মার্চ-এপ্রিল (খরিপ)',
    spacing:'সারি ৬০ সেমি × গাছ ২৫ সেমি',
    fert:'ইউরিয়া ৫০০ কেজি, টিএসপি ২৫০ কেজি, এমপি ২০০ কেজি, জিপসাম ২৫০ কেজি (প্রতি হেক্টরে)',
    disease:'সাউদার্ন লিফ ব্লাইট, ফল আর্মিওয়ার্ম',
    pest:'ফল আর্মিওয়ার্ম, কাটুই পোকা'},
  
  // === TUBER / কন্দ ===
  {id:'alu',name:'আলু',en:'Potato',sci:'Solanum tuberosum L.',cat:'tuber',season:'রবি',soil:['বেলে দোঁআশ','দোঁআশ'],temp:'১৫-২৫°C',ph:'৫.২-৬.৪',dur:'৯০-১১০ দিন',yield:'২৫-৩৫ কেজি/হে',price:'২০-৩০ ৳/কেজি',water:'মাঝারি',
    origin:'দক্ষিণ আমেরিকা; বাংলাদেশে ৭ম বৃহত্তম উৎপাদক (১০+ মিলিয়ন কেজি)',
    seed:'Diamant, Cardinal, Asterix, BARI Alu-25, 28, 36, 46',
    time:'নভেম্বর-ডিসেম্বর (রোপণ), ফেব্রুয়ারি-মার্চ (উত্তোলন)',
    spacing:'সারি ৬০ সেমি × কন্দ ২৫ সেমি',
    fert:'ইউরিয়া ৩৫০ কেজি, টিএসপি ২২০ কেজি, এমপি ২৫০ কেজি (প্রতি হেক্টরে)',
    disease:'নাবি ধ্বসা (Late Blight), পাতার দাগ',
    pest:'কাটুই পোকা, জাব পোকা',
    storage:'জিরো এনার্জি কুল চেম্বার (১০-১৫°C, ৯০% আর্দ্রতা)'},
  
  {id:'mishti_alu',name:'মিষ্টি আলু',en:'Sweet Potato',sci:'Ipomoea batatas',cat:'tuber',season:'রবি',soil:['বেলে দোঁআশ'],temp:'২০-৩০°C',ph:'৫.৫-৬.৫',dur:'১২০-১৫০ দিন',yield:'২০-৩০ কেজি/হে',price:'২৫-৩৫ ৳/কেজি',water:'কম',
    seed:'BARI SP-8, 9, 12'},
  
  // === PULSES / ডাল ===
  {id:'mosur',name:'মসুর',en:'Lentil',sci:'Lens culinaris',cat:'pulse',season:'রবি',soil:['দোঁআশ'],temp:'১৮-৩০°C',ph:'৬.০-৭.৫',dur:'১০৫-১২০ দিন',yield:'১.৫-২ কেজি/হে',price:'১১০-১৩০ ৳/কেজি',water:'কম',
    seed:'BARI Masur-4, 5, 6, 7, 8'},
  
  {id:'mug',name:'মুগ ডাল',en:'Mung Bean',sci:'Vigna radiata',cat:'pulse',season:'খরিপ-১',soil:['দোঁআশ'],temp:'২৫-৩৫°C',ph:'৬.২-৭.২',dur:'৬০-৭৫ দিন',yield:'১-১.৫ কেজি/হে',price:'১১০-১৪০ ৳/কেজি',water:'কম',
    seed:'BARI Mung-6, BINA Mug-8'},
  
  {id:'chola',name:'ছোলা',en:'Chickpea',sci:'Cicer arietinum',cat:'pulse',season:'রবি',soil:['দোঁআশ'],temp:'১৮-৩০°C',ph:'৬.০-৭.৫',dur:'১১০-১২০ দিন',yield:'১.৫-১.৮ কেজি/হে',price:'৯০-১১০ ৳/কেজি',water:'কম'},
  
  {id:'khesari',name:'খেসারি',en:'Grass Pea',sci:'Lathyrus sativus',cat:'pulse',season:'রবি',dur:'১০০-১২০ দিন',yield:'১-১.৫ কেজি/হে',price:'৭০-৯০ ৳/কেজি'},
  
  // === OILSEEDS / তেলবীজ ===
  {id:'sorisha',name:'সরিষা',en:'Mustard',sci:'Brassica campestris',cat:'oilseed',season:'রবি',soil:['দোঁআশ','বেলে দোঁআশ'],temp:'১৫-২৫°C',ph:'৬.০-৭.৫',dur:'৭৫-৯০ দিন',yield:'১.৫-২ কেজি/হে',price:'৭০-৯০ ৳/কেজি',water:'কম',
    seed:'BARI Sarisha-9, 14, 15, 17, 18',
    time:'অক্টোবর-নভেম্বর (বপন), জানুয়ারি-ফেব্রুয়ারি (কাটা)',
    fert:'ইউরিয়া ২৫০ কেজি, টিএসপি ১৭০ কেজি, এমপি ৮৫ কেজি (প্রতি হেক্টরে)'},
  
  {id:'til',name:'তিল',en:'Sesame',sci:'Sesamum indicum',cat:'oilseed',season:'খরিপ-১',dur:'৮৫-১০০ দিন',yield:'৮০০-১২০০ কেজি/হে',price:'১৫০-১৮০ ৳/কেজি'},
  
  {id:'surjomukhi',name:'সূর্যমুখী',en:'Sunflower',sci:'Helianthus annuus',cat:'oilseed',season:'রবি',dur:'১১০-১২০ দিন',yield:'২-২.৫ কেজি/হে',price:'৮০-১০০ ৳/কেজি',
    seed:'BARI Surjomukhi-2, 3, Hysun-33'},
  
  {id:'chinabadam',name:'চীনাবাদাম',en:'Groundnut',sci:'Arachis hypogaea',cat:'oilseed',season:'রবি/খরিপ',dur:'১২০-১৪০ দিন',yield:'২-২.৫ কেজি/হে',price:'১০০-১২০ ৳/কেজি'},
  
  {id:'soyabean',name:'সয়াবিন',en:'Soybean',sci:'Glycine max',cat:'oilseed',season:'খরিপ-১',dur:'৯০-১০০ দিন',yield:'২-২.৫ কেজি/হে',price:'৭০-৯০ ৳/কেজি'},
  
  // === FIBER / আঁশ ===
  {id:'pat',name:'পাট',en:'Jute',sci:'Corchorus olitorius',cat:'fiber',season:'খরিপ-১',soil:['দোঁআশ'],temp:'২৫-৩৫°C',ph:'৬.০-৭.৫',dur:'১২০ দিন',yield:'২.৫-৩ কেজি/হে',price:'২৫০০-৩০০০ ৳/কেজি',water:'উচ্চ',
    origin:'বাংলাদেশের সোনালী আঁশ, বিশ্বের ২য় বৃহত্তম উৎপাদক',
    seed:'O-9897, BJRI Tossa Pat-4, 5, 6, 7',
    time:'মার্চ-এপ্রিল (বপন), জুলাই-আগস্ট (কাটা)'},
  
  {id:'tula',name:'তুলা',en:'Cotton',sci:'Gossypium hirsutum',cat:'fiber',season:'খরিপ',dur:'১৫০-১৮০ দিন',yield:'২-২.৫ কেজি/হে',price:'৪৫০০-৫৫০০ ৳/কেজি'},
  
  // === VEGETABLES / সবজি ===
  {id:'begun',name:'বেগুন',en:'Eggplant',sci:'Solanum melongena',cat:'vegetable',season:'বারোমাসি',dur:'৯০-১৮০ দিন',yield:'৩০-৪০ কেজি/হে',price:'৩০-৬০ ৳/কেজি',
    seed:'BARI Begun-1, 4, 5, 6, 8, 9, ISD006, BL114',
    disease:'ব্যাকটেরিয়াল উইল্ট, ফাইটোপথোরা',
    pest:'ডগা ও ফল ছিদ্রকারী পোকা (Shoot & Fruit Borer)',
    ipm:'ফেরোমোন ফাঁদ, প্রতিরোধী জাত (ISD006, BL114), আক্রান্ত ডগা-ফল সরিয়ে ধ্বংস'},
  
  {id:'tomato',name:'টমেটো',en:'Tomato',sci:'Solanum lycopersicum',cat:'vegetable',season:'রবি',dur:'১১০-১৩০ দিন',yield:'৪০-৬০ কেজি/হে',price:'৩০-৮০ ৳/কেজি',
    seed:'BARI Tomato-14, 15, 16, 17, 18, Rani',
    disease:'নাবি ধ্বসা, ব্যাকটেরিয়াল উইল্ট',
    pest:'ফল ছিদ্রকারী পোকা, সাদা মাছি, কাটুই পোকা'},
  
  {id:'alukapi',name:'ফুলকপি',en:'Cauliflower',sci:'Brassica oleracea var. botrytis',cat:'vegetable',season:'রবি',dur:'৯০-১২০ দিন',yield:'২৫-৩০ কেজি/হে',price:'২৫-৫০ ৳/কেজি',
    seed:'White Snowball, White Contessa, BARI Fulkopi-1'},
  
  {id:'bandhakapi',name:'বাঁধাকপি',en:'Cabbage',sci:'Brassica oleracea var. capitata',cat:'vegetable',season:'রবি',dur:'৯০-১২০ দিন',yield:'৩০-৪০ কেজি/হে',price:'২০-৪০ ৳/কেজি'},
  
  {id:'mula',name:'মূলা',en:'Radish',sci:'Raphanus sativus',cat:'vegetable',season:'রবি',dur:'৪৫-৬০ দিন',yield:'৩০-৪০ কেজি/হে',price:'১৫-৩০ ৳/কেজি'},
  
  {id:'gajor',name:'গাজর',en:'Carrot',sci:'Daucus carota',cat:'vegetable',season:'রবি',dur:'৯০-১২০ দিন',yield:'২৫-৩৫ কেজি/হে',price:'৩০-৫০ ৳/কেজি'},
  
  {id:'shosha',name:'শশা',en:'Cucumber',sci:'Cucumis sativus',cat:'vegetable',season:'খরিপ',dur:'৬০-৮০ দিন',yield:'২৫-৪০ কেজি/হে',price:'৩০-৫০ ৳/কেজি'},
  
  {id:'lau',name:'লাউ',en:'Bottle Gourd',sci:'Lagenaria siceraria',cat:'vegetable',season:'রবি/খরিপ',dur:'১২০-১৫০ দিন',yield:'৩০-৪০ কেজি/হে',price:'২০-৪০ ৳/কেজি'},
  
  {id:'korola',name:'করলা',en:'Bitter Gourd',sci:'Momordica charantia',cat:'vegetable',season:'খরিপ',dur:'১২০-১৫০ দিন',yield:'১৫-২০ কেজি/হে',price:'৫০-৮০ ৳/কেজি'},
  
  {id:'jhinga',name:'ঝিঙ্গা',en:'Ridge Gourd',sci:'Luffa acutangula',cat:'vegetable',season:'খরিপ',dur:'৯০-১২০ দিন',yield:'১৫-২০ কেজি/হে',price:'৩০-৫০ ৳/কেজি'},
  
  {id:'chichinga',name:'চিচিঙ্গা',en:'Snake Gourd',sci:'Trichosanthes cucumerina',cat:'vegetable',season:'খরিপ',dur:'১১০-১৩০ দিন',yield:'১২-১৮ কেজি/হে'},
  
  {id:'kumra',name:'মিষ্টি কুমড়া',en:'Sweet Gourd',sci:'Cucurbita moschata',cat:'vegetable',season:'বারোমাসি',dur:'১২০-১৫০ দিন',yield:'২৫-৩৫ কেজি/হে'},
  
  {id:'ol',name:'ঢেঁড়স',en:'Okra',sci:'Abelmoschus esculentus',cat:'vegetable',season:'খরিপ',dur:'৭৫-৯০ দিন',yield:'১৫-২০ কেজি/হে',price:'৪০-৬০ ৳/কেজি',
    pest:'জ্যাসিড, সাদা মাছি, ফল ছিদ্রকারী পোকা'},
  
  {id:'palong',name:'পালং শাক',en:'Spinach',sci:'Spinacia oleracea',cat:'vegetable',season:'রবি',dur:'৪০-৫০ দিন',yield:'১০-১৫ কেজি/হে',price:'২০-৪০ ৳/কেজি'},
  
  {id:'lalshak',name:'লাল শাক',en:'Red Amaranth',sci:'Amaranthus tricolor',cat:'vegetable',season:'বারোমাসি',dur:'৩০-৪০ দিন',yield:'৮-১২ কেজি/হে'},
  
  {id:'dherosh',name:'বরবটি',en:'Yard Long Bean',sci:'Vigna unguiculata',cat:'vegetable',season:'খরিপ',dur:'৯০-১১০ দিন',yield:'১৫-২০ কেজি/হে'},
  
  {id:'shim',name:'শিম',en:'Country Bean',sci:'Lablab purpureus',cat:'vegetable',season:'রবি',dur:'১৫০-১৮০ দিন',yield:'১৫-২৫ কেজি/হে',price:'৪০-৭০ ৳/কেজি'},
  
  {id:'piaz',name:'পেঁয়াজ',en:'Onion',sci:'Allium cepa',cat:'spice',season:'রবি',dur:'১২০-১৫০ দিন',yield:'১২-১৮ কেজি/হে',price:'৫০-৯০ ৳/কেজি',
    seed:'BARI Piaz-1, 2, 3, 4, 5, 6, Taherpuri'},
  
  {id:'roshun',name:'রসুন',en:'Garlic',sci:'Allium sativum',cat:'spice',season:'রবি',dur:'১৩০-১৫০ দিন',yield:'৬-৮ কেজি/হে',price:'১৪০-২০০ ৳/কেজি'},
  
  {id:'ada',name:'আদা',en:'Ginger',sci:'Zingiber officinale',cat:'spice',season:'খরিপ',dur:'২৪০-২৭০ দিন',yield:'১৫-২৫ কেজি/হে',price:'১২০-১৮০ ৳/কেজি'},
  
  {id:'holud',name:'হলুদ',en:'Turmeric',sci:'Curcuma longa',cat:'spice',season:'খরিপ',dur:'২৪০-২৭০ দিন',yield:'২০-৩০ কেজি/হে',price:'৮০-১২০ ৳/কেজি'},
  
  {id:'morich',name:'মরিচ',en:'Chili',sci:'Capsicum annuum',cat:'spice',season:'বারোমাসি',dur:'১৫০-১৮০ দিন',yield:'৮-১২ কেজি/হে (সবুজ)',price:'৮০-১৫০ ৳/কেজি',
    seed:'BARI Morich-1, 2, 3, Bogra Local'},
  
  // === FRUITS / ফলমূল ===
  {id:'am',name:'আম',en:'Mango',sci:'Mangifera indica',cat:'fruit',season:'বারোমাসি',dur:'বহুবর্ষজীবী',yield:'১৫-২০ কেজি/হে',price:'৬০-১৫০ ৳/কেজি',
    origin:'দক্ষিণ এশিয়া; বাংলাদেশের জাতীয় ফল',
    seed:'হিমসাগর, ল্যাংড়া, ফজলি, আম্রপালি, BARI Am-3, 4, গোপালভোগ',
    time:'ফুল: ফেব্রুয়ারি-মার্চ; ফল: মে-জুলাই',
    disease:'অ্যানথ্রাকনোজ, পাউডারি মিলডিউ',
    pest:'হপার, ফল মাছি, বাকল ছিদ্রকারী পোকা',
    export:'GlobalGAP সার্টিফিকেশন, ফাইটোস্যানিটারি সনদ প্রয়োজন (EU/মধ্যপ্রাচ্য)'},
  
  {id:'kathal',name:'কাঁঠাল',en:'Jackfruit',sci:'Artocarpus heterophyllus',cat:'fruit',season:'বারোমাসি',dur:'বহুবর্ষজীবী',yield:'২৫-৩৫ কেজি/হে',price:'৪০-৮০ ৳/কেজি (প্রতিটি)',
    origin:'বাংলাদেশের জাতীয় ফল'},
  
  {id:'kola',name:'কলা',en:'Banana',sci:'Musa spp.',cat:'fruit',season:'বারোমাসি',dur:'৯-১২ মাস',yield:'২৫-৪০ কেজি/হে',price:'২৫-৫০ ৳/ডজন',
    seed:'সবরি, চাঁপা, অগ্নিশ্বর, মেহেরসাগর, BARI Kola-1'},
  
  {id:'peyara',name:'পেয়ারা',en:'Guava',sci:'Psidium guajava',cat:'fruit',season:'বারোমাসি',yield:'২০-৩০ কেজি/হে',price:'৩০-৬০ ৳/কেজি',
    seed:'BARI Peyara-2, 3, 4, Kazi, Swarupkathi'},
  
  {id:'lichu',name:'লিচু',en:'Lychee',sci:'Litchi chinensis',cat:'fruit',season:'গ্রীষ্মকাল',yield:'১০-১৫ কেজি/হে',price:'৩০০-৫০০ ৳/১০০টি',
    seed:'বোম্বাই, চায়না-৩, দিনাজপুরি, বেদানা'},
  
  {id:'papaya',name:'পেঁপে',en:'Papaya',sci:'Carica papaya',cat:'fruit',season:'বারোমাসি',dur:'৮-১০ মাস',yield:'৪০-৫০ কেজি/হে',price:'৩০-৬০ ৳/কেজি'},
  
  {id:'komla',name:'কমলা',en:'Orange',sci:'Citrus reticulata',cat:'fruit',season:'শীতকাল',yield:'১৫-২০ কেজি/হে',price:'৮০-১৫০ ৳/কেজি'},
  
  {id:'anaros',name:'আনারস',en:'Pineapple',sci:'Ananas comosus',cat:'fruit',season:'বারোমাসি',dur:'১৮-২৪ মাস',yield:'৪০-৫০ কেজি/হে',price:'৩০-৭০ ৳/প্রতিটি'},
  
  // === CASH CROPS ===
  {id:'akh',name:'আখ',en:'Sugarcane',sci:'Saccharum officinarum',cat:'cash',season:'বারোমাসি',dur:'১০-১২ মাস',yield:'৭০-৯০ কেজি/হে',price:'২৫০ ৳/কেজি'},
  
  {id:'cha',name:'চা',en:'Tea',sci:'Camellia sinensis',cat:'cash',season:'বারোমাসি',dur:'বহুবর্ষজীবী',yield:'২-২.৫ কেজি/হে (শুকনো)',price:'২৫০-৪০০ ৳/কেজি'},
  
  {id:'tamak',name:'তামাক',en:'Tobacco',sci:'Nicotiana tabacum',cat:'cash',season:'রবি',dur:'১২০-১৫০ দিন',yield:'২-২.৫ কেজি/হে'},
  
  // === TIMBER / বনজ ===
  {id:'segun',name:'সেগুন',en:'Teak',sci:'Tectona grandis',cat:'timber',dur:'১৫-২০ বছর',price:'২৫০০-৪০০০ ৳/ঘনফুট'},
  {id:'mahagoni',name:'মেহগনি',en:'Mahogany',sci:'Swietenia macrophylla',cat:'timber',dur:'২০-২৫ বছর',price:'১৫০০-৩০০০ ৳/ঘনফুট'},
  {id:'nim',name:'নিম',en:'Neem',sci:'Azadirachta indica',cat:'medicinal',dur:'বহুবর্ষজীবী'},
  {id:'arjun',name:'অর্জুন',en:'Arjun',sci:'Terminalia arjuna',cat:'medicinal',dur:'বহুবর্ষজীবী'},
  {id:'bansh',name:'বাঁশ',en:'Bamboo',sci:'Bambusa vulgaris',cat:'timber',dur:'৩-৫ বছর',yield:'৫০-১০০ কেজি/হে'},
  
  // === MUSHROOM & AQUATIC ===
  {id:'chatri',name:'ছাতি (মাশরুম)',en:'Oyster Mushroom',sci:'Pleurotus ostreatus',cat:'other',dur:'৪০-৫০ দিন',yield:'৪০-৬০% জৈবিক দক্ষতা',price:'২০০-৩০০ ৳/কেজি'},
  {id:'shapla',name:'শাপলা',en:'Water Lily',sci:'Nymphaea nouchali',cat:'aquatic',season:'বারোমাসি'}
];

// ===== 12-Month Farming Calendar (DAE Official Guide) =====
const CALENDAR_MONTHS = [
  {bn:'বৈশাখ',en:'Boishakh',range:'মধ্য এপ্রিল - মধ্য মে',season:'গ্রীষ্ম',seasonColor:'#f59e0b',
    activities:'পাটশাক, বেগুন, মরিচ, লাল শাক, পুঁইশাক, পাতা পেঁয়াজ, আদা, হলুদ, শিম, ঢেঁড়সের বীজ বপন। গ্রীষ্মকালীন টমেটোর চারা রোপণ। ঝিঙ্গা, চালকুমড়া, শশা, মিষ্টি কুমড়া, করলা, ঝিঙ্গা, চিচিঙ্গার চারা তৈরি। খরিপ-১ ফসলের বীজ বপনের আদর্শ সময়।'},
  {bn:'জ্যৈষ্ঠ',en:'Joishtho',range:'মধ্য মে - মধ্য জুন',season:'গ্রীষ্ম',seasonColor:'#f59e0b',
    activities:'বৈশাখে রোপণকৃত খরিপ-২ চারার রোপণ, সেচ ও সার প্রয়োগ। ঝিঙ্গা, ধুন্দুল, পটল, কাঁকরোল, করলা সংগ্রহ। ফল গাছের চারার জন্য গর্ত তৈরি। পুরাতন ফল গাছে সুষম সার প্রয়োগ।'},
  {bn:'আষাঢ়',en:'Asharh',range:'মধ্য জুন - মধ্য জুলাই',season:'বর্ষা',seasonColor:'#3b82f6',
    activities:'শিমের বীজ বপন। গ্রীষ্মকালীন বেগুন, টমেটো, মরিচের যত্ন। কুমড়া �। শিম, লাল শাক, পালং শাকের বীজ বপন।'},
  {bn:'ভাদ্র',en:'Bhadro',range:'মধ্য আগস্ট - মধ্য সেপ্টেম্বর',season:'শরৎ',seasonColor:'#10b981',
    activities:'খরিপ-১ সবজির বীজ সংরক্ষণ, খরিপ-২ সবজি সংগ্রহ। আগাম রবি সবজির (বাঁধাকপি, ফুলকপি, টমেটো, বেগুন, শালগম, লাউ) চারা রোপণ। মধ্য ও নাবি রবি সবজির বীজতলা প্রস্তুত।'},
  {bn:'আশ্বিন',en:'Ashwin',range:'মধ্য সেপ্টেম্বর - মধ্য অক্টোবর',season:'শরৎ',seasonColor:'#10b981',
    activities:'আগাম রবি সবজির চারা রোপণ; সেচ, সার ও পোকা নিয়ন্ত্রণ। টমেটো, বাঁধাকপি, ফুলকপি, শালগমের আগাছা দকেজি ও মাটি তোলা। রসুন, পেঁয়াজের বীজ বপন; আলু রোপণ।'},
  {bn:'কার্তিক',en:'Kartik',range:'মধ্য অক্টোবর - মধ্য নভেম্বর',season:'হেকেজি্ত',seasonColor:'#8b5cf6',
    activities:'আগাম রবি সবজি সংগ্রহ; আলুর চারা বাঁধা। মধ্য মৌসুমী রবি সবজির যত্ন; সার ও সেচ। নাবি রবি সবজির চারা তৈরি ও জমি প্রস্তুত; মরিচের বীজ বপন। ফল গাছে সার প্রয়োগ ও মালচিং।'},
  {bn:'অগ্রহায়ণ',en:'Agrahayon',range:'মধ্য নভেম্বর - মধ্য ডিসেম্বর',season:'হেকেজি্ত',seasonColor:'#8b5cf6',
    activities:'মিষ্টি আলুর লতা রোপণ। আলুতে সার ও সেচ। পেঁয়াজ, রসুন, মরিচের চারা রোপণ। ফল গাছে মালচিং ও সুষম সার। রবি ফসলের (ফুলকপি, বাঁধাকপি, টমেটো, বেগুন, শালগম, মূলা) যত্ন।'},
  {bn:'পৌষ',en:'Poush',range:'মধ্য ডিসেম্বর - মধ্য জানুয়ারি',season:'শীত',seasonColor:'#06b6d4',
    activities:'আগাম ও মধ্য মৌসুমী রবি সবজি সংগ্রহ। নাবি রবি সবজি ও ফল গাছের পোকা-রোগ নিয়ন্ত্রণ। বাণিজ্যিক ফুল চাষে টপ ড্রেসিং।'},
  {bn:'মাঘ',en:'Magh',range:'মধ্য জানুয়ারি - মধ্য ফেব্রুয়ারি',season:'শীত',seasonColor:'#06b6d4',
    activities:'আলু, পেঁয়াজ, রসুনের চারিদিকে মাটি তোলা। নাবি রবি সবজিতে সার ও সেচ; টমেটো ঠেকা দিয়ে ছাঁটাই। আগাম খরিপ-১ সবজির বীজতলা প্রস্তুত। ফল গাছে পোকা-রোগ নিয়ন্ত্রণ।'},
  {bn:'ফাল্গুন',en:'Falgun',range:'মধ্য ফেব্রুয়ারি - মধ্য মার্চ',season:'বসন্ত',seasonColor:'#ec4899',
    activities:'নাবি খরিপ-১ সবজির বীজতলা, গর্ত ও বীজ বপন। ঢেঁড়স, শিম, লাল শাকের বীজ বপন। আলু ও মিষ্টি আলু সংগ্রহ ও সংরক্ষণ। রবি সবজির বীজ সংগ্রহ ও সংরক্ষণ। আগাম খরিপ-১ চারা তৈরি।'},
  {bn:'চৈত্র',en:'Chaitra',range:'মধ্য মার্চ - মধ্য এপ্রিল',season:'বসন্ত',seasonColor:'#ec4899',
    activities:'টমেটো, গ্রীষ্মকালীন বেগুন, মরিচের চারা বপন/রোপণ। নাবি মৌসুমী সবজির বীজতলা প্রস্তুত। মূল ক্ষেতে চারা রোপণ। কুমড়া জাতীয় ফসলের পোকা-রোগ নিয়ন্ত্রণ। সেচ, সার ও আগাছা দকেজি।'}
];

// ===== Disease Encyclopedia =====
const DISEASES = [
  {name:'ব্লাস্ট',en:'Rice Blast',pathogen:'Magnaporthe oryzae (ছত্রাক)',crop:'ধান',
    symptoms:'পাতায় ছোট নীলাভ দাগ যা পরে হীরকাকৃতির ধূসর কেন্দ্র ও বাদামী প্রান্তযুক্ত হয়। গিঁটে কালো দাগ, ছড়া ভেঙ্গে পড়ে (নেক ব্লাস্ট)।',
    conditions:'উচ্চ আর্দ্রতা (>৯০%), রাতের তাপমাত্রা ২০°C এর নিচে, অতিরিক্ত নাইট্রোজেন সার।',
    control:'১) প্রতিরোধী জাত (BRRI dhan28-এর পরিবর্তে BRRI dhan89) ২) বীজ শোধন (কার্বেন্ডাজিম) ৩) ট্রুপার ৭৫WP / নেটিভো ৭৫WG স্প্রে ৪) নাইট্রোজেন সার সীমিত করুন।'},
  {name:'নাবি ধ্বসা',en:'Late Blight',pathogen:'Phytophthora infestans (ছত্রাক)',crop:'আলু, টমেটো',
    symptoms:'পাতায় জলে ভেজা কালচে দাগ, নিচের দিকে সাদা ছত্রাকের বৃদ্ধি; কাণ্ডে বাদামী দাগ; কন্দে বাদামী পচা।',
    conditions:'শীতল আর্দ্র আবহাওয়া (১৫-২০°C, আর্দ্রতা >৮০%)।',
    control:'১) প্রতিরোধী জাত (Cardinal, BARI Alu-25) ২) ডাইথেন এম-৪৫ (২ গ্রাম/লিটার) ৩) রিডোমিল গোল্ড ৪) সেক্টিন ৫০WG স্প্রে ৭ দিন অন্তর।'},
  {name:'অ্যানথ্রাকনোজ',en:'Anthracnose',pathogen:'Colletotrichum spp.',crop:'আম, মরিচ, পেয়ারা',
    symptoms:'ফলে কালো/বাদামী ডেবে যাওয়া দাগ যার কেন্দ্রে গোলাপি স্পোর; পাতায় ছোট বাদামী দাগ।',
    control:'১) মৃত ডাল ছাঁটাই ২) বাভিস্টিন / টিল্ট ২৫০EC (১ মিলি/লিটার) স্প্রে ৩) ফল প্যাকিং এর আগে গরম পানির ট্রিটমেন্ট (৫২°C, ৫ মিনিট)।'},
  {name:'ব্যাকটেরিয়াল ব্লাইট',en:'Bacterial Leaf Blight',pathogen:'Xanthomonas oryzae',crop:'ধান',
    symptoms:'পাতার প্রান্ত হলুদ হয়ে শুকিয়ে যায়, ঢেউ খেলানো দাগ।',
    control:'১) প্রতিরোধী জাত ২) কপার অক্সিক্লোরাইড স্প্রে ৩) সুষম সার প্রয়োগ।'},
  {name:'শিথ ব্লাইট',en:'Sheath Blight',pathogen:'Rhizoctonia solani',crop:'ধান',
    symptoms:'পাতা খোলে ধূসর-সবুজ ডিম্বাকার দাগ; ধীরে ধীরে উপরের দিকে ছড়ায়।',
    control:'১) সঠিক দূরত্ব ২) পটাশ সার প্রয়োগ ৩) ভ্যালিডামাইসিন ৩L স্প্রে।'},
  {name:'পাউডারি মিলডিউ',en:'Powdery Mildew',pathogen:'Erysiphe / Oidium',crop:'কুমড়া, আম, শসা',
    symptoms:'পাতায় সাদা পাউডারের মতো আবরণ; পরে হলুদ ও শুকিয়ে যায়।',
    control:'সালফার (৩ গ্রাম/লিটার) বা টিল্ট ২৫০EC (০.৫ মিলি/লিটার) স্প্রে।'},
  {name:'বাদামী দাগ',en:'Brown Spot',pathogen:'Bipolaris oryzae',crop:'ধান',
    symptoms:'পাতায় ছোট ডিম্বাকার বাদামী দাগ; ধানের খোসায় দাগ।',
    control:'১) সুষম সার ২) প্রতিরোধী জাত ৩) ট্রুপার / বাভিস্টিন স্প্রে।'},
  {name:'ব্যাকটেরিয়াল উইল্ট',en:'Bacterial Wilt',pathogen:'Ralstonia solanacearum',crop:'বেগুন, টমেটো, আলু',
    symptoms:'হঠাৎ গাছ শুকিয়ে যায়; কাণ্ড কাটলে সাদা তরল বের হয়।',
    control:'১) গ্রাফটেড চারা (বন্য বেগুন গ্রাফট) ২) ফসল আবর্তন ৩) আক্রান্ত গাছ উপড়ে ধ্বংস।'}
];

// ===== Pest Encyclopedia =====
const PESTS = [
  {name:'মাজরা পোকা',en:'Yellow Stem Borer',sci:'Scirpophaga incertulas',crop:'ধান',
    damage:'কাইচ থোড় অবস্থায় "ডেড হার্ট"; ছড়া বের হওয়ার পর "হোয়াইট হেড" (সাদা ছড়া)।',
    control:'১) আলোক ফাঁদ (Light Trap) ২) পার্চিং (পাখি বসার জন্য কঞ্চি) ৩) ফেরোমোন ফাঁদ ৪) ফুরাডান ৫G বা কার্বোফুরান ৩G মাটিতে প্রয়োগ ৫) কারটাপ ৫০SP স্প্রে।'},
  {name:'বাদামী ঘাসফড়িং',en:'Brown Planthopper (BPH)',sci:'Nilaparvata lugens',crop:'ধান',
    damage:'গাছের গোড়ায় বসে রস চুষে খায়; "হপারবার্ন" – গোলাকার হলুদ থেকে বাদামী হয়ে যায়।',
    control:'১) প্রতিরোধী জাত (BRRI dhan82) ২) পানি নিষ্কাশন ৩) ইমিডাক্লোপ্রিড ২০SL (এডমায়ার) স্প্রে ৪) প্রাকৃতিক শত্রু (মাকড়সা) সংরক্ষণ।'},
  {name:'পাতা মোড়ানো পোকা',en:'Leaf Folder',sci:'Cnaphalocrocis medinalis',crop:'ধান',
    damage:'পাতা লম্বালম্বি মুড়িয়ে ভিতর থেকে খায়; সাদা লম্বা দাগ।',
    control:'১) হাত দিয়ে মুড়ানো পাতা সংগ্রহ ২) ট্রাইকোগ্রামা পরজীবী মাছি ছাড়া ৩) কারটাপ ৫০SP স্প্রে।'},
  {name:'ডগা ও ফল ছিদ্রকারী পোকা',en:'Shoot & Fruit Borer',sci:'Leucinodes orbonalis',crop:'বেগুন',
    damage:'কচি ডগা ছিদ্র করে ভিতরে খায়; ফলে ছিদ্র করে ঢোকে।',
    control:'১) প্রতিরোধী জাত (ISD006, BL114, BL095) ২) ফেরোমোন সেক্স ট্র্যাপ (পানি ফাঁদ) ৩) সপ্তাহে ১বার আক্রান্ত ডগা-ফল কেটে ধ্বংস ৪) প্রয়োজনে সাইপারমেথ্রিন ১০EC / কার্বোসালফান স্প্রে।'},
  {name:'ফল মাছি',en:'Fruit Fly',sci:'Bactrocera cucurbitae',crop:'কুমড়া, শশা, তরমুজ, আম',
    damage:'ফলে ডিম পাড়ে; শুঁয়োপোকা ফল খেয়ে পচিয়ে ফেলে।',
    control:'১) ফেরোমোন ফাঁদ (কিউলিউর) ২) মিষ্টি বিষটোপ (১ গ্রাম ডিপ্টেরেক্স ৮০SP + ১০০ গ্রাম গুড় + ১ লিটার পানি) ৩) মাটি চাষ করে পিউপা প্রকাশ।'},
  {name:'সাদা মাছি',en:'Whitefly',sci:'Bemisia tabaci',crop:'টমেটো, বেগুন, তুলা',
    damage:'পাতা থেকে রস চুষে খায়; ভাইরাস রোগ (লিফ কার্ল) ছড়ায়।',
    control:'১) হলুদ আঠালো ফাঁদ ২) নিম তেল স্প্রে ৩) ইমিডাক্লোপ্রিড / থায়ামেথক্সাম স্প্রে।'},
  {name:'জ্যাসিড',en:'Jassid',sci:'Amrasca biguttula',crop:'ঢেঁড়স, তুলা, বেগুন',
    damage:'পাতা থেকে রস চুষে খায়; পাতার কিনারা হলুদ হয়ে কুঁকড়ে যায়।',
    control:'১) নিম নির্যাস ২) ইমিডাক্লোপ্রিড স্প্রে ৩) প্রতিরোধী জাত।'},
  {name:'ফল আর্মিওয়ার্ম',en:'Fall Armyworm',sci:'Spodoptera frugiperda',crop:'ভুট্টা',
    damage:'পাতা ছিদ্র করে খায়; কচি পাতা ও ছড়া নষ্ট করে।',
    control:'১) ফেরোমোন ফাঁদ ২) স্পিনোস্যাড / এমামেকটিন বেঞ্জোয়েট স্প্রে ৩) প্রাকৃতিক শত্রু।'},
  {name:'কাটুই পোকা',en:'Cutworm',sci:'Agrotis ipsilon',crop:'সবজি, আলু',
    damage:'রাতে ছোট চারা কেটে ফেলে।',
    control:'১) সন্ধ্যায় গম ভুষি + সেভিন ৮৫SP বিষটোপ ২) হাত দিয়ে সংগ্রহ ৩) জমি পরিষ্কার রাখা।'}
];

// ===== Land Unit Conversion Factors (base = square feet) =====
// 1 Katha = 720 sq ft, 1 Bigha = 20 Katha, 1 Decimal (Shotok) = 435.6 sq ft, 1 Acre = 100 Decimal, 1 Hectare = 2.47 Acre
const LAND_UNITS = {
  sqft: {name:'বর্গফুট',en:'Sq Feet',factor:1},
  sqm: {name:'বর্গমিটার',en:'Sq Meter',factor:10.7639},
  shotok: {name:'শতক (Decimal)',en:'Decimal',factor:435.6},
  katha: {name:'কাঠা',en:'Katha',factor:720},
  bigha: {name:'বিঘা',en:'Bigha',factor:14400},
  acre: {name:'একর',en:'Acre',factor:43560},
  hectare: {name:'হেক্টর',en:'Hectare',factor:107639},
  gonda: {name:'গণ্ডা',en:'Gonda',factor:864},  // 1 Gonda = 1.2 Shotok (approx)
  kani: {name:'কানি',en:'Kani',factor:17424}   // 40 Shotok in Chattogram/Noakhali
};

// ===== A-Z Glossary (Agricultural Terms) =====
const GLOSSARY = [
  {term:'AEZ',def:'Agro-Ecological Zone — বাংলাদেশে ৩০টি কৃষি-পরিবেশগত অঞ্চল।'},
  {term:'AIS',def:'Agricultural Information Service — কৃষি তথ্য সেবা।'},
  {term:'BADC',def:'Bangladesh Agricultural Development Corporation — কৃষি উন্নয়ন কর্পোরেশন।'},
  {term:'BARC',def:'Bangladesh Agricultural Research Council — কৃষি গবেষণা কাউন্সিল।'},
  {term:'BARI',def:'Bangladesh Agricultural Research Institute — কৃষি গবেষণা ইনস্টিটিউট, গাজীপুর।'},
  {term:'BJRI',def:'Bangladesh Jute Research Institute — পাট গবেষণা ইনস্টিটিউট।'},
  {term:'BRRI',def:'Bangladesh Rice Research Institute — ধান গবেষণা ইনস্টিটিউট, গাজীপুর।'},
  {term:'BINA',def:'Bangladesh Institute of Nuclear Agriculture — পারমাণবিক কৃষি ইনস্টিটিউট, ময়মনসিংহ।'},
  {term:'BLB',def:'Bacterial Leaf Blight — ধানের ব্যাকটেরিয়াজনিত পাতা পোড়া রোগ।'},
  {term:'BPH',def:'Brown Planthopper — বাদামী ঘাসফড়িং।'},
  {term:'DAE',def:'Department of Agricultural Extension — কৃষি সম্প্রসারণ অধিদপ্তর।'},
  {term:'DAP',def:'Diammonium Phosphate — একটি নাইট্রোজেন-ফসফরাস সার।'},
  {term:'EC',def:'Emulsifiable Concentrate — কীটনাশকের একটি ফর্মুলেশন।'},
  {term:'FRG',def:'Fertilizer Recommendation Guide — BARC কর্তৃক প্রকাশিত সার সুপারিশ নির্দেশিকা।'},
  {term:'GAP',def:'Good Agricultural Practices — উত্তম কৃষি পদ্ধতি।'},
  {term:'GlobalGAP',def:'আন্তর্জাতিক কৃষি সার্টিফিকেশন স্ট্যান্ডার্ড; রপ্তানির জন্য প্রয়োজন।'},
  {term:'HYV',def:'High Yielding Variety — উচ্চ ফলনশীল জাত।'},
  {term:'IPM',def:'Integrated Pest Management — সমন্বিত বালাই ব্যবস্থাপনা।'},
  {term:'INM',def:'Integrated Nutrient Management — সমন্বিত পুষ্টি ব্যবস্থাপনা।'},
  {term:'MoP / MP',def:'Muriate of Potash — পটাশ সার (KCl)।'},
  {term:'NARS',def:'National Agricultural Research System — জাতীয় কৃষি গবেষণা ব্যবস্থা।'},
  {term:'pH',def:'মাটির অম্লত্ব বা ক্ষারত্ব পরিমাপ। ফসল অনুযায়ী উপযুক্ত pH ৫.৫-৭.৫।'},
  {term:'SRDI',def:'Soil Resource Development Institute — মৃত্তিকা সম্পদ উন্নয়ন ইনস্টিটিউট।'},
  {term:'SP',def:'Soluble Powder — পানিতে দ্রবণীয় গুঁড়ো (কীটনাশক)।'},
  {term:'TSP',def:'Triple Super Phosphate — ফসফরাস সার।'},
  {term:'USG',def:'Urea Super Granule — গুটি ইউরিয়া।'},
  {term:'WP',def:'Wettable Powder — পানিতে মিশ্রণযোগ্য গুঁড়ো।'},
  {term:'Zn',def:'দস্তা — একটি মাইক্রোনিউট্রিয়েন্ট; ধানে গুরুত্বপূর্ণ।'}
];

// ===== Hotlines & Institutes =====
const HOTLINES = [
  {name:'কৃষি কল সেন্টার',phone:'১৬১২৩',hours:'সকাল ৮টা - রাত ৯টা',note:'টোল ফ্রি (২৫ পয়সা/মিনিট)'},
  {name:'DAE (কৃষি সম্প্রসারণ)',phone:'০২-৯১৪০৯১৮',web:'dae.gov.bd'},
  {name:'BARI (কৃষি গবেষণা)',phone:'০২-৯২৬১৫০১-০৫',web:'bari.gov.bd',addr:'জয়দেবপুর, গাজীপুর-১৭০১'},
  {name:'BRRI (ধান গবেষণা)',phone:'০২-৯২৫৭৪০১-৫',web:'brri.gov.bd',addr:'জয়দেবপুর, গাজীপুর'},
  {name:'BADC (কৃষি উন্নয়ন)',phone:'০২-৯১৩৬৪২৯',web:'badc.gov.bd'},
  {name:'SRDI (মৃত্তিকা সম্পদ)',phone:'০২-৪৮১১৭০৩২',web:'srdi.gov.bd'},
  {name:'BJRI (পাট গবেষণা)',phone:'০২-৯৩৪১৭৪৪',web:'bjri.gov.bd'},
  {name:'BINA (পারমাণবিক কৃষি)',phone:'০৯১-৬৭৭৪১',web:'bina.gov.bd',addr:'ময়মনসিংহ'}
];

// ===== Seasonal Wholesale Marketplace Data =====
const RAW_MARKETPLACE = [
  // রবি মৌসুম (Rabi - Winter Crops)
  {id:'boro_rice', product:'বোরো ধান (BRRI dhan29)', seller:'কৃষক সমবায়, বগুড়া', basePriceKg:32, stock:'৫০০ কেজি', district:'বগুড়া', season:'রবি (শীতকালীন)', category:'ধান-চাল'},
  {id:'diamond_potato', product:'ডায়মন্ড আলু', seller:'মুন্সিগঞ্জ কৃষক সমিতি', basePriceKg:22, stock:'১০০০ কেজি', district:'মুন্সিগঞ্জ', season:'রবি (শীতকালীন)', category:'সবজি'},
  {id:'mustard_seed', product:'সরিষা বীজ (BARI-14)', seller:'ফরিদপুর অ্যাগ্রো', basePriceKg:85, stock:'২০০ কেজি', district:'ফরিদপুর', season:'রবি (শীতকালীন)', category:'তৈলবীজ'},
  {id:'taherpuri_onion', product:'তাহেরপুরি পেঁয়াজ', seller:'পাবনা ট্রেডার্স', basePriceKg:65, stock:'৪০০ কেজি', district:'পাবনা', season:'রবি (শীতকালীন)', category:'মশলা'},
  {id:'red_garlic', product:'লাল রসুন (দেশি)', seller:'নাটোর ফার্মার্স', basePriceKg:110, stock:'২৫০ কেজি', district:'নাটোর', season:'রবি (শীতকালীন)', category:'মশলা'},
  {id:'maize_corn', product:'ভুট্টা (Pacific-11)', seller:'দিনাজপুর কৃষি খামার', basePriceKg:28, stock:'৮০০ কেজি', district:'দিনাজপুর', season:'রবি (শীতকালীন)', category:'দানা শস্য'},
  {id:'wheat_bari', product:'গম (BARI Gom-33)', seller:'রংপুর শস্য সমিতি', basePriceKg:38, stock:'৬০০ কেজি', district:'রংপুর', season:'রবি (শীতকালীন)', category:'দানা শস্য'},
  {id:'lentil_dal', product:'মসুর ডাল (দেশি)', seller:'যশোর অ্যাগ্রো', basePriceKg:125, stock:'১৫০ কেজি', district:'যশোর', season:'রবি (শীতকালীন)', category:'ডাল'},
  
  // খরিপ-১ মৌসুম (Kharif-1 - Summer Crops)
  {id:'tossa_jute', product:'তোষা পাট (Tossa Jute)', seller:'জামালপুর পাট সমিতি', basePriceKg:70, stock:'৬০০ কেজি', district:'জামালপুর', season:'খরিপ-১ (গ্রীষ্মকালীন)', category:'আঁশ'},
  {id:'aush_rice', product:'আউশ ধান (BRRI dhan48)', seller:'কুমিল্লা কৃষক সংস্থা', basePriceKg:30, stock:'৪৫০ কেজি', district:'কুমিল্লা', season:'খরিপ-১ (গ্রীষ্মকালীন)', category:'ধান-চাল'},
  {id:'ladyfinger', product:'ঢেঁড়শ (দেশি)', seller:'গাজীপুর কৃষি ফার্ম', basePriceKg:35, stock:'১৮০ কেজি', district:'গাজীপুর', season:'খরিপ-১ (গ্রীষ্মকালীন)', category:'সবজি'},
  {id:'bitter_gourd', product:'করলা (উচ্ছে)', seller:'নরসিংদী গ্রিন ফার্ম', basePriceKg:45, stock:'১৫০ কেজি', district:'নরসিংদী', season:'খরিপ-১ (গ্রীষ্মকালীন)', category:'সবজি'},
  {id:'sesame_seed', product:'তিল (BARI Til-4)', seller:'কুষ্টিয়া অ্যাগ্রো', basePriceKg:95, stock:'১২০ কেজি', district:'কুষ্টিয়া', season:'খরিপ-১ (গ্রীষ্মকালীন)', category:'তৈলবীজ'},

  // খরিপ-২ মৌসুম (Kharif-2 - Monsoon Crops)
  {id:'amon_rice', product:'আমন ধান (BRRI dhan87)', seller:'ময়মনসিংহ সমবায়', basePriceKg:34, stock:'৭০০ কেজি', district:'ময়মনসিংহ', season:'খরিপ-২ (বর্ষাকালীন)', category:'ধান-চাল'},
  {id:'mashkalai', product:'মাসকালাই ডাল', seller:'চাঁপাই সমিতি', basePriceKg:115, stock:'১০০ কেজি', district:'চাঁপাই নবাবগঞ্জ', season:'খরিপ-২ (বর্ষাকালীন)', category:'ডাল'},

  // বারোমাসি (All-Season Crops)
  {id:'brinjal_eggplant', product:'বেগুন (তাল বেগুন)', seller:'যশোর কৃষক সমিতি', basePriceKg:40, stock:'২০০ কেজি', district:'যশোর', season:'বারোমাসি', category:'সবজি'},
  {id:'green_chili', product:'কাঁচামরিচ (দেশি)', seller:'বগুড়া ভেজিটেবল', basePriceKg:80, stock:'১০০ কেজি', district:'বগুড়া', season:'বারোমাসি', category:'মশলা'},
  {id:'fresh_ginger', product:'দেশি আদা', seller:'পার্বত্য অ্যাগ্রো', basePriceKg:140, stock:'১৫০ কেজি', district:'রাঙ্গামাটি', season:'বারোমাসি', category:'মশলা'},
  {id:'papaya_ripe', product:'পাকা পেঁপে', seller:'টাঙ্গাইল ফল সমিতি', basePriceKg:50, stock:'৩০০ কেজি', district:'টাঙ্গাইল', season:'বারোমাসি', category:'ফলমূল'},
  {id:'sagar_banana', product:'সাগর কলা', seller:'নরসিংদী ফ্রুটস', basePriceKg:35, stock:'৪০০ কেজি', district:'নরসিংদী', season:'বারোমাসি', category:'ফলমূল'}
];

const MARKETPLACE = RAW_MARKETPLACE;

// ===== Workers Directory =====
const WORKERS = [
  {name:'মোঃ কামাল হোসেন',type:'রোয়া শ্রমিক',district:'রংপুর',wage:'৫০০ ৳/দিন',phone:'০১৭১১-১২৩৪৫৬',exp:'১৫ বছর'},
  {name:'আব্দুল করিম',type:'ছাঁটাই মেকানিক',district:'গাজীপুর',wage:'৮০০ ৳/দিন',phone:'০১৮১১-২৩৪৫৬৭',exp:'১০ বছর'},
  {name:'রফিকুল ইসলাম',type:'ট্রাক্টর ড্রাইভার',district:'বগুড়া',wage:'৭০০ ৳/দিন',phone:'০১৯১১-৩৪৫৬৭৮',exp:'১২ বছর'},
  {name:'সালমা বেগম',type:'বীজতলা শ্রমিক',district:'দিনাজপুর',wage:'৪০০ ৳/দিন',phone:'০১৭২১-৪৫৬৭৮৯',exp:'৮ বছর'},
  {name:'জাকির হোসেন',type:'IPM ট্রেইনার',district:'ময়মনসিংহ',wage:'১২০০ ৳/দিন',phone:'০১৫১১-৫৬৭৮৯০',exp:'২০ বছর'},
  {name:'মাহবুবা আক্তার',type:'ফল সংগ্রহ শ্রমিক',district:'রাজশাহী',wage:'৪৫০ ৳/দিন',phone:'০১৬১১-৬৭৮৯০১',exp:'৬ বছর'}
];

// ===== Articles / Blog =====
const ARTICLES = [
  {title:'সুগন্ধি ধান চাষে লাভজনক প্রযুক্তি',author:'ড. আনসারুল হক, BRRI',date:'২০২৬',
    excerpt:'সুগন্ধি ধান (BRRI dhan38, 50, 70) দেশীয় ও বৈদেশিক বাজারে উচ্চ মূল্য পায়। সঠিক জাত নির্বাচন, সময়মতো রোপণ ও সুষম সার প্রয়োগে হেক্টর প্রতি ৪-৫ কেজি ফলন সম্ভব।'},
  {title:'IPM প্রযুক্তিতে বেগুন চাষ',author:'ড. রহমান, BARI',date:'২০২৬',
    excerpt:'ডগা ও ফল ছিদ্রকারী পোকার আক্রমণ প্রতিরোধে গ্রাফটেড চারা, ফেরোমোন ফাঁদ ও প্রতিরোধী জাত (ISD006) ব্যবহার করে ৭০% পর্যন্ত কীটনাশক ব্যবহার কমানো যায়।'},
  {title:'বাংলাদেশ থেকে আম রপ্তানি: সুযোগ ও চ্যালেঞ্জ',author:'LightCastle Partners',date:'২০২৬',
    excerpt:'বাংলাদেশ বিশ্বের ৮ম বৃহত্তম আম উৎপাদক। EU ও মধ্যপ্রাচ্যে রপ্তানির জন্য GlobalGAP, HACCP ও ISO সার্টিফিকেশন প্রয়োজন।'},
  {title:'ফল আর্মিওয়ার্ম নিয়ন্ত্রণে সমন্বিত ব্যবস্থাপনা',author:'ড. মুরাদ, DAE',date:'২০২৬',
    excerpt:'ভুট্টার প্রধান শত্রু ফল আর্মিওয়ার্ম নিয়ন্ত্রণে ফেরোমোন ফাঁদ, প্রাকৃতিক শত্রু ও নিরাপদ কীটনাশক (স্পিনোস্যাড, এমামেকটিন) ব্যবহারের সুপারিশ।'},
  {title:'জিরো এনার্জি কুল চেম্বার: কৃষকের বিদ্যুৎ ছাড়া হিমাগার',author:'ড. সিদ্দিকা, BARI',date:'২০২৬',
    excerpt:'ইট, বালু ও পানি দিয়ে তৈরি ZECC ১০-১৫°C তাপমাত্রা ও ৯৫% আর্দ্রতা বজায় রাখে; আলু, টমেটো, আমের সংরক্ষণকাল ৩-১৫ দিন বৃদ্ধি করে।'}
];

// ===== Export standards =====
const EXPORT_STANDARDS = [
  {product:'আম',markets:'EU, মধ্যপ্রাচ্য, রাশিয়া',standards:'GlobalGAP, HACCP, ফাইটোস্যানিটারি সার্টিফিকেট',packaging:'৪-৫ কেজি কার্টন, VHT (Vapor Heat Treatment)',
    docs:'ফাইটোস্যানিটারি সনদ (DAE), সার্টিফিকেট অফ অরিজিন, কমার্শিয়াল ইনভয়েস'},
  {product:'আলু',markets:'মালয়েশিয়া, শ্রীলঙ্কা, সিঙ্গাপুর',standards:'ব্রাউন রট মুক্ত সনদ, GlobalGAP',packaging:'৫০ কেজি জালি বস্তা',
    docs:'ফাইটোস্যানিটারি সনদ, প্যাকিং লিস্ট'},
  {product:'পেয়ারা',markets:'মধ্যপ্রাচ্য, সিঙ্গাপুর',standards:'GAP, কীটনাশক অবশেষ পরীক্ষা',packaging:'২-৩ কেজি কার্টন'},
  {product:'সবজি',markets:'EU, UK, মধ্যপ্রাচ্য',standards:'GlobalGAP, MRL (Maximum Residue Limit) মান',packaging:'ভ্যাকুয়াম প্যাক / MAP'}
];

// ===== Storage Techniques =====
const STORAGE_GUIDE = [
  {crop:'ধান/দানা শস্য',temp:'ঠান্ডা শুকনো (২৫-৩০°C)',humidity:'১২-১৪% আর্দ্রতা',method:'বায়ুরোধী পাত্র, GBS, হার্মেটিক ব্যাগ',duration:'৬-১২ মাস'},
  {crop:'গোল আলু',temp:'২-৪°C (কোল্ড স্টোরেজ) / ১০-১৫°C (ZECC)',humidity:'৮৫-৯০%',method:'জিরো এনার্জি কুল চেম্বার (ZECC), কোল্ড স্টোরেজ',duration:'৪-৬ মাস'},
  {crop:'পেঁয়াজ',temp:'০-২°C বা ২৫-৩০°C',humidity:'৬৫-৭০%',method:'ভালো বায়ু চলাচলে ঝুলানো, বাঁশের মাচা',duration:'৩-৫ মাস'},
  {crop:'আম',temp:'১২-১৩°C',humidity:'৮৫-৯০%',method:'VHT ট্রিটমেন্ট, CA স্টোরেজ',duration:'৩-৪ সপ্তাহ'},
  {crop:'টমেটো',temp:'১০-১৩°C (সবুজ), ৭-১০°C (পাকা)',humidity:'৮৫-৯৫%',method:'ZECC, ইথিলিন নিয়ন্ত্রণ',duration:'২-৪ সপ্তাহ'},
  {crop:'ফুলকপি/বাঁধাকপি',temp:'০-১°C',humidity:'৯৫%',method:'কোল্ড রুম, MAP',duration:'২-৪ সপ্তাহ'}
];
