

export interface Video {
    id: string; // youtube ID or GDrive file ID
    type: 'youtube' | 'gdrive';
    downloadUrl?: string;
}

export interface Book {
    id:string;
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
    { id: 'k1', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Sant_Kirpal_Singh.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Sant_Kirpal_Singh.jpg', altEn: 'A portrait of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक चित्र' },
    { id: 'k2', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_vortrag_1972_FFM.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_vortrag_1972_FFM.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj in a thoughtful pose', altHi: 'संत किरपाल सिंह जी महाराज एक विचारशील मुद्रा में' },
    { id: 'k3', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_1972_tour_FFM.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_1972_tour_FFM.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj speaking to an audience', altHi: 'संत किरपाल सिंह जी महाराज एक सभा को संबोधित करते हुए' },
    { id: 'k4', thumbnailUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Kirpal.jpeg', fullUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Kirpal.jpeg', altEn: 'A smiling photo of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज की एक मुस्कुराती हुई तस्वीर' },
    { id: 'k5', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_und_Dr._Harbhajan_Singh_in_Kalifornien_1972.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_und_Dr._Harbhajan_Singh_in_Kalifornien_1972.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj during a tour abroad', altHi: 'संत किरपाल सिंह जी महाराज विदेश यात्रा के दौरान' },
    { id: 'k6', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_im_gespraech_1972.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_im_gespraech_1972.jpg', altEn: 'A candid moment of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक स्पष्ट क्षण' },
    { id: 'k7', thumbnailUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Kirpal_Singh2.jpeg', fullUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Kirpal_Singh2.jpeg', altEn: 'Sant Kirpal Singh Ji Maharaj in meditation', altHi: 'संत किरपाल सिंह जी महाराज ध्यान में' },
    { id: 'k8', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_in_seinem_Haus_in_Delhi.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_in_seinem_Haus_in_Delhi.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj sitting on a chair', altHi: 'संत किरपाल सिंह जी महाराज एक कुर्सी पर बैठे हुए' },
    { id: 'k9', thumbnailUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Sawan_und_Kirpal.jpeg', fullUrl: 'https://www.soren.schmidt.name/SKS/Bilder/Sawan_und_Kirpal.jpeg', altEn: 'Sant Kirpal Singh Ji Maharaj with his Master, Baba Sawan Singh Ji', altHi: 'संत किरपाल सिंह जी महाराज अपने गुरु, बाबा सावन सिंह जी के साथ' },
    { id: 'k10', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sawan_Ashram_gate_Delhi.jpg/1280px-Sawan_Ashram_gate_Delhi.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sawan_Ashram_gate_Delhi.jpg/1280px-Sawan_Ashram_gate_Delhi.jpg', altEn: 'Sawan Ashram in Delhi, India', altHi: 'सावन आश्रम, दिल्ली, भारत' },
    { id: 'k11', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_bei_der_Weltkonferenz_der_Religionen_1957.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_bei_der_Weltkonferenz_der_Religionen_1957.jpg', altEn: 'Sant Kirpal Singh Ji speaking at the World Fellowship of Religions', altHi: 'संत किरपाल सिंह जी विश्व धर्म सम्मेलन में बोलते हुए' },
    { id: 'k12', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_und_Dr._Harbhajan_Singh_in_Kalifornien_1972.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Sant_Kirpal_Singh_und_Dr._Harbhajan_Singh_in_Kalifornien_1972.jpg', altEn: 'Sant Kirpal Singh Ji on one of his world tours', altHi: 'संत किरपाल सिंह जी अपनी एक विश्व यात्रा पर' },
    { id: 'k15', thumbnailUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_Weltkonferenz_ueber_die_Einheit_des_Menschen_1974.jpg', fullUrl: 'https://www.sant-kirpal-singh.org/images/Kirpal_Singh_Weltkonferenz_ueber_die_Einheit_des_Menschen_1974.jpg', altEn: 'Sant Kirpal Singh Ji at the World Conference on Unity of Man', altHi: 'संत किरपाल सिंह जी मानव एकता पर विश्व सम्मेलन में' },
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
        meaningHi: 'यह कविता गहरी नम्रता और भगवान के पास रहने की इच्छा दिखाती है। "कूचा" का मतलब है भगवान का रास्ता, और "ख़ाक" का मतलब है अपने अहंकार को पूरी तरह मिटा देना। कवि चाहते हैं कि वे इतने छोटे बन जाएं कि उस रास्ते पर चलने वाले संतों के पैरों से लगकर उनका आशीर्वाद पा सकें।'
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
        meaningHi: 'यह कविता बताती है कि प्यार का रास्ता आसान नहीं है। "इश्क़ की राह" यानी भगवान तक पहुँचने का सफ़र। इस रास्ते पर अपने प्यारे (भगवान) को पाने के लिए, इंसान को पहले खुद को (अपने अहंकार और इच्छाओं को) मिटाना पड़ता है।'
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
        meaningHi: 'यह कविता बताती है कि गुरु से मिलने से पहले हम खुद को नहीं जानते थे। हम अपने असली रूप, यानी आत्मा, से अनजान थे। "तू" का मतलब गुरु है, जिन्होंने हमें यह राज़ बताया कि हम शरीर या मन नहीं, बल्कि भगवान का एक अंश, एक आत्मा हैं।'
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
        meaningHi: '"यार की एक नज़र" का मतलब है गुरु की कृपा। उनकी कृपा का एक पल ही साधक की रूहानी हालत को पूरी तरह बदल सकता है। यह हमारे बुरे कर्मों ("पतझड़") को मिटाकर आत्मा को रूहानी खुशी और प्यार ("बहार") से भर देता है।'
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
        meaningHi: 'यह कविता भगवान के आगे समर्पण की प्रार्थना है। साधक अपनी गलतियों ("गुनहगार") को भगवान और गुरु की अपार दया ("रहमत का समंदर") के सामने मानता है। यह कृपा के लिए एक विनती है, क्योंकि रूहानी तरक्की हमारी अपनी अच्छाई से नहीं, बल्कि भगवान की माफी से होती है।'
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
        meaningHi: 'यह एक सुंदर उदाहरण है। साधक एक "परवाने" (कीट) की तरह है और गुरु या भगवान "शमा" (लौ) की तरह हैं। परवाने का लक्ष्य शमा में मिलकर खुद को मिटा देना होता है। उसी तरह, साधक भी अपने अहंकार ("मैं") को भगवान के दिव्य प्रकाश में खत्म कर देना चाहता है।'
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
        meaningHi: 'दिल को एक आईने की तरह माना गया है जिसमें भगवान दिखते हैं। लेकिन यह दुनिया की इच्छाओं की धूल से ढका होता है। पश्चाताप और याद के "आँसू" इस धूल को साफ कर देते हैं। जब दिल साफ हो जाता है, तो साधक को हर जगह भगवान ही नज़र आते हैं।'
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
        meaningHi: '"दिव्य बांसुरी" का मतलब है अनहद शब्द, यानी वो दिव्य संगीत जो पूरी सृष्टि में गूंज रहा है। ध्यान में इस अंदरूनी संगीत को सुनने से मन शांत हो जाता है और आत्मा दुनिया के सभी दुखों से ऊपर उठ जाती है।'
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
        meaningHi: 'यहाँ "तेरा कूचा" भगवान को पाने का रास्ता है। इसमें "गुम हो जाने" का मतलब है कि दुनिया की चिंताओं को भूलकर, पूरी तरह से ध्यान और सुमिरन में डूब जाना। जब इंसान दुनिया के लिए खो जाता है, तभी वह अपने असली स्वरूप, यानी आत्मा को पाता है।'
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
        meaningHi: 'भगवान से मिलने की तड़प एक कीमती एहसास है। "इश्क़ का बाज़ार" रूहानी रास्ता है। इस रास्ते पर, याद में बहाए गए "आँसू" वो कीमत हैं जिनसे जुदाई का मीठा दर्द मिलता है। यही दर्द साधक का ध्यान भगवान पर लगाए रखता है और दिल को साफ करता है।'
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
        meaningHi: '"साक़ी" का मतलब है गुरु, जो रूहानी मस्ती का जाम पिलाते हैं। यह नशा दुनिया की शराब का नहीं, बल्कि गुरु की आँखों से मिलने वाली कृपा का है। यह अंदरूनी नशा आत्मा को दिव्य प्रेम और आनंद से भर देता है।'
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
        meaningHi: 'हमारा शरीर आत्मा के लिए एक "पिंजरे" की तरह है, जो अस्थायी है। आत्मा का असली घर तो बहुत ऊपर, रूहानी मंडलों में है। यह कविता आत्मा की अपने असली घर वापस जाने की तड़प को दिखाती है।'
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
        meaningHi: 'आत्मा एक "नदी" की तरह है, जो इच्छाओं और कर्मों के कारण बेचैन है। भगवान एक "शांत सागर" की तरह हैं। आत्मा का पूरा सफ़र नदी का सागर की तरफ बहना है। जब आत्मा भगवान में मिल जाती है, तो उसका सफ़र और संघर्ष खत्म हो जाता है।'
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
        meaningHi: 'यह कविता "अनहद शब्द" के बारे में है। यह एक ऐसी धुन है जो बिना किसी बाजे के बजती है। यह भगवान की दिव्य शक्ति है। ध्यान में इस धुन को सुनना रूहानी तरक्की और भगवान से जुड़ाव का संकेत है।'
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
        meaningHi: 'यह कविता सुमिरन के अभ्यास के बारे में है, यानी भगवान के नाम को याद करना। इसका लक्ष्य यह है कि भगवान का नाम हमारी हर साँस के साथ अपने आप चले, ताकि हम कभी भी, किसी भी हाल में, उन्हें न भूलें।'
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
        meaningHi: 'भगवान के अनुभव के बिना जीवन एक सूखे "रेगिस्तान" जैसा है। इस सूखेपन में, केवल भगवान की "याद" ही एक "नखलिस्तान" (ओएसिस) की तरह है जो राहत और सहारा देती है। यही याद साधक को मुश्किल सफ़र में हिम्मत देती है।'
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
        meaningHi: 'यह कविता ध्यान की प्रक्रिया को बताती है। जब हम बाहरी दुनिया से ध्यान हटाकर ("बाहरी आँखें बंद करके") अंदर देखते हैं, तो एक नई रूहानी दुनिया खुल जाती है। भगवान से मिलने का अनुभव ("वस्ल का बाग़") कहीं बाहर नहीं, बल्कि हमारे अपने अंदर ही होता है।'
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
        meaningHi: 'यह कविता एक सच्चे साधक की इच्छा को दिखाती है। "भिखारी" का मतलब है विनम्रता और कृपा पर निर्भरता। "खाली कटोरा" का मतलब है ऐसा दिल जिसमें दुनिया की कोई इच्छा न हो। साधक दुनिया की दौलत नहीं, बल्कि अपने भगवान की एक "झलक" (दीदार) मांगता है।'
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
        meaningHi: '"पिया के रंग में रंगने" का मतलब है पूरी तरह से भगवान के प्यार में डूब जाना। जब कोई इस रूहानी अवस्था को पा लेता है, तो दुनिया की कोई भी चीज़ ("दूसरा रंग") उसे अपनी ओर खींच नहीं सकती और उसकी आत्मा पर असर नहीं डाल सकती।'
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
        meaningHi: 'भगवान से जुदाई का दर्द एक "मीठा दर्द" होता है। यह सच्चे प्यार की निशानी है और हमें ध्यान-भजन करने के लिए प्रेरित करता है। साधक इस "तड़प" को बहुत कीमती समझता है क्योंकि यह उसे हमेशा अपने लक्ष्य की याद दिलाती है।'
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
        meaningHi: 'यह कविता गुरु में पूरे विश्वास को दिखाती है। गुरु पहले ही रूहानी रास्ते पर चल चुके हैं। उनकी शिक्षाएं ("कदमों के निशान") ही साधक के लिए एकमात्र सही "नक्शा" हैं। यह गुरु के मार्गदर्शन में पूरी तरह से समर्पण करने जैसा है।'
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
        meaningHi: '"रात" का मतलब है जुदाई और खोज का समय। "जागते रहना" का मतलब है ध्यान और सुमिरन करना। साधक इस उम्मीद में लगा रहता है कि शायद आज उसकी मेहनत सफल हो और उसे भगवान का दर्शन ("महबूब का चाँद") हो जाए।'
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
        meaningHi: 'यह कविता ध्यान के अंदरूनी अनुभव को बताती है। जब आत्मा ध्यान में ऊपर जाती है, तो उसे एक के बाद एक रौशनी के मंडल ("नूर में नूर") दिखाई देते हैं। जो "आखिरी नूर" है, वही सबका स्रोत है, जहाँ आत्मा को आखिरकार भगवान का चेहरा दिखाई देता है।'
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
        meaningHi: 'गुरु की कृपा भरी "नज़र" एक "तीर" की तरह है जो आत्मा को जगा देती है और उसे भगवान के प्यार से भर देती है। इस जागृति से दिल में तड़प का एक "ज़ख्म" बन जाता है, जो इतना कीमती है कि साधक उसे कभी ठीक नहीं करना चाहता।'
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
        meaningHi: 'यह कविता अत्यधिक विनम्रता दिखाती है। "गुरु के कदमों की धूल" बनना सबसे छोटा स्थान है, लेकिन यह बहुत कीमती है क्योंकि इससे गुरु का साथ मिलता है। दुनिया की कोई भी ताकत या दौलत ("राजा का सिंहासन") इसके सामने कुछ भी नहीं है।'
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
        meaningHi: 'यह पूरी भक्ति की अवस्था को दर्शाता है। साधक का पूरा जीवन ("दिल की कहानी") उसके भगवान के चारों ओर घूमता है। उसके सभी विचार और भावनाएं केवल भगवान की याद में केंद्रित हैं। भगवान का नाम ही उसके जीवन की शुरुआत और अंत है।'
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
        meaningHi: 'यह संत मत की एक मुख्य शिक्षा है। यह साधक को बाहरी पूजा-पाठ से हटाकर अंदर के रास्ते पर लाती है। "राज़" यह है कि भगवान कहीं बाहर नहीं, बल्कि हमारे अपने "दिल" या आत्मा के अंदर ही मौजूद हैं।'
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
        meaningHi: 'यह कविता भगवान के दर्शन ("एक झलक") की अनमोल कीमत को बताती है। साधक के लिए, भगवान का दर्शन इतना कीमती है कि उसके लिए अपनी जान देना भी एक फायदे का सौदा है। यह दिखाता है कि भगवान के सच्चे प्रेमी के लिए, रूहानी मिलाप ही सबसे बड़ी दौलत है।'
    },
    {
        id: 'the-tavern-of-love',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Tavern of Love',
        titleHi: 'इश्क़ का मैख़ाना',
        textEn: [
            'The Master\'s eye is the tavern of divine love,',
            'A single glance fills the cup of the soul for all eternity.',
        ],
        textHi: [
            'मुर्शिद की नज़र इश्क़ का मैख़ाना है,',
            'एक निगाह रूह का प्याला हमेशा के लिए भर देती है।',
        ],
        meaningEn: 'The "tavern" is a metaphor for the place where one receives spiritual intoxication. Here, it is the Master\'s graceful glance ("nazar") which is the source of this divine wine. This grace is so powerful that a single moment of it can grant everlasting spiritual bliss.',
        meaningHi: '"मैख़ाना" वह जगह है जहाँ रूहानी नशा मिलता है। यहाँ, गुरु की कृपा भरी नज़र ही उस दिव्य शराब का स्रोत है। उनकी कृपा इतनी शक्तिशाली है कि एक पल की नज़र भी आत्मा को हमेशा के लिए रूहानी आनंद से भर सकती है।'
    },
    {
        id: 'the-unseen-artist',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unseen Artist',
        titleHi: 'अनदेखा कलाकार',
        textEn: [
            'I see Your artistry in every leaf and every star,',
            'But my eyes still long to see the Artist Himself.',
        ],
        textHi: [
            'हर पत्ते और हर सितारे में तेरी कलाकारी देखता हूँ,',
            'पर मेरी आँखें तो खुद कलाकार को देखने के लिए तरसती हैं।',
        ],
        meaningEn: 'The seeker acknowledges the beauty of creation as a manifestation of the Creator ("the Artist"). However, appreciating the creation is not enough; the ultimate desire is to go beyond the creation and have a direct vision of the Creator Himself.',
        meaningHi: 'साधक दुनिया की हर चीज़ में बनाने वाले ("कलाकार") की कला को देखता है। लेकिन सिर्फ दुनिया की सुंदरता देखना काफी नहीं है; उसकी असली इच्छा तो उस बनाने वाले को सीधे देखने की है।'
    },
    {
        id: 'the-wine-of-oneness',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Wine of Oneness',
        titleHi: 'वहदत की शराब',
        textEn: [
            'I drank the wine of Oneness and lost all duality,',
            'Now I see my Beloved in myself, and myself in my Beloved.',
        ],
        textHi: [
            'मैंने वहदत की शराब पी और सारी द्वैत खो दी,',
            'अब मैं अपने महबूब को अपने में, और अपने को अपने महबूब में देखता हूँ।',
        ],
        meaningEn: 'The "wine of Oneness" (Wahdat) is the experience of non-duality, the ultimate goal of mysticism. When the soul realizes its unity with God, the illusion of separation ("duality") vanishes. The lover and the Beloved become one.',
        meaningHi: '"एकता की शराब" पीने का मतलब है उस अवस्था को पाना जहाँ कोई दूसरा नहीं रहता, सब एक हो जाते हैं। जब आत्मा को यह एहसास होता है कि वह भगवान से एक है, तो अलगाव का भ्रम मिट जाता है। प्रेमी और प्रियतम एक हो जाते हैं।'
    },
    {
        id: 'pilgrim-of-the-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Pilgrim of the Heart',
        titleHi: 'दिल का तीर्थयात्री',
        textEn: [
            'Why wander to distant lands on pilgrimage?',
            'The holiest of shrines lies within your own heart.',
        ],
        textHi: [
            'तीर्थयात्रा पर दूर देशों में क्यों भटकें?',
            'सबसे पवित्र तीर्थ तो तुम्हारे अपने दिल के भीतर है।',
        ],
        meaningEn: 'This verse reiterates the core principle of inward-focused spirituality. It discourages external pilgrimages, teaching that the true journey is one of introspection to find God, who resides within the "shrine" of the human heart.',
        meaningHi: 'यह कविता अंदर की यात्रा पर जोर देती है। यह बाहरी तीर्थ यात्राओं के बजाय यह सिखाती है कि असली सफ़र तो अपने अंदर भगवान को खोजने का है, जो हमारे "दिल" के मंदिर में ही बैठे हैं।'
    },
    {
        id: 'language-of-silence',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Language of Silence',
        titleHi: 'ख़ामोशी की ज़ुबान',
        textEn: [
            'My lips are silent, but my heart converses with You,',
            'In the language of love that needs no words.',
        ],
        textHi: [
            'मेरे होंठ ख़ामोश हैं, पर मेरा दिल तुझसे बातें करता है,',
            'इश्क़ की उस ज़ुबान में जिसे शब्दों की ज़रूरत नहीं।',
        ],
        meaningEn: 'True spiritual communion transcends language. The "language of silence" is the telepathic connection of love between the soul and God. In the depths of meditation, the heart speaks directly to the Beloved without the need for spoken or written words.',
        meaningHi: 'सच्चा रूहानी संवाद शब्दों से परे होता है। "ख़ामोशी की ज़ुबान" आत्मा और भगवान के बीच प्रेम का वो कनेक्शन है जिसमें बोलने की ज़रूरत नहीं होती। गहरे ध्यान में, दिल सीधे भगवान से बात करता है।'
    },
    {
        id: 'drop-in-the-ocean-reprise',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Drop in the Ocean',
        titleHi: 'सागर में बूँद',
        textEn: [
            'For ages, this drop has been separate from its Ocean,',
            'Now it yearns for nothing but to merge and disappear.',
        ],
        textHi: [
            'युगों से यह बूँद अपने सागर से अलग रही है,',
            'अब इसे विलीन होकर मिट जाने के सिवा और कुछ नहीं चाहिए।',
        ],
        meaningEn: 'This is a powerful metaphor for the soul\'s journey. The "drop" is the individual soul, and the "Ocean" is God. The soul has been separated for countless lifetimes. Its deepest, innate desire is to end this separation and lose its individual identity by merging back into its Source.',
        meaningHi: 'यह आत्मा के सफ़र का एक सुंदर उदाहरण है। "बूँद" आत्मा है और "सागर" भगवान है। आत्मा कई जन्मों से भगवान से अलग है। उसकी सबसे गहरी इच्छा यही है कि वह इस जुदाई को खत्म करके वापस अपने स्रोत (भगवान) में मिल जाए।'
    },
    {
        id: 'king-and-the-beggar',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The King and the Beggar',
        titleHi: 'शाह और गदा',
        textEn: [
            'You are the King of all worlds, I am a beggar at Your door,',
            'Yet in Your court of love, there is no difference between us.',
        ],
        textHi: [
            'तू सारे जहानों का शाह है, मैं तेरे दर का गदा हूँ,',
            'फिर भी तेरे इश्क़ के दरबार में, हम में कोई फ़र्क नहीं।',
        ],
        meaningEn: 'This verse explores the paradox of divine love. The seeker acknowledges the infinite greatness of God ("King") and their own humility ("beggar"). However, in the realm of pure love, God erases all distinctions and embraces the soul as an equal.',
        meaningHi: 'यह कविता दिव्य प्रेम के एक अनोखे पहलू को दिखाती है। साधक मानता है कि भगवान महान "राजा" हैं और वह खुद एक "भिखारी" है। लेकिन, सच्चे प्यार के दरबार में, भगवान कोई भेदभाव नहीं करते और आत्मा को बराबर समझते हैं।'
    },
    {
        id: 'shadow-of-your-mercy',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Shadow of Your Mercy',
        titleHi: 'तेरी रहमत का साया',
        textEn: [
            'The world\'s harsh sun burns me at every step,',
            'My only refuge is the cool shadow of Your mercy.',
        ],
        textHi: [
            'दुनिया की तेज़ धूप मुझे हर क़दम पर जलाती है,',
            'मेरा एकमात्र आसरा तेरी रहमत का ठंडा साया है।',
        ],
        meaningEn: 'The "harsh sun" represents the trials, tribulations, and sufferings of worldly existence. The seeker finds that the only true protection and peace from this suffering comes from seeking refuge in the divine grace ("mercy") of God and the Master.',
        meaningHi: '"तेज़ धूप" का मतलब है दुनिया के दुख और परेशानियाँ। साधक को इन दुखों से बचने के लिए एकमात्र सच्ची शांति और सुरक्षा भगवान और गुरु की "कृपा" की ठंडी छाँव में ही मिलती है।'
    },
    {
        id: 'thirst-of-the-soul',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Thirst of the Soul',
        titleHi: 'रूह की प्यास',
        textEn: [
            'I have tasted all the waters of the world,',
            'But only the nectar of Your Name can quench my soul\'s thirst.',
        ],
        textHi: [
            'मैंने दुनिया के सारे पानी चख लिए हैं,',
            'पर केवल तेरे नाम का अमृत ही मेरी रूह की प्यास बुझा सकता है।',
        ],
        meaningEn: 'The "waters of the world" are worldly pleasures and attachments, which can never provide lasting satisfaction. The soul has an innate "thirst" for God. This deep spiritual longing can only be quenched by the "nectar" of Naam or Shabad—the divine Word or Sound Current.',
        meaningHi: '"दुनिया का पानी" मतलब दुनिया के सुख, जो कभी सच्ची शांति नहीं दे सकते। आत्मा को भगवान के लिए एक गहरी "प्यास" है। यह प्यास केवल "नाम" या "शब्द" के अमृत से ही बुझ सकती है, जो दिव्य शक्ति है।'
    },
    {
        id: 'doctor-of-hearts',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Doctor of Hearts',
        titleHi: 'दिलों का हकीम',
        textEn: [
            'My heart is sick with the disease of separation,',
            'O Master, You are the only doctor who holds the cure.',
        ],
        textHi: [
            'मेरा दिल हिज्र की बीमारी से बीमार है,',
            'ऐ मुर्शिद, तू ही एकमात्र हकीम है जिसके पास इसका इलाज है।',
        ],
        meaningEn: 'The "disease" is the pain and suffering caused by the soul\'s separation from God. Worldly remedies cannot heal this spiritual ailment. Only the true Master, the "doctor of hearts," possesses the "cure," which is the spiritual practice that reunites the soul with the Beloved.',
        meaningHi: '""बीमारी"" का मतलब है भगवान से जुदाई का दर्द। दुनिया की कोई भी दवा इस रूहानी बीमारी को ठीक नहीं कर सकती। केवल सच्चे गुरु, जो ""दिलों के डॉक्टर"" हैं, के पास इसका ""इलाज"" है, और वह है ध्यान-सुमिरन का अभ्यास।'
    },
    {
        id: 'prison-of-i',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Prison of \'I\'',
        titleHi: '\'मैं\' का ज़िंदान',
        textEn: [
            'I have been trapped for ages in the prison of "I" and "mine,"',
            'Break these chains, O Lord, and set my soul free.',
        ],
        textHi: [
            'मैं युगों से "मैं" और "मेरे" के ज़िंदान में क़ैद हूँ,',
            'ऐ मालिक, इन ज़ंजीरों को तोड़ दे और मेरी रूह को आज़ाद कर दे।',
        ],
        meaningEn: 'The ego, the sense of "I" and "mine," is described as a "prison" that confines the soul. It is the root of all attachment and suffering. The verse is a prayer for divine help to overcome the ego and attain spiritual liberation ("set my soul free").',
        meaningHi: 'अहंकार, यानी "मैं" और "मेरा" की भावना, एक "जेल" की तरह है जिसमें आत्मा फँसी हुई है। यही सभी दुखों की जड़ है। यह कविता अहंकार को खत्म करने और आत्मा की आज़ादी के लिए भगवान से की गई प्रार्थना है।'
    },
    {
        id: 'fragrance-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Fragrance of the Beloved',
        titleHi: 'यार की ख़ुशबू',
        textEn: [
            'Every breeze that blows brings the fragrance of my Beloved,',
            'The whole world has become a garden because of You.',
        ],
        textHi: [
            'जो भी हवा चलती है, मेरे यार की ख़ुशबू लाती है,',
            'तेरे दम से सारी दुनिया एक बाग़ बन गई है।',
        ],
        meaningEn: 'When the seeker\'s heart is filled with love, they begin to perceive the presence of the Divine everywhere. Just as a fragrance permeates a garden, the presence of the Beloved is felt in all of creation, transforming the mundane world into a place of beauty and wonder.',
        meaningHi: 'जब साधक का दिल प्यार से भर जाता है, तो उसे हर जगह भगवान की मौजूदगी महसूस होने लगती है। जैसे फूल की खुशबू पूरे बाग में फैल जाती है, वैसे ही भगवान का एहसास पूरी दुनिया को एक सुंदर बाग बना देता है।'
    },
    {
        id: 'echo-of-the-word',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Echo of the Word',
        titleHi: 'शब्द की गूँज',
        textEn: [
            'The universe is but an echo of the Divine Word,',
            'Listen closely within, and you will hear its music.',
        ],
        textHi: [
            'यह ब्रह्मांड उस दिव्य शब्द की एक गूँज मात्र है,',
            'अंदर ध्यान से सुनो, और तुम इसका संगीत सुनोगे।',
        ],
        meaningEn: 'This refers to the concept of Shabad, Naam, or the Word—the creative power that brought all of creation into being. The entire universe is a manifestation and "echo" of this divine vibration. Through meditation, one can turn the attention inward and listen to this inner "music."',
        meaningHi: 'यह कविता "शब्द" या "नाम" के बारे में है, जो वो दिव्य शक्ति है जिसने पूरी दुनिया को बनाया। सारी दुनिया उसी दिव्य शक्ति की एक "गूँज" है। ध्यान के ज़रिए, हम अपने अंदर उस दिव्य "संगीत" को सुन सकते हैं।'
    },
    {
        id: 'gift-of-pain',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Gift of Pain',
        titleHi: 'दर्द का तोहफ़ा',
        textEn: [
            'The pain of Your love is a gift I treasure,',
            'It is a constant reminder that my heart belongs to You.',
        ],
        textHi: [
            'तेरे इश्क़ का दर्द एक तोहफ़ा है जिसे मैं संजोता हूँ,',
            'यह एक निरंतर याद दिलाता है कि मेरा दिल तेरा है।',
        ],
        meaningEn: 'For a mystic, the pain of longing (viraha) is not a negative state but a precious "gift." It keeps the fire of love burning and prevents the seeker from becoming complacent or distracted by the world. It is a sign of a true and living connection to the Beloved.',
        meaningHi: 'एक साधक के लिए, भगवान से मिलने की तड़प का दर्द एक कीमती "तोहफा" है। यह प्यार की आग को जलाए रखता है और दुनिया में भटकने से बचाता है। यह भगवान के साथ एक सच्चे और गहरे रिश्ते की निशानी है।'
    },
    {
        id: 'promise-of-dawn',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Promise of Dawn',
        titleHi: 'सुबह का वादा',
        textEn: [
            'This long night of separation will surely end,',
            'Every tear I shed holds the promise of a new dawn.',
        ],
        textHi: [
            'यह जुदाई की लंबी रात ज़रूर ख़त्म होगी,',
            'मेरा हर आँसू एक नई सुबह का वादा लिए हुए है।',
        ],
        meaningEn: 'The spiritual journey is often described as a "long night" of waiting and separation. However, the seeker maintains faith that this period will end. The "tears" of longing are not shed in vain; they are seeds of hope that guarantee the eventual "dawn" of divine union.',
        meaningHi: 'रूहानी सफ़र को अक्सर जुदाई की एक "लंबी रात" कहा जाता है। लेकिन साधक को विश्वास है कि यह रात खत्म होगी। उसकी याद में बहाया गया हर "आँसू" एक नई "सुबह" का वादा है, जब उसका भगवान से मिलाप होगा।'
    },
    {
        id: 'alchemy-of-a-glance',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Alchemy of a Glance',
        titleHi: 'एक नज़र का कीमिया',
        textEn: [
            'Your single glance worked its alchemy on me,',
            'Turning the dust of my being into pure gold.',
        ],
        textHi: [
            'तेरी एक नज़र ने मुझ पर अपना कीमिया कर दिया,',
            'मेरे वजूद की ख़ाक को ख़ालिस सोना बना दिया।',
        ],
        meaningEn: '"Alchemy" is the art of transformation. The Master\'s graceful glance is the ultimate catalyst that transforms the seeker. It purifies the heart and elevates the soul, turning the worthless "dust" of our ego-bound existence into the "pure gold" of divine consciousness.',
        meaningHi: '"कीमिया" बदलने की कला है। गुरु की कृपा भरी एक नज़र साधक को पूरी तरह बदल देती है। यह दिल को साफ करती है और आत्मा को ऊँचा उठाती है, जिससे हमारे अहंकार की "धूल" दिव्य चेतना का "शुद्ध सोना" बन जाती है।'
    },
    {
        id: 'path-of-surrender',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Path of Surrender',
        titleHi: 'तस्लीम की राह',
        textEn: [
            'I tried to walk with my own strength and I faltered,',
            'Now I have surrendered all to You, and the path has become smooth.',
        ],
        textHi: [
            'मैंने अपनी ताक़त से चलने की कोशिश की और लड़खड़ा गया,',
            'अब मैंने सब कुछ तुझे सौंप दिया है, और राह आसान हो गई है।',
        ],
        meaningEn: 'This verse teaches the importance of surrender (taslim). Relying on one\'s own efforts and ego ("my own strength") leads to failure. When the seeker completely surrenders to the will of the Master and God, divine grace takes over and makes the difficult spiritual journey easy.',
        meaningHi: 'यह कविता समर्पण का महत्व सिखाती है। अपनी ताकत और अहंकार पर भरोसा करने से हम असफल होते हैं। जब साधक खुद को पूरी तरह से गुरु और भगवान की इच्छा पर छोड़ देता है, तो उनकी कृपा से मुश्किल रूहानी सफ़र भी आसान हो जाता है।'
    },
    {
        id: 'the-inner-garden',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Inner Garden',
        titleHi: 'अंदर का बाग़',
        textEn: [
            'The flowers of this world wither and die,',
            'But the garden within my heart blooms for all eternity.',
        ],
        textHi: [
            'इस दुनिया के फूल मुरझा कर मर जाते हैं,',
            'लेकिन मेरे दिल के अंदर का बाग़ हमेशा के लिए खिलता है।',
        ],
        meaningEn: 'Worldly beauty and pleasures are transient ("wither and die"). In contrast, the spiritual beauty and bliss experienced within ("the inner garden") are eternal and unchanging. The seeker is encouraged to cultivate this inner garden through meditation.',
        meaningHi: 'दुनिया की सुंदरता और सुख अस्थायी हैं, वे खत्म हो जाते हैं। लेकिन जो रूहानी खुशी और सुंदरता हमारे अंदर ("अंदर का बाग़") है, वह हमेशा रहती है। साधक को ध्यान के द्वारा इस अंदरूनी बाग को सींचना चाहिए।'
    },
    {
        id: 'boat-of-his-name',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Boat of His Name',
        titleHi: 'नाम की नाव',
        textEn: [
            'The ocean of life is vast and stormy,',
            'The Name of my Beloved is the only boat that can carry me across.',
        ],
        textHi: [
            'जीवन का सागर विशाल और तूफ़ानी है,',
            'मेरे महबूब का नाम ही एकमात्र नाव है जो मुझे पार ले जा सकती है।',
        ],
        meaningEn: 'Life in the material world is compared to a "stormy ocean" of karma and illusion. The practice of Simran (repetition of God\'s Name) is the "boat" that provides safety and guidance, enabling the soul to safely navigate the challenges of life and reach the shore of liberation.',
        meaningHi: 'यह दुनिया कर्मों और भ्रम का एक "तूफानी सागर" है। सुमिरन (भगवान के नाम का जाप) एक "नाव" की तरह है जो हमें सुरक्षा देती है और इस सागर को पार करके मुक्ति के किनारे तक ले जाती है।'
    },
    {
        id: 'unending-journey',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unending Journey',
        titleHi: 'अंतहीन सफ़र',
        textEn: [
            'My journey towards You is unending,',
            'For every destination reveals a new path to Your heart.',
        ],
        textHi: [
            'तेरी ओर मेरा सफ़र अंतहीन है,',
            'क्योंकि हर मंज़िल तेरे दिल तक एक नई राह दिखाती है।',
        ],
        meaningEn: 'The path of love is infinite. As the seeker progresses, they realize that God\'s love and glory are boundless. Each spiritual milestone ("destination") does not end the journey but opens up new, deeper dimensions of love and experience, leading ever closer to the infinite Beloved.',
        meaningHi: 'प्यार का रास्ता कभी खत्म नहीं होता। जैसे-जैसे साधक आगे बढ़ता है, उसे पता चलता है कि भगवान का प्यार असीम है। हर रूहानी पड़ाव ("मंज़िल") सफ़र को खत्म नहीं करता, बल्कि प्यार के नए और गहरे रास्ते खोलता है।'
    },
    {
        id: 'the-lock-and-key',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Lock and Key',
        titleHi: 'ताला और चाबी',
        textEn: [
            'The door to my heart was locked from the inside,',
            'You came as the Master and gave me the key.',
        ],
        textHi: [
            'मेरे दिल का दरवाज़ा अंदर से बंद था,',
            'तू मुर्शिद बनकर आया और मुझे चाबी दे गया।',
        ],
        meaningEn: 'The "door to the heart" represents the portal to the inner spiritual realms. It is "locked from the inside" by our own mind and ego. The spiritual Master provides the "key"—the technique of meditation and his grace—which allows the seeker to unlock this inner door and begin the journey.',
        meaningHi: '""दिल का दरवाज़ा"" अंदर की रूहानी दुनिया का रास्ता है। यह हमारे अपने मन और अहंकार ने ""अंदर से बंद"" कर रखा है। गुरु हमें वह ""चाबी"" देते हैं - यानी ध्यान की विधि और अपनी कृपा - जिससे हम इस दरवाज़े को खोलकर अपनी यात्रा शुरू कर सकते हैं।'
    },
    {
        id: 'the-final-destination',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Final Destination',
        titleHi: 'आख़िरी मंज़िल',
        textEn: [
            'All roads I traveled led me astray,',
            'Until I realized You are not the path, but the destination.',
        ],
        textHi: [
            'मैंने जिन भी राहों पर सफ़र किया, वे मुझे भटका गईं,',
            'जब तक कि मुझे यह एहसास नहीं हुआ कि तू रास्ता नहीं, बल्कि मंज़िल है।',
        ],
        meaningEn: 'The seeker realizes that different paths, philosophies, and practices can be confusing. The ultimate truth is that the goal is not to perfect a method or a "path," but to reach the "destination," which is the Beloved Himself. He is the beginning, the journey, and the end.',
        meaningHi: 'साधक को एहसास होता है कि अलग-अलग रास्ते भटका सकते हैं। असली सच यह है कि लक्ष्य किसी रास्ते को पूरा करना नहीं, बल्कि "मंज़िल" तक पहुँचना है, और वह मंज़िल खुद भगवान हैं। वही शुरुआत, सफ़र और अंत हैं।'
    }
];
