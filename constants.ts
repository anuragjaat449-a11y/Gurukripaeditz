

export interface Video {
    id: string; // youtube ID or GDrive file ID
    type: 'youtube' | 'gdrive';
    downloadUrl?: string;
}

export interface Book {
    id: string;
    titleEn: string;
    titleHi: string;
    coverImageUrl: string;
    pdfUrl?: string;
    audioUrl?: string;
    video?: Video;
    category?: 'animated';
    quizzes?: { id: string; titleEn: string; titleHi: string; url?: string }[];
}

export interface Poem {
    id: string;
    author: string;
    titleEn: string;
    titleHi: string;
    textEn: string[];
    textHi: string[];
    audioUrl?: string;
    meaningEn?: string;
    meaningHi?: string;
}

export interface GalleryImage {
    id: string;
    thumbnailUrl: string;
    fullUrl: string;
    altEn: string;
    altHi: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 'k1', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-001-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-001-xl.jpg', altEn: 'A portrait of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक चित्र' },
    { id: 'k2', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-002-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-002-xl.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj in a thoughtful pose', altHi: 'संत किरपाल सिंह जी महाराज एक विचारशील मुद्रा में' },
    { id: 'k3', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-003-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-003-xl.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj speaking to an audience', altHi: 'संत किरपाल सिंह जी महाराज एक सभा को संबोधित करते हुए' },
    { id: 'k4', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-004-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-004-xl.jpg', altEn: 'A smiling photo of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज की एक मुस्कुराती हुई तस्वीर' },
    { id: 'k5', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-005-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-005-xl.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj during a tour abroad', altHi: 'संत किरपाल सिंह जी महाराज विदेश यात्रा के दौरान' },
    { id: 'k6', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-006-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-006-xl.jpg', altEn: 'A candid moment of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक स्पष्ट क्षण' },
    { id: 'k7', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-007-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-007-xl.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj in meditation', altHi: 'संत किरपाल सिंह जी महाराज ध्यान में' },
    { id: 'k8', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-008-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-008-xl.jpg', altEn: 'A close-up portrait of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक क्लोज-अप चित्र' },
    { id: 'k9', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-009-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-009-xl.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj with his Master, Baba Sawan Singh Ji', altHi: 'संत किरपाल सिंह जी महाराज अपने गुरु, बाबा सावन सिंह जी के साथ' },
    { id: 'k10', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-010-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-010-xl.jpg', altEn: 'Sawan Ashram in Delhi, India', altHi: 'सावन आश्रम, दिल्ली, भारत' },
    { id: 'k11', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-011-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-011-xl.jpg', altEn: 'Sant Kirpal Singh Ji speaking at the World Fellowship of Religions', altHi: 'संत किरपाल सिंह जी विश्व धर्म सम्मेलन में बोलते हुए' },
    { id: 'k12', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-012-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-012-xl.jpg', altEn: 'Sant Kirpal Singh Ji on one of his world tours', altHi: 'संत किरपाल सिंह जी अपनी एक विश्व यात्रा पर' },
    { id: 'k15', thumbnailUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-015-m.jpg', fullUrl: 'https://www.kirpal-sagar.org/images/content/sant-kirpal-singh/sant-kirpal-singh-015-xl.jpg', altEn: 'Sant Kirpal Singh Ji at the World Conference on Unity of Man', altHi: 'संत किरपाल सिंह जी मानव एकता पर विश्व सम्मेलन में' },
];

export interface TimelineEvent {
    year: string;
    titleEn: string;
    titleHi: string;
    descriptionEn: string;
    descriptionHi: string;
    imageId: string; // Corresponds to the id in GALLERY_IMAGES
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1894',
    titleEn: 'Birth and Early Life',
    titleHi: 'जन्म और प्रारंभिक जीवन',
    descriptionEn: 'Sant Kirpal Singh Ji Maharaj was born on February 6, 1894, in Sayyad Kasran, a rural town in what is now Pakistan. From a young age, He showed a deep interest in spirituality and a profound compassion for all living beings.',
    descriptionHi: 'संत किरपाल सिंह जी महाराज का जन्म 6 फरवरी, 1894 को सय्यद कसरान में हुआ था, जो अब पाकिस्तान में एक ग्रामीण कस्बा है। छोटी उम्र से ही, उन्होंने आध्यात्मिकता में गहरी रुचि और सभी जीवित प्राणियों के प्रति गहन करुणा दिखाई।',
    imageId: 'k8'
  },
  {
    year: '1924',
    titleEn: 'Meeting the Master',
    titleHi: 'गुरु से भेंट',
    descriptionEn: 'After a long and sincere search for a true spiritual guide, He met his Satguru, Baba Sawan Singh Ji Maharaj, in 1924 at the ashram on the banks of the Beas river. He was initiated into the path of Surat Shabd Yoga on February 15, 1924.',
    descriptionHi: 'एक सच्चे आध्यात्मिक मार्गदर्शक की लंबी और सच्ची खोज के बाद, वह 1924 में ब्यास नदी के तट पर स्थित आश्रम में अपने सतगुरु, बाबा सावन सिंह जी महाराज से मिले। उन्हें 15 फरवरी, 1924 को सूरत शब्द योग के मार्ग में दीक्षित किया गया।',
    imageId: 'k9'
  },
  {
    year: '1948',
    titleEn: 'Assuming the Mantle',
    titleHi: 'गुरु पद का दायित्व',
    descriptionEn: 'Following the passing of his Master Baba Sawan Singh Ji in April 1948, Sant Kirpal Singh Ji began his spiritual mission as entrusted to him. He moved to Delhi and began carrying on the spiritual work.',
    descriptionHi: 'अप्रैल 1948 में अपने गुरु बाबा सावन सिंह जी के निधन के बाद, संत किरपाल सिंह जी ने उन्हें सौंपे गए आध्यात्मिक मिशन को शुरू किया। वह दिल्ली चले गए और आध्यात्मिक कार्य को आगे बढ़ाने लगे।',
    imageId: 'k1'
  },
  {
    year: '1951',
    titleEn: 'Founding of Sawan Ashram',
    titleHi: 'सावन आश्रम की स्थापना',
    descriptionEn: 'In 1951, He established Sawan Ashram on the outskirts of Delhi. This center became the heart of his spiritual mission, a place where people from all over the world could come to receive spiritual guidance and instruction in meditation.',
    descriptionHi: '1951 में, उन्होंने दिल्ली के बाहरी इलाके में सावन आश्रम की स्थापना की। यह केंद्र उनके आध्यात्मिक मिशन का हृदय बन गया, एक ऐसा स्थान जहाँ दुनिया भर से लोग आध्यात्मिक मार्गदर्शन और ध्यान में निर्देश प्राप्त करने के लिए आ सकते थे।',
    imageId: 'k10'
  },
  {
    year: '1955',
    titleEn: 'First World Tour',
    titleHi: 'प्रथम विश्व यात्रा',
    descriptionEn: 'He was the first Sant Mat Master to travel outside of India. His first world tour in 1955 took him to major cities across the United States and Europe, where He introduced the practical science of spirituality to thousands of seekers.',
    descriptionHi: 'वह भारत से बाहर यात्रा करने वाले पहले संत मत गुरु थे। 1955 में उनकी पहली विश्व यात्रा उन्हें संयुक्त राज्य अमेरिका और यूरोप के प्रमुख शहरों में ले गई, जहाँ उन्होंने हजारों साधकों को आध्यात्मिकता के व्यावहारिक विज्ञान से परिचित कराया।',
    imageId: 'k5'
  },
  {
    year: '1957',
    titleEn: 'World Fellowship of Religions',
    titleHi: 'विश्व धर्म सम्मेलन',
    descriptionEn: 'In recognition of his work for human unity, Sant Kirpal Singh Ji was unanimously elected President of the World Fellowship of Religions, a position he held for fifteen years, presiding over four world conferences.',
    descriptionHi: 'मानव एकता के लिए उनके काम की मान्यता में, संत किरपाल सिंह जी को सर्वसम्मति से विश्व धर्म सम्मेलन का अध्यक्ष चुना गया, इस पद पर वह पंद्रह वर्षों तक रहे और चार विश्व सम्मेलनों की अध्यक्षता की।',
    imageId: 'k11'
  },
  {
    year: '1963',
    titleEn: 'Second World Tour',
    titleHi: 'द्वितीय विश्व यात्रा',
    descriptionEn: 'His second world tour in 1963 further spread the message of self-knowledge and God-knowledge. He met with numerous religious and state leaders, emphasizing that the core teachings of all religions are the same.',
    descriptionHi: '1963 में उनकी दूसरी विश्व यात्रा ने आत्म-ज्ञान और ईश्वर-ज्ञान के संदेश को और फैलाया। उन्होंने कई धार्मिक और राज्य के नेताओं से मुलाकात की, इस बात पर जोर देते हुए कि सभी धर्मों की मूल शिक्षाएं समान हैं।',
    imageId: 'k12'
  },
  {
    year: '1972',
    titleEn: 'Third World Tour',
    titleHi: 'तृतीय विश्व यात्रा',
    descriptionEn: 'During his final world tour, He continued his tireless work of uniting humanity, giving talks and holding meditation sittings, and offering the gift of Naam initiation to sincere seekers everywhere.',
    descriptionHi: 'अपनी अंतिम विश्व यात्रा के दौरान, उन्होंने मानवता को एकजुट करने का अपना अथक कार्य जारी रखा, वार्ताएं दीं और ध्यान सभाएं आयोजित कीं, और हर जगह सच्चे साधकों को नाम दीक्षा का उपहार दिया।',
    imageId: 'k3'
  },
  {
    year: '1974',
    titleEn: 'Unity of Man & Passing',
    titleHi: 'मानव एकता और महाप्रयाण',
    descriptionEn: 'In February 1974, He convened the first World Conference on Unity of Man. On August 21, 1974, having completed his mission on earth, Sant Kirpal Singh Ji Maharaj left his physical body, leaving behind a legacy of love and a universal teaching for all humanity.',
    descriptionHi: 'फरवरी 1974 में, उन्होंने मानव एकता पर पहला विश्व सम्मेलन आयोजित किया। 21 अगस्त, 1974 को, पृथ्वी पर अपना मिशन पूरा करने के बाद, संत किरपाल सिंह जी महाराज ने अपना भौतिक शरीर छोड़ दिया, और अपने पीछे प्रेम की विरासत और पूरी मानवता के लिए एक सार्वभौमिक शिक्षा छोड़ गए।',
    imageId: 'k15'
  }
];


export const BOOKS: Book[] = [
    {
        id: 'insaan-apne-aap-ko-jaan',
        titleEn: 'Man! Know Thyself',
        titleHi: 'इंसान! अपने आप को जान',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1rHLCvsrOWgdubA_uZJUZYOFqV30JJu9j/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1cytP6SOQwXcBY8phaf7db8hZCi6vO7lL/view?usp=drivesdk',
        video: { id: '1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e', type: 'gdrive' },
        quizzes: [
            { id: 'insaan-apne-aap-ko-jaan-quiz', titleEn: 'Take Quiz', titleHi: 'प्रश्नोत्तरी करें', url: 'https://notebooklm.google.com/notebook/b1d363e3-63fc-4796-b852-f122662cae7e?artifactId=607b87a3-2275-48f4-a794-4ddb7a2d7576' }
        ],
    },
    {
        id: 'jeevan-ka-uddeshya',
        titleEn: 'The Purpose of Life',
        titleHi: 'जीवन का उद्देश्य',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1GaahQVnqkGIFkW3-eoZQfJ7QSXnm1B-p&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1VEcCBfkhKk4YCLPJrtvEPAAHyK0Mmy-w/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1l5NAhP3HNJD4z3GuksUPQ9EFAiirE43G/view?usp=drivesdk',
        video: { id: '1ZA-hChsk8VqSQgDDEBKjk36lme0EpMX9', type: 'gdrive' },
    },
    {
        id: 'adhyatmikta-kya-hai',
        titleEn: 'What is Spirituality?',
        titleHi: 'अध्यात्मिकता क्या है?',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1aQa1uRKRpYNV-wXlwi8YsgqsPxeb7KXe&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1aQa1uRKRpYNV-wXlwi8YsgqsPxeb7KXe/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1UDNhkt3i1IFYlzLp-GpgXzYkFKSXJEK_/view?usp=drivesdk',
        video: { id: '1Sk31C4d8g-ESF62CiDw5Ski8LaQqTLr_', type: 'gdrive' },
    }
];

export const POETRY: Poem[] = [
    {
        id: 'particle-of-dust',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Particle of Dust',
        titleHi: 'तेरे कूचे की ख़ाक',
        textEn: [
            'My only wish is to be a particle of dust in Your lane,',
            'So that I may cling to the feet of those who pass by.',
        ],
        textHi: [
            'मेरी बस एक ही तमन्ना है, कि तेरे कूचे की ख़ाक का ज़र्रा बन जाऊं,',
            'ताकि गुज़रने वालों के क़दमों से लिपट जाऊं।',
        ],
        meaningEn: 'This couplet expresses profound humility and a deep yearning for closeness to the Divine. The "lane" is the path to God, and the "dust" symbolizes the ultimate surrender of the ego. The poet wishes to become so insignificant that they can be near the holy saints ("those who pass by") who walk this path, absorbing their grace and blessings.',
        meaningHi: 'यह दोहा गहरी विनम्रता और परमात्मा के प्रति निकटता की तीव्र इच्छा को व्यक्त करता है। "कूचा" ईश्वर तक का मार्ग है, और "ख़ाक" अहंकार के अंतिम समर्पण का प्रतीक है। कवि इतना तुच्छ बन जाना चाहता है कि वह इस मार्ग पर चलने वाले पवित्र संतों ("गुज़रने वालों") के पास रह सके, उनकी कृपा और आशीर्वाद को आत्मसात कर सके।'
    },
    {
        id: 'path-of-love',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Path of Love',
        titleHi: 'इश्क़ की राह',
        textEn: [
            'O seeker, the path of love is not so easy,',
            'One has to lose oneself to find the Beloved.',
        ],
        textHi: [
            'ऐ साधक, इश्क़ की राह इतनी आसान नहीं,',
            'महबूब को पाने के लिए खुद को खोना पड़ता है।',
        ],
        meaningEn: 'This verse highlights the central tenet of mystic love (Ishq). The "path of love" is the spiritual journey, which requires the annihilation of the self (ego, worldly desires, and identity). Only by "losing oneself"—transcending the ego—can a seeker merge with the "Beloved," who is God.',
        meaningHi: 'यह पद रहस्यवादी प्रेम (इश्क़) के केंद्रीय सिद्धांत पर प्रकाश डालता है। "इश्क़ की राह" आध्यात्मिक यात्रा है, जिसके लिए स्वयं (अहंकार, सांसारिक इच्छाएं, और पहचान) के विनाश की आवश्यकता होती है। केवल "खुद को खोकर"—अहंकार से परे होकर—एक साधक "महबूब" में विलीन हो सकता है, जो ईश्वर है।'
    },
    {
        id: 'stranger-to-myself',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Stranger to Myself',
        titleHi: 'ख़ुद से बेगाना',
        textEn: [
            'I was a stranger to myself,',
            'You revealed my own secret to me.',
        ],
        textHi: [
            'मैं ख़ुद से बेगाना था,',
            'तूने ही मेरा राज़ मुझ पर खोला।',
        ],
        meaningEn: 'This reflects the state of the soul before spiritual awakening. The "I" was ignorant of its true nature (the soul). The "You" refers to the spiritual Master (Satguru), who, through initiation and guidance, reveals the "secret"—that our true identity is not the body or mind, but a divine spark, a soul connected to God.',
        meaningHi: 'यह आध्यात्मिक जागृति से पहले आत्मा की स्थिति को दर्शाता है। "मैं" अपने वास्तविक स्वरूप (आत्मा) से अनभिज्ञ था। "तू" आध्यात्मिक गुरु (सतगुरु) को संदर्भित करता है, जो दीक्षा और मार्गदर्शन के माध्यम से "राज़" प्रकट करते हैं—कि हमारी वास्तविक पहचान शरीर या मन नहीं, बल्कि एक दिव्य चिंगारी, ईश्वर से जुड़ी एक आत्मा है।'
    },
    {
        id: 'gaze-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Gaze of the Beloved',
        titleHi: 'निगाह-ए-यार',
        textEn: [
            'A single glance from the Beloved is enough,',
            'It turns a lifetime of autumn into spring.',
        ],
        textHi: [
            'बस एक निगाह-ए-यार ही काफ़ी है,',
            'जो उम्र भर की ख़िज़ाँ को बहार कर दे।',
        ],
        meaningEn: 'The "glance of the Beloved" refers to the grace of the spiritual Master. A moment of this grace can instantly transform the seeker\'s spiritual state, eradicating past karmas ("autumn") and filling the soul with divine life and love ("spring").',
        meaningHi: '"निगाह-ए-यार" का तात्पर्य आध्यात्मिक गुरु की कृपा से है। इस कृपा का एक क्षण साधक की आध्यात्मिक स्थिति को तुरंत बदल सकता है, पिछले कर्मों ("ख़िज़ाँ") को मिटा सकता है और आत्मा को दिव्य जीवन और प्रेम ("बहार") से भर सकता है।'
    },
    {
        id: 'ocean-of-mercy',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Ocean of Mercy',
        titleHi: 'रहमत का समंदर',
        textEn: [
            'I am but a sinner, You are an Ocean of Mercy,',
            'My flaws are many, but Your forgiveness is infinite.',
        ],
        textHi: [
            'मैं तो गुनहगार हूँ, तू रहमत का समंदर है,',
            'मेरे ऐब बहुत हैं, पर तेरी बख़्शिश की कोई हद नहीं।',
        ],
        meaningEn: 'This verse is a prayer of surrender. The seeker acknowledges their imperfections ("sinner," "flaws") before the boundless compassion ("Ocean of Mercy") of God and the Master. It is a plea for grace, recognizing that spiritual progress depends not on our own merit, but on divine forgiveness.',
        meaningHi: 'यह पद समर्पण की प्रार्थना है। साधक ईश्वर और गुरु की असीम करुणा ("रहमत का समंदर") के समक्ष अपनी अपूर्णताओं ("गुनहगार," "ऐब") को स्वीकार करता है। यह कृपा के लिए एक याचना है, यह स्वीकार करते हुए कि आध्यात्मिक प्रगति हमारी अपनी योग्यता पर नहीं, बल्कि दिव्य क्षमा पर निर्भर करती है।'
    },
    {
        id: 'moth-and-flame',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Moth and the Flame',
        titleHi: 'शमा और परवाना',
        textEn: [
            'Like a moth drawn to the flame, I circle Your light,',
            'To burn my false self is my only desire.',
        ],
        textHi: [
            'परवाने की तरह तेरी शमा के गिर्द घूमता हूँ,',
            'बस अपने नफ़्स को जला देने की हसरत है।',
        ],
        meaningEn: 'A classic mystical metaphor. The seeker is the "moth" (parwana) and the Master/God is the "flame" (shama). The moth\'s ultimate goal is to merge with the flame, sacrificing its individual existence. Similarly, the seeker longs to annihilate the ego ("false self") in the divine Light of the Beloved.',
        meaningHi: 'एक उत्कृष्ट रहस्यवादी रूपक। साधक "परवाना" है और गुरु/ईश्वर "शमा" है। परवाने का अंतिम लक्ष्य अपनी व्यक्तिगत सत्ता का त्याग करते हुए, शमा में विलीन हो जाना है। उसी प्रकार, साधक महबूब के दिव्य प्रकाश में अपने अहंकार ("नफ़्स") को मिटा देने की लालसा रखता है।'
    },
    {
        id: 'heart-a-mirror',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'My Heart, a Mirror',
        titleHi: 'दिल आईना है',
        textEn: [
            'I have polished the mirror of my heart with tears,',
            'Now, wherever I look, I see only Your reflection.',
        ],
        textHi: [
            'अश्कों से दिल के आईने को साफ़ किया है,',
            'अब जिधर देखता हूँ, बस तेरा ही अक्स नज़र आता है।',
        ],
        meaningEn: 'The heart is seen as a mirror that reflects the Divine. However, it is covered by the dust of worldly desires. The "tears" of repentance and longing wash away this dust. Once the heart is pure, the seeker perceives the presence of God ("Your reflection") everywhere.',
        meaningHi: 'हृदय को एक दर्पण के रूप में देखा जाता है जो परमात्मा को दर्शाता है। हालाँकि, यह सांसारिक इच्छाओं की धूल से ढका होता है। पश्चाताप और लालसा के "अश्क" इस धूल को धो देते हैं। एक बार जब हृदय शुद्ध हो जाता है, तो साधक हर जगह ईश्वर की उपस्थिति ("तेरा अक्स") को महसूस करता है।'
    },
    {
        id: 'call-of-the-flute',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Call of the Flute',
        titleHi: 'बांसुरी की पुकार',
        textEn: [
            'From within comes the call of a divine flute,',
            'It makes me forget the sorrows of both worlds.',
        ],
        textHi: [
            'अंदर से आती है एक दिव्य बांसुरी की पुकार,',
            'जो मुझे दोनों जहान के ग़म भुला देती है।',
        ],
        meaningEn: 'The "divine flute" refers to the Anhad Shabad, the Unstruck Melody or the Sound Current that reverbrates throughout creation. Hearing this inner music during meditation stills the mind and elevates the soul above all worldly and karmic suffering ("sorrows of both worlds").',
        meaningHi: '"दिव्य बांसुरी" अनहद शब्द को संदर्भित करती है, वह अनसुनी धुन या शब्द-धारा जो पूरी सृष्टि में गूंजती है। ध्यान के दौरान इस आंतरिक संगीत को सुनने से मन शांत होता है और आत्मा सभी सांसारिक और कार्मिक दुखों ("दोनों जहान के ग़म") से ऊपर उठ जाती है।'
    },
    {
        id: 'lost-in-your-lane',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Lost in Your Lane',
        titleHi: 'तेरे कूचे में गुम',
        textEn: [
            'Let me be lost in Your lane, never to be found,',
            'For in being lost from the world, I find myself.',
        ],
        textHi: [
            'तेरे कूचे में ऐसा गुम हो जाऊँ कि कोई पता न पाए,',
            'क्योंकि दुनिया से खो कर ही मैं ख़ुद को पाता हूँ।',
        ],
        meaningEn: 'Again, "Your lane" is the path of God-realization. To be "lost" here means to be completely absorbed in spiritual practice and remembrance of the Beloved, forgetting worldly identity and concerns. This state of being "lost to the world" is where the true self, the soul, is discovered.',
        meaningHi: 'फिर से, "तेरा कूचा" ईश्वर-प्राप्ति का मार्ग है। यहाँ "गुम" होने का अर्थ है, सांसारिक पहचान और चिंताओं को भूलकर, आध्यात्मिक अभ्यास और प्रियतम के स्मरण में पूरी तरह से लीन हो जाना। "दुनिया से खो जाने" की यह स्थिति वह है जहाँ सच्चे स्व, आत्मा की खोज होती है।'
    },
    {
        id: 'currency-of-tears',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Currency of Tears',
        titleHi: 'अश्कों का सौदा',
        textEn: [
            'In the marketplace of love, tears are the currency,',
            'With them, I have bought the pain of Your separation.',
        ],
        textHi: [
            'इश्क़ के बाज़ार में अश्कों का सिक्का चलता है,',
            'मैंने इन्हीं से तेरे हिज्र का दर्द ख़रीदा है।',
        ],
        meaningEn: 'Spiritual longing (viraha or birha) is a prized state for a mystic. The "marketplace of love" is the spiritual path. The "tears" of longing are the price one willingly pays to experience the sweet "pain of separation," for this very pain keeps the seeker focused on the Beloved and purifies the heart.',
        meaningHi: 'आध्यात्मिक लालसा (विरह या बिरहा) एक रहस्यवादी के लिए एक अनमोल अवस्था है। "इश्क़ का बाज़ार" आध्यात्मिक मार्ग है। लालसा के "अश्क" वह क़ीमत है जिसे साधक "हिज्र के दर्द" का अनुभव करने के लिए स्वेच्छा से चुकाता है, क्योंकि यही दर्द साधक को प्रियतम पर केंद्रित रखता है और हृदय को शुद्ध करता है।'
    },
    {
        id: 'drunk-without-wine',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Drunk Without Wine',
        titleHi: 'बिन पिए शराबी',
        textEn: [
            'I am intoxicated, though I have not touched wine,',
            'The Saki of my soul has filled my cup from His eyes.',
        ],
        textHi: [
            'मैं बिन पिए ही शराबी हूँ, कि मैंने जाम नहीं छुआ,',
            'मेरे साक़ी ने अपनी आँखों से मेरा प्याला भर दिया।',
        ],
        meaningEn: 'The "Saki" (cup-bearer) is the spiritual Master. The intoxication is not from worldly wine but from the divine grace that flows from the Master\'s "eyes" (their spiritual attention). This inner intoxication fills the soul with ecstatic love and joy.',
        meaningHi: '"साक़ी" (प्याला भरने वाला) आध्यात्मिक गुरु है। यह नशा सांसारिक शराब से नहीं, बल्कि गुरु की "आँखों" (उनकी आध्यात्मिक दृष्टि) से बहने वाली दिव्य कृपा से है। यह आंतरिक नशा आत्मा को परमानंद प्रेम और आनंद से भर देता है।'
    },
    {
        id: 'cage-of-bones',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Cage of Bones',
        titleHi: 'हड्डियों का पिंजरा',
        textEn: [
            'This cage of bones and flesh is not my home,',
            'My soul yearns for its true abode beyond the stars.',
        ],
        textHi: [
            'यह हड्डियों और मांस का पिंजरा मेरा घर नहीं,',
            'मेरी रूह तो सितारों से परे अपने वतन के लिए तड़पती है।',
        ],
        meaningEn: 'The physical body is described as a temporary prison or "cage" for the soul. The soul\'s inherent nature is to fly free and return to its "true abode"—the purely spiritual regions from which it descended. This expresses the soul\'s innate longing for liberation.',
        meaningHi: 'भौतिक शरीर को आत्मा के लिए एक अस्थायी जेल या "पिंजरे" के रूप में वर्णित किया गया है। आत्मा का सहज स्वभाव मुक्त उड़ना और अपने "असली वतन"—उन शुद्ध आध्यात्मिक क्षेत्रों में लौटना है जहाँ से वह उतरी थी। यह आत्मा की मुक्ति के लिए सहज लालसा को व्यक्त करता है।'
    },
    {
        id: 'river-to-the-ocean',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The River to the Ocean',
        titleHi: 'नदी से सागर तक',
        textEn: [
            'I am a restless river, You are the tranquil ocean,',
            'My journey ends the moment I merge into You.',
        ],
        textHi: [
            'मैं एक बेचैन नदी हूँ, तू शांत सागर है,',
            'मेरा सफ़र उसी पल ख़त्म होता है जब मैं तुझमें मिल जाती हूँ।',
        ],
        meaningEn: 'The individual soul is the "river," full of the "restlessness" of desires and karmas. God is the "tranquil ocean" of infinite peace and consciousness. The entire spiritual journey is the river\'s flow towards the ocean, and liberation (merging with God) is its ultimate destination and cessation of individual struggle.',
        meaningHi: 'व्यक्तिगत आत्मा "नदी" है, जो इच्छाओं और कर्मों की "बेचैनी" से भरी है। ईश्वर अनंत शांति और चेतना का "शांत सागर" है। पूरी आध्यात्मिक यात्रा नदी का सागर की ओर प्रवाह है, और मुक्ति (ईश्वर में विलीन होना) इसका अंतिम गंतव्य और व्यक्तिगत संघर्ष की समाप्ति है।'
    },
    {
        id: 'unstruck-melody',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unstruck Melody',
        titleHi: 'अनहद नाद',
        textEn: [
            'My heart now listens to a melody without strings,',
            'It is the music of Your love that plays within my soul.',
        ],
        textHi: [
            'मेरा दिल अब एक ऐसी धुन सुनता है जिसमें तार नहीं,',
            'यह तेरे इश्क़ का संगीत है जो मेरी रूह में बजता है।',
        ],
        meaningEn: 'This refers to the Anhad Shabad or the Sound Current. It is a "melody without strings" because it is not produced by any physical instrument. This divine vibration is the creative power of God, and experiencing it in meditation is a sign of spiritual progress and connection.',
        meaningHi: 'यह अनहद शब्द या शब्द-धारा को संदर्भित करता है। यह "बिना तार की धुन" है क्योंकि यह किसी भौतिक उपकरण द्वारा उत्पन्न नहीं होती है। यह दिव्य कंपन ईश्वर की रचनात्मक शक्ति है, और इसे ध्यान में अनुभव करना आध्यात्मिक प्रगति और जुड़ाव का संकेत है।'
    },
    {
        id: 'your-name-my-breath',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Your Name, My Breath',
        titleHi: 'तेरा नाम, मेरी साँस',
        textEn: [
            'Let Your name become the rhythm of my every breath,',
            'So that even in forgetting, I may remember You.',
        ],
        textHi: [
            'तेरा नाम मेरी हर साँस की लय बन जाए,',
            'ताकि मैं भूलकर भी तुझे याद करता रहूँ।',
        ],
        meaningEn: 'This is the practice of Simran or repetition of God\'s name(s). The goal is for this remembrance to become so automatic and ingrained that it continues effortlessly with every breath, ensuring constant connection to the Divine, even when the conscious mind is occupied.',
        meaningHi: 'यह सिमरन या ईश्वर के नाम (नामों) के दोहराव का अभ्यास है। लक्ष्य यह है कि यह स्मरण इतना सहज और अंतर्निहित हो जाए कि यह हर साँस के साथ अनायास ही चलता रहे, जिससे सचेत मन के व्यस्त होने पर भी परमात्मा से निरंतर जुड़ाव सुनिश्चित हो सके।'
    },
    {
        id: 'desert-of-separation',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Desert of Separation',
        titleHi: 'हिज्र का सहरा',
        textEn: [
            'My life is a desert of separation,',
            'Your memory is the only oasis in it.',
        ],
        textHi: [
            'मेरी ज़िन्दगी हिज्र का एक सहरा है,',
            'तेरी याद ही इसमें एकमात्र नखलिस्तान है।',
        ],
        meaningEn: 'A life without the direct experience of God is likened to a barren "desert." In this state of spiritual dryness, the only solace and source of life is the "memory" (remembrance) of the Beloved. This constant remembrance sustains the seeker on their arduous journey.',
        meaningHi: 'ईश्वर के प्रत्यक्ष अनुभव के बिना जीवन को एक बंजर "सहरा" के समान बताया गया है। इस आध्यात्मिक शुष्कता की स्थिति में, एकमात्र सांत्वना और जीवन का स्रोत प्रियतम की "याद" (स्मरण) है। यह निरंतर स्मरण साधक को उसकी कठिन यात्रा पर बनाए रखता है।'
    },
    {
        id: 'garden-of-union',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Garden of Union',
        titleHi: 'वस्ल का बाग़',
        textEn: [
            'When I closed my outer eyes, a new world opened,',
            'I found the garden of union within my own heart.',
        ],
        textHi: [
            'जब मैंने अपनी बाहरी आँखें बंद कीं, तो एक नई दुनिया खुल गई,',
            'मैंने अपने ही दिल में वस्ल का बाग़ पाया।',
        ],
        meaningEn: 'This describes the process of meditation. By withdrawing attention from the outer world ("closing outer eyes"), the seeker gains access to the inner spiritual realms ("a new world"). The ultimate experience of union ("garden of union") with God is not found outside, but within oneself.',
        meaningHi: 'यह ध्यान की प्रक्रिया का वर्णन करता है। बाहरी दुनिया से ध्यान हटाकर ("बाहरी आँखें बंद करके"), साधक आंतरिक आध्यात्मिक लोकों ("एक नई दुनिया") तक पहुँच प्राप्त करता है। ईश्वर के साथ मिलन ("वस्ल का बाग़") का अंतिम अनुभव बाहर नहीं, बल्कि अपने भीतर ही पाया जाता है।'
    },
    {
        id: 'beggar-at-your-door',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Beggar at Your Door',
        titleHi: 'तेरे दर का भिखारी',
        textEn: [
            'I have come to Your door as a beggar, with an empty bowl,',
            'I ask not for the world, but for a glimpse of You.',
        ],
        textHi: [
            'एक भिखारी बन तेरे दर पर आया हूँ, खाली कासा लिए,',
            'मैं दुनिया नहीं, बस तेरा एक दीदार मांगता हूँ।',
        ],
        meaningEn: 'This expresses the single-pointed desire of a true seeker. The "beggar" symbolizes humility and dependence on divine grace. The "empty bowl" represents a heart emptied of worldly desires. The ultimate prize sought is not material wealth but the divine "glimpse" (darshan) of the Beloved.',
        meaningHi: 'यह एक सच्चे साधक की एकमात्र इच्छा को व्यक्त करता है। "भिखारी" विनम्रता और दिव्य कृपा पर निर्भरता का प्रतीक है। "खाली कासा" सांसारिक इच्छाओं से खाली हृदय का प्रतिनिधित्व करता है। मांगी गई अंतिम वस्तु भौतिक धन नहीं, बल्कि प्रियतम का दिव्य "दीदार" (दर्शन) है।'
    },
    {
        id: 'color-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Color of the Beloved',
        titleHi: 'पिया का रंग',
        textEn: [
            'I have been dyed in the color of my Beloved,',
            'Now no other color can stain me.',
        ],
        textHi: [
            'मैं तो अपने पिया के रंग में रंग गई,',
            'अब कोई दूजा रंग मुझ पर चढ़ नहीं सकता।',
        ],
        meaningEn: 'To be "dyed in the color of the Beloved" means to be completely permeated by His love and consciousness. When one has achieved this state of spiritual absorption, worldly attractions and distractions ("other colors") lose their power and cannot "stain" the soul.',
        meaningHi: '"पिया के रंग में रंगने" का अर्थ है उनके प्रेम और चेतना से पूरी तरह से सराबोर हो जाना। जब कोई इस आध्यात्मिक तल्लीनता की स्थिति को प्राप्त कर लेता है, तो सांसारिक आकर्षण और विकर्षण ("दूजा रंग") अपनी शक्ति खो देते हैं और आत्मा को "दाग" नहीं लगा सकते।'
    },
    {
        id: 'pain-of-longing',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Pain of Longing',
        titleHi: 'तड़प का दर्द',
        textEn: [
            'Do not try to heal this sweet pain of my heart,',
            'It is this very longing that keeps me alive.',
        ],
        textHi: [
            'मेरे दिल के इस मीठे दर्द की दवा न कर,',
            'यही तड़प तो मुझे ज़िंदा रखे हुए है।',
        ],
        meaningEn: 'The pain of separation from the Beloved is considered a "sweet pain" by mystics. It is a sign of true love and a powerful motivator for spiritual practice. The seeker treasures this "longing" because it constantly reminds them of their goal and prevents complacency.',
        meaningHi: 'प्रियतम से विरह के दर्द को रहस्यवादी "मीठा दर्द" मानते हैं। यह सच्चे प्रेम का संकेत और आध्यात्मिक अभ्यास के लिए एक शक्तिशाली प्रेरक है। साधक इस "तड़प" को संजोता है क्योंकि यह उसे लगातार उसके लक्ष्य की याद दिलाती है और आत्मसंतुष्टि से बचाती है।'
    },
    {
        id: 'your-footprints-my-path',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Your Footprints, My Path',
        titleHi: 'तेरे क़दमों के निशाँ',
        textEn: [
            'I need no other map, no other guide,',
            'Your footprints are the only path I follow.',
        ],
        textHi: [
            'मुझे किसी और नक़्शे, किसी और रहबर की ज़रूरत नहीं,',
            'तेरे क़दमों के निशाँ ही मेरा एकमात्र रास्ता हैं।',
        ],
        meaningEn: 'This signifies absolute faith in the spiritual Master. The Master has already walked the spiritual path. His teachings and example ("footprints") are the only reliable "map" for the seeker to follow to reach the same destination. It is a declaration of complete surrender to the Master\'s guidance.',
        meaningHi: 'यह आध्यात्मिक गुरु में पूर्ण विश्वास को दर्शाता है। गुरु पहले ही आध्यात्मिक मार्ग पर चल चुके हैं। उनकी शिक्षाएँ और उदाहरण ("क़दमों के निशाँ") साधक के लिए उसी गंतव्य तक पहुँचने के लिए अनुसरण करने योग्य एकमात्र विश्वसनीय "नक़्शा" हैं। यह गुरु के मार्गदर्शन के प्रति पूर्ण समर्पण की घोषणा है।'
    },
    {
        id: 'the-night-of-vigil',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Night of Vigil',
        titleHi: 'इंतज़ार की रात',
        textEn: [
            'My nights are spent awake, waiting for You,',
            'Perhaps tonight, the moon of my Beloved will rise.',
        ],
        textHi: [
            'मेरी रातें तेरे इंतज़ार में जागते हुए गुज़रती हैं,',
            'शायद आज रात मेरे महबूब का चाँद निकल आए।',
        ],
        meaningEn: 'The "night" represents the period of spiritual seeking and separation. "Staying awake" symbolizes meditation and constant remembrance. The seeker perseveres with the hope ("perhaps tonight") that their efforts will be blessed with a divine vision or experience ("the moon of my Beloved will rise").',
        meaningHi: '"रात" आध्यात्मिक खोज और विरह की अवधि का प्रतिनिधित्व करती है। "जागते रहना" ध्यान और निरंतर स्मरण का प्रतीक है। साधक इस आशा ("शायद आज रात") के साथ लगा रहता है कि उसके प्रयासों को एक दिव्य दृष्टि या अनुभव ("महबूब का चाँद निकल आए") का आशीर्वाद मिलेगा।'
    },
    {
        id: 'light-within-the-light',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Light within the Light',
        titleHi: 'नूर में नूर',
        textEn: [
            'I saw a light, and within that light, another light,',
            'And in that ultimate light, I saw my Beloved\'s face.',
        ],
        textHi: [
            'मैंने एक नूर देखा, और उस नूर के अंदर एक और नूर,',
            'और उस आख़िरी नूर में, मैंने अपने महबूब का चेहरा देखा।',
        ],
        meaningEn: 'This describes the progressive experience of inner spiritual planes. As the soul travels inward during meditation, it encounters increasingly brilliant regions of light ("light within... another light"). The "ultimate light" is the source of all, where the soul finally beholds God ("my Beloved\'s face").',
        meaningHi: 'यह आंतरिक आध्यात्मिक लोकों के प्रगतिशील अनुभव का वर्णन करता है। जब आत्मा ध्यान के दौरान भीतर की यात्रा करती है, तो वह प्रकाश के बढ़ते हुए देदीप्यमान क्षेत्रों ("नूर के अंदर... एक और नूर") का सामना करती है। "आख़िरी नूर" सभी का स्रोत है, जहाँ आत्मा अंततः ईश्वर ("मेरे महबूब का चेहरा") का दर्शन करती है।'
    },
    {
        id: 'arrow-of-your-glance',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Arrow of Your Glance',
        titleHi: 'तेरी नज़र का तीर',
        textEn: [
            'The arrow of Your glance pierced my heart directly,',
            'Now it suffers a wound that I never wish to heal.',
        ],
        textHi: [
            'तेरी नज़र का तीर सीधा मेरे दिल में लगा,',
            'अब इसमें एक ऐसा ज़ख़्म है जिसे मैं कभी भरना नहीं चाहता।',
        ],
        meaningEn: 'The Master\'s graceful "glance" is like an "arrow" that awakens the soul and fills it with divine love. This awakening creates a "wound" of longing and separation, a spiritual condition so precious and transformative that the seeker wishes to preserve it forever.',
        meaningHi: 'गुरु की कृपालु "नज़र" एक "तीर" की तरह है जो आत्मा को जगाती है और उसे दिव्य प्रेम से भर देती है। यह जागृति लालसा और विरह का एक "ज़ख़्म" पैदा करती है, एक ऐसी आध्यात्मिक स्थिति जो इतनी कीमती और परिवर्तनकारी है कि साधक उसे हमेशा बनाए रखना चाहता है।'
    },
    {
        id: 'dust-of-your-feet',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Dust of Your Feet',
        titleHi: 'तेरे क़दमों की धूल',
        textEn: [
            'Make me the dust of Your feet, O my Master,',
            'For that dust is more precious than the throne of kings.',
        ],
        textHi: [
            'ऐ मेरे मुर्शिद, मुझे अपने क़दमों की धूल बना ले,',
            'क्योंकि वह धूल बादशाहों के तख़्त से भी ज़्यादा क़ीमती है।',
        ],
        meaningEn: 'This expresses extreme humility. The "dust of the Master\'s feet" symbolizes the lowest, most humble position, yet it is considered priceless because it signifies closeness to the Master and absorption of his spiritual vibrations. All worldly power and wealth ("throne of kings") pale in comparison.',
        meaningHi: 'यह अत्यधिक विनम्रता को व्यक्त करता है। "गुरु के क़दमों की धूल" सबसे निम्न, सबसे विनम्र स्थिति का प्रतीक है, फिर भी इसे अनमोल माना जाता है क्योंकि यह गुरु से निकटता और उनके आध्यात्मिक कंपनों के अवशोषण का प्रतीक है। सभी सांसारिक शक्ति और धन ("बादशाहों का तख़्त") इसकी तुलना में फीके हैं।'
    },
    {
        id: 'story-of-my-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Story of My Heart',
        titleHi: 'मेरे दिल की कहानी',
        textEn: [
            'My heart has only one story to tell,',
            'It begins with Your name and ends with Your name.',
        ],
        textHi: [
            'मेरे दिल के पास सुनाने को बस एक ही कहानी है,',
            'इसकी शुरुआत भी तेरे नाम से होती है और अंत भी तेरे नाम से।',
        ],
        meaningEn: 'This shows a state of complete devotion. The seeker\'s entire existence, their inner life ("story of my heart"), revolves around the Beloved. All thoughts, feelings, and aspirations are centered on the remembrance of God, making His name the alpha and omega of their life.',
        meaningHi: 'यह पूर्ण भक्ति की स्थिति को दर्शाता है। साधक का पूरा अस्तित्व, उसका आंतरिक जीवन ("दिल की कहानी"), प्रियतम के इर्द-गिर्द घूमता है। सभी विचार, भावनाएँ और आकांक्षाएँ ईश्वर के स्मरण पर केंद्रित हैं, जिससे उनका नाम उनके जीवन का आदि और अंत बन जाता है।'
    },
    {
        id: 'secret-of-the-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Secret of the Heart',
        titleHi: 'दिल का राज़',
        textEn: [
            'Don\'t search for Him in temples and mosques,',
            'The Beloved you seek resides within your own heart.',
        ],
        textHi: [
            'उसे मंदिरों और मस्जिदों में मत ढूंढो,',
            'जिस महबूब को तुम ढूंढते हो, वह तुम्हारे अपने दिल में रहता है।',
        ],
        meaningEn: 'A core teaching of Sant Mat. It redirects the seeker from external rituals and places of worship to the inner path. The "secret" is that God is not a distant entity to be found outside, but an inner reality to be experienced within the "heart" or soul.',
        meaningHi: 'संत मत की एक मुख्य शिक्षा। यह साधक को बाहरी अनुष्ठानों और पूजा स्थलों से हटाकर आंतरिक मार्ग की ओर निर्देशित करती है। "राज़" यह है कि ईश्वर कोई दूर की सत्ता नहीं है जिसे बाहर पाया जाए, बल्कि एक आंतरिक वास्तविकता है जिसे "दिल" या आत्मा के भीतर अनुभव किया जाना है।'
    },
    {
        id: 'price-of-a-glimpse',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Price of a Glimpse',
        titleHi: 'एक झलक की क़ीमत',
        textEn: [
            'If I have to offer my life for a single glimpse of You,',
            'Believe me, the transaction would still be in my favor.',
        ],
        textHi: [
            'अगर तेरी एक झलक के लिए मुझे अपनी जान भी देनी पड़े,',
            'यकीन मान, यह सौदा फिर भी मेरे हक़ में होगा।',
        ],
        meaningEn: 'This verse illustrates the infinite value of a divine experience ("a single glimpse"). The seeker considers their own life a small price to pay for such a blessing. It shows that for a true lover of God, spiritual union is the most valuable attainment, far surpassing physical existence.',
        meaningHi: 'यह पद एक दिव्य अनुभव ("एक झलक") के अनंत मूल्य को दर्शाता है। साधक ऐसे आशीर्वाद के लिए अपने जीवन को एक छोटी सी कीमत मानता है। यह दर्शाता है कि एक सच्चे ईश्वर-प्रेमी के लिए, आध्यात्मिक मिलन सबसे मूल्यवान प्राप्ति है, जो भौतिक अस्तित्व से कहीं बढ़कर है।'
    }
];

export const SATSANG_CLIPS: Video[] = [
    { id: "10ojtFcxhuoxDPlVvwkrJmeEBG30g3QlK", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/10ojtFcxhuoxDPlVvwkrJmeEBG30g3QlK/view?usp=drivesdk" },
    { id: "3h22llbkYxU", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1M3kCJ_zB9ca2FxP0ZdoU0rqHKJlAKaCO/view?usp=drivesdk" },
    { id: "9PN3ZCmNZKE", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1ePfbUoZXHiuo9gBy_NEvcOsUhYIUmPUA/view?usp=drivesdk" },
    { id: "1qmVg312NAydnCvL58jszATdJkSIE0rUb", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1qmVg312NAydnCvL58jszATdJkSIE0rUb/view?usp=drivesdk" },
    { id: "JiHl2mV01WY", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1P_JUH9PTM3xYZjli89QHYHlFe1z1LuD-/view?usp=drivesdk" },
    { id: "1BoqDxkGou6RyNpsbj6ecMTldz2vMD009", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1BoqDxkGou6RyNpsbj6ecMTldz2vMD009/view?usp=drivesdk" },
    { id: "1g12qZK3KvIGhG0cJNjC-1uX6dKzqE4wO", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1g12qZK3KvIGhG0cJNjC-1uX6dKzqE4wO/view?usp=drivesdk" },
    { id: "1UbDyRRH-Xd8I8lkDRIZfxq5SnGJZyrFq", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1UbDyRRH-Xd8I8lkDRIZfxq5SnGJZyrFq/view?usp=drivesdk" },
    { id: "1apXvXEVUunX6AJKeG4koDGf7JAlnjfLB", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1apXvXEVUunX6AJKeG4koDGf7JAlnjfLB/view?usp=drivesdk" },
    { id: "1N7UP9Ha0ywwVEXBdir8er9yy9dAOBuuS", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1N7UP9Ha0ywwVEXBdir8er9yy9dAOBuuS/view?usp=drivesdk" },
    { id: "1WhxUzeXSUhzByCVzPIMiDjFhjpuxP8nu", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1WhxUzeXSUhzByCVzPIMiDjFhjpuxP8nu/view?usp=drivesdk" },
    { id: "1zRo1tWo0JV5kzGlw0IfC2ZNL_1ThHlwo", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1zRo1tWo0JV5kzGlw0IfC2ZNL_1ThHlwo/view?usp=drivesdk" },
    { id: "1CJR56ipmsJWuvJvjF2XTsSDqfjm8Fe3O", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1CJR56ipmsJWuvJvjF2XTsSDqfjm8Fe3O/view?usp=drivesdk" },
    { id: "1nNZRAf49_QP7p_fwA_cCh6TWZyLFuV6S", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1nNZRAf49_QP7p_fwA_cCh6TWZyLFuV6S/view?usp=drivesdk" },
    { id: "1wI9JHmQ9VFyv34_s5PqajuXSn_ol0RX-", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1wI9JHmQ9VFyv34_s5PqajuXSn_ol0RX-/view?usp=drivesdk" },
    { id: "1ct4f2o-vJWExxe4Ccor2MysY1bjcSCKS", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1ct4f2o-vJWExxe4Ccor2MysY1bjcSCKS/view?usp=drivesdk" },
    { id: "1dqJN4jVPNt2LLTqJHBHPghM76PvbwxbK", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1dqJN4jVPNt2LLTqJHBHPghM76PvbwxbK/view?usp=drivesdk" },
    { id: "1PFeinD4iS4Qpz1v935Ba0n-6S6Tm_sSB", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1PFeinD4iS4Qpz1v935Ba0n-6S6Tm_sSB/view?usp=drivesdk" },
    { id: "1sQbONcxZ4AoucmtLWVoMJOm0UbhghQlr", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1sQbONcxZ4AoucmtLWVoMJOm0UbhghQlr/view?usp=drivesdk" },
    { id: "1zh9EdXkXA4bSO_W1Ogt54OGmq61n6qS-", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1zh9EdXkXA4bSO_W1Ogt54OGmq61n6qS-/view?usp=drivesdk" },
    { id: "1u4TVPLlgzQQLCHIbDiKXFEa7u-eQqjbx", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1u4TVPLlgzQQLCHIbDiKXFEa7u-eQqjbx/view?usp=drivesdk" },
    { id: "1w7-b4HO35RXiJepK_qicVV9totfLqizF", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1w7-b4HO35RXiJepK_qicVV9totfLqizF/view?usp=drivesdk" },
    { id: "1CXTKL_w5TydEshXf9hKCpHXu1dsnDKIH", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1CXTKL_w5TydEshXf9hKCpHXu1dsnDKIH/view?usp=drivesdk" },
    { id: "1alYk-DyYskdjDEQs5PvXal9wmSkZdm2x", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1alYk-DyYskdjDEQs5PvXal9wmSkZdm2x/view?usp=drivesdk" },
    { id: "1Y20HdUaXbLQmmgIRbyMR-QPA1liBic3g", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1Y20HdUaXbLQmmgIRbyMR-QPA1liBic3g/view?usp=drivesdk" },
    { id: "1pf8Z7SZb8q4PivEU3FHD6TVkwdqsGo7W", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1pf8Z7SZb8q4PivEU3FHD6TVkwdqsGo7W/view?usp=drivesdk" },
    { id: "1kMiyj4Mo-5CQhJswBFHy_EDpCeRThXwL", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1kMiyj4Mo-5CQhJswBFHy_EDpCeRThXwL/view?usp=drivesdk" },
    { id: "1jZkUSDAUpyMigQTlw-3jEvPNcj1BptGJ", type: 'gdrive', downloadUrl: "https://drive.google.com/file/d/1jZkUSDAUpyMigQTlw-3jEvPNcj1BptGJ/view?usp=drivesdk" },
];

export const VIDEOS: Video[] = [
    { id: "12zL-FwJCTA", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/15Vak-Jsx2JAlXuNEDck3_2FfA36cSDV9/view?usp=drivesdk" },
    { id: "UuKwoW2rulQ", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1_Yc4dtnYfr4RVa88bVGKmVs44XONxHRE/view?usp=drivesdk" },
    { id: "dfPsFJVCsSo", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1GNvX84KamnjiyiWwz0kO0OxiyhcFQNth/view?usp=drivesdk" },
    { id: "qiyNJYCXD-8", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1D3UsB8nvKAy1hStM4-rIAm2R4g_KL5xx/view?usp=drivesdk" },
    { id: "wH4Sma5ENY0", type: 'youtube' },
    { id: "Kdn6M8BSVqs", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1svT8m6x7VnjoXoYFOPS9P0rkzlDcZpiu/view?usp=drivesdk" },
    { id: "RyZCAIbozIs", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/181DmOLBVEAI0wz2TcHv3x-QgX9dzLkZY/view?usp=drivesdk" },
    { id: "EW9ManLXD-8", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/14A8PV87p9AW8SzM7G3fdDDboSRezSRi8/view?usp=drivesdk" },
    { id: "pd0tvFE7mws", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1CJ_De3qvhypRakJMNxOBvgUYDLrRfj4J/view?usp=drivesdk" },
    { id: "WWammctiRVU", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1l3EPY5qenwMzUxFOjw8vgGUpR-DOGzmN/view?usp=drivesdk" },
    { id: "4GYtpj8DcfY", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1IxsuTeGxmtsj_McMLHRgRaaTfi1kQHye/view?usp=drivesdk" },
    { id: "t5RvKKDdOwA", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1w_GtVwXpFwpVRmYPMXx63aur9DclNdMD/view?usp=drivesdk" },
    { id: "Du40yHBnrNc", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1GQxrJ3T4XGG6tIO9N1JJwWyqjZBOPMiA/view?usp=drivesdk" },
    { id: "AyhenxIDp5w", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1YOhR2eSQHNKzsDcQPv7ZBcLC5qiz9v8E/view?usp=drivesdk" },
    { id: "EfcVyfLvrJA", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1oI4AJPMNaaCQeFbrzaLpMRlbRcI9_xGg/view?usp=drivesdk" },
    { id: "c9AGOiLeq50", type: 'youtube' },
    { id: "i089VSiC-CM", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1YyngV0BLUWeiYBaLXsdYs4ZxEGNvyT-W/view?usp=drivesdk" },
    { id: "E7PtfVeFD-k", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1K4vQY_AyOosDi8yDldymsbSTxaQWeDHc/view?usp=drivesdk" },
    { id: "9CFZJD7SHMg", type: 'youtube' },
    { id: "qIA4pyqw03k", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1_iwK23GcPTWQRLmQIVyI8ekn-P7jYo7y/view?usp=drivesdk" },
    { id: "u6gShl6g9VU", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1BG_GXZxHKUEmFSq30dCqLuCeMBWiNlRU/view?usp=drivesdk" },
    { id: "TJpPgC1dfiw", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1ExGqO2u6BpzySE_lmQip8l8s77Tv81i2/view?usp=drivesdk" },
    { id: "G6XtvB08AMo", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1P9pffk0sWaSW2fWScU0J7pAqC7ZiQSFW/view?usp=drivesdk" },
    { id: "Ko4m6mZ7uwE", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/12sv5lhP1wVmomfB9RERf8AUz9ACy1CZc/view?usp=drivesdk" },
    { id: "wfQ1t92Zfyk", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1yZJA-I8sOprKtnpQQkDTkjj160VXDCU_/view?usp=drivesdk" },
    { id: "IGd0fe1Hjag", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1YG-EQ-EebMT49z7IL6BHo7stb0vZ37A_/view?usp=drivesdk" },
    { id: "pBsYVrqmhRE", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1CUzxJwwg2VihGp44fpFaKAk-3n0YKAhl/view?usp=drivesdk" },
    { id: "_NoH1aAlkYQ", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1uaqZJr4H-6JvAUCLJP_8U15nc66DMjID/view?usp=drivesdk" },
    { id: "3MLadCZPtB0", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/195BSm6mFKIPLolPxlb68oQEDRPbqILyi/view?usp=drivesdk" },
    { id: "KFW6u5NdyyY", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1pIyRR3mrvriWh95paQlwRZwHymGcIHgJ/view?usp=drivesdk" },
    { id: "uHeM3dUs2s0", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1Kr1dPfHztr7z-1QO-mKdGVR7ynR4aUBz/view?usp=drivesdk" },
    { id: "uPMmifAjycI", type: 'youtube' },
    { id: "s-9MrfNvjzk", type: 'youtube' },
    { id: "RmlC0LT7HPc", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1DI_NEWteElVaX8UoZuVeBc3RQcmdpl8y/view?usp=drivesdk" },
    { id: "zehmX3D0qAs", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1bSLNhiIapkCcOAHFUimWrkz7WJ3BFxjw/view?usp=drivesdk" },
    { id: "CWxFqcQn7zI", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1uNadG6jNz2XMiTooOJgrDXnYT8MWdZOm/view?usp=drivesdk" },
    { id: "3ic0jXdKwZA", type: 'youtube', downloadUrl: "https://drive.google.com/file/d/1ktjr-vtu1etInniGxq2FOLIrkzljNAQD/view?usp=drivesdk" },
];