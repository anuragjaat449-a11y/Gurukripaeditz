

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
}

export const BOOKS: Book[] = [
    {
        id: 'insaan-apne-aap-ko-jaan',
        titleEn: 'Man! Know Thyself',
        titleHi: 'इंसान! अपने आप को जान',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1rHLCvsrOWgdubA_uZJUZYOFqV30JJu9j/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1cytP6SOQwXcBY8phaf7db8hZCi6vO7lL/view?usp=drivesdk',
        video: { id: '1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e', type: 'gdrive' },
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