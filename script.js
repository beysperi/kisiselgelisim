        // Advanced features and configurations
        const APP_CONFIG = {
            version: '2.0.0',
            features: {
                aiSuggestions: true,
                socialFeatures: true,
                advancedAnalytics: true,
                gamification: true,
                customThemes: true
            },
            pointSystem: {
                dailyChallenge: 10,
                habitCompletion: 5,
                streakBonus: 2,
                weeklyBonus: 25,
                monthlyBonus: 100
            }
        };

        // Sample data for challenges
        const defaultChallenges = [
            { date: '2023-01-01', title: 'Sabah Rutini Oluştur', description: 'Güne enerjik başlamak için etkili bir sabah rutini oluştur. Erken kalk, su iç, hafif egzersiz yap ve günü planla.', category: 'productivity', completed: false },
            { date: '2023-01-02', title: 'Dijital Detoks', description: 'Bugün sosyal medya ve gereksiz teknoloji kullanımını sınırla. Telefonunu 2 saat kapalı tut ve doğada vakit geçir.', category: 'mental', completed: false },
            { date: '2023-01-03', title: '10.000 Adım At', description: 'Gün içinde toplam 10.000 adım atmayı hedefle. Yürüyüş yapmak hem fiziksel hem de zihinsel sağlığını iyileştirir.', category: 'physical', completed: false },
            { date: '2023-01-04', title: 'Yeni Bir Kitaba Başla', description: 'Kişisel gelişim veya ilgi alanına yönelik yeni bir kitaba başla ve bugün en az 30 dakika oku.', category: 'mental', completed: false },
            { date: '2023-01-05', title: 'Şükran Günlüğü', description: 'Bugün hayatında şükrettiğin 5 şeyi yaz. Minnettarlık pratiği yapmak ruh halini iyileştirir ve pozitif düşünmeyi teşvik eder.', category: 'mental', completed: false },
            { date: '2023-01-06', title: 'Yeni Bir Beceri Öğren', description: 'İlgini çeken yeni bir beceri için 30 dakika ayır. Bu bir dil, müzik aleti veya kodlama olabilir.', category: 'mental', completed: false },
            { date: '2023-01-07', title: '15 Dakika Meditasyon', description: 'Günün koşuşturmasında zihnini dinlendirmek için 15 dakika meditasyon yap. Bu pratik odaklanmanı artıracak ve stres seviyeni düşürecek.', category: 'mental', completed: false },
            { date: '2023-01-08', title: 'Erken Uyan', description: 'Bugün normalden 1 saat erken uyan ve bu ekstra zamanı kendine ayır. Sabahın erken saatleri verimlilik için idealdir.', category: 'productivity', completed: false },
            { date: '2023-01-09', title: 'Yeni Bir Tarif Dene', description: 'Sağlıklı ve daha önce denemediğin bir yemek tarifi pişir. Yeni lezzetler keşfetmek yaratıcılığını geliştirir.', category: 'physical', completed: false },
            { date: '2023-01-10', title: 'Finansal Plan Yap', description: 'Aylık bütçeni gözden geçir ve tasarruf hedefleri belirle. Finansal farkındalık, stres seviyeni düşürür ve geleceğe güvenle bakmanı sağlar.', category: 'productivity', completed: false },
            { date: '2023-01-11', title: 'Doğada Vakit Geçir', description: 'En az 1 saat doğada yürüyüş yap. Doğa ile bağlantı kurmak zihinsel sağlığı iyileştirir ve stresi azaltır.', category: 'physical', completed: false },
            { date: '2023-01-12', title: 'Yeni Müzik Keşfet', description: 'Normalde dinlemediğin bir müzik türünden 5 yeni şarkı keşfet. Müzikal ufkunu genişletmek beynini stimüle eder.', category: 'mental', completed: false },
            { date: '2023-01-13', title: 'Eski Bir Arkadaşı Ara', description: 'Uzun zamandır görüşmediğin bir arkadaşını ara veya mesaj at. Sosyal bağları güçlendirmek mutluluğu artırır.', category: 'social', completed: false },
            { date: '2023-01-14', title: 'Haftalık Hedefler Belirle', description: 'Önümüzdeki hafta için 3 önemli hedef belirle ve bunları gerçekleştirmek için adımlar planla.', category: 'productivity', completed: false },
            { date: '2023-01-15', title: 'Yeni Bir Egzersiz Dene', description: 'Daha önce denemediğin bir egzersiz rutini uygula. Yeni hareketler kaslarını farklı şekillerde çalıştırır.', category: 'physical', completed: false },
            { date: '2023-01-16', title: 'Ekransız Bir Gün', description: 'Bugün mümkün olduğunca ekranlardan uzak dur. Telefon, bilgisayar ve TV kullanımını minimuma indir.', category: 'mental', completed: false },
            { date: '2023-01-17', title: 'Yeni Bir Podcast Dinle', description: 'İlgi alanına yönelik yeni bir podcast keşfet ve en az bir bölüm dinle. Podcastler bilgi edinmenin harika bir yoludur.', category: 'mental', completed: false },
            { date: '2023-01-18', title: 'Ev Düzenleme', description: 'Evinde bir alanı düzenle ve gereksiz eşyalardan kurtul. Düzenli bir ortam zihinsel netlik sağlar.', category: 'productivity', completed: false },
            { date: '2023-01-19', title: 'Su Tüketimini Artır', description: 'Bugün en az 2 litre su içmeyi hedefle. Yeterli su tüketimi enerji seviyeni ve odaklanmanı artırır.', category: 'physical', completed: false },
            { date: '2023-01-20', title: 'Yeni İnsanlarla Tanış', description: 'Sosyal çevreni genişletmek için yeni insanlarla tanışmaya çalış. Bir etkinliğe katıl veya online bir toplulukla bağlantı kur.', category: 'social', completed: false },
            { date: '2023-01-21', title: 'Hafta Sonu Planı Yap', description: 'Hafta sonu için eğlenceli ve dinlendirici aktiviteler planla. İyi planlanmış bir hafta sonu yeni haftaya daha enerjik başlamanı sağlar.', category: 'productivity', completed: false },
            { date: '2023-01-22', title: 'Yoga Seansı', description: '30 dakikalık bir yoga seansı yap. Yoga esnekliği artırır, stresi azaltır ve zihin-beden bağlantısını güçlendirir.', category: 'physical', completed: false },
            { date: '2023-01-23', title: 'Yeni Bir Hobi Dene', description: 'İlgini çeken yeni bir hobiye başla. Hobiler yaratıcılığı artırır ve hayata anlam katar.', category: 'mental', completed: false },
            { date: '2023-01-24', title: 'Gönüllü Ol', description: 'Bir hayır kurumuna bağış yap veya gönüllü ol. Başkalarına yardım etmek kişisel tatmin ve mutluluk sağlar.', category: 'social', completed: false },
            { date: '2023-01-25', title: 'Zaman Yönetimi Egzersizi', description: 'Bugün zamanını nasıl harcadığını not et ve verimliliğini artırmak için stratejiler belirle.', category: 'productivity', completed: false },
            { date: '2023-01-26', title: 'Sağlıklı Atıştırmalıklar', description: 'Bugün sadece sağlıklı atıştırmalıklar tüket. Meyve, kuruyemiş ve sebzeler gibi besleyici alternatifler seç.', category: 'physical', completed: false },
            { date: '2023-01-27', title: 'Bir TED Konuşması İzle', description: 'İlham verici bir TED konuşması izle ve öğrendiklerini not et. Yeni fikirler zihinsel ufkunu genişletir.', category: 'mental', completed: false },
            { date: '2023-01-28', title: 'Aile ile Kaliteli Zaman', description: 'Ailenle veya sevdiklerinle kaliteli zaman geçir. Telefon ve diğer dikkat dağıtıcılardan uzak, tamamen onlara odaklan.', category: 'social', completed: false },
            { date: '2023-01-29', title: 'Aylık Değerlendirme', description: 'Bu ayın başarılarını ve zorluklarını değerlendir. Gelecek ay için hedefler belirle.', category: 'productivity', completed: false },
            { date: '2023-01-30', title: 'Tam Gün Sağlıklı Beslenme', description: 'Bugün sadece sağlıklı ve dengeli öğünler ye. İşlenmiş gıdalardan ve şekerden kaçın.', category: 'physical', completed: false }
        ];

        // DOM Elements
        const authModal = document.getElementById('auth-modal');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const showRegisterBtn = document.getElementById('show-register');
        const showLoginBtn = document.getElementById('show-login');
        const loginBtn = document.getElementById('login-btn');
        const registerBtn = document.getElementById('register-btn');
        const demoLoginBtn = document.getElementById('demo-login-btn');
        const profileBtn = document.getElementById('profile-btn');
        const profileModal = document.getElementById('profile-modal');
        const closeProfileModalBtn = document.getElementById('close-profile-modal');
        const logoutBtn = document.getElementById('logout-btn');
        const settingsBtn = document.getElementById('settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const closeSettingsModalBtn = document.getElementById('close-settings-modal');
        const usernameDisplay = document.getElementById('username-display');
        const welcomeName = document.getElementById('welcome-name');
        const profileName = document.getElementById('profile-name');
        const profileEmail = document.getElementById('profile-email');
        const completedDaysEl = document.getElementById('completed-days');
        const streakCountEl = document.getElementById('streak-count');
        const totalPointsEl = document.getElementById('total-points');
        const currentDayDisplay = document.getElementById('current-day-display');
        const progressBar = document.getElementById('progress-bar');
        const progressPercentage = document.getElementById('progress-percentage');
        const progressRingCircle = document.getElementById('progress-ring-circle');
        const daysCompletedEl = document.getElementById('days-completed');
        const todayChallengeTitle = document.getElementById('today-challenge-title');
        const todayChallengeDesc = document.getElementById('today-challenge-desc');
        const completeBtn = document.getElementById('complete-btn');
        const showChallengeDetailsBtn = document.getElementById('show-challenge-details');
        const completionModal = document.getElementById('completion-modal');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const shareBtn = document.getElementById('share-btn');
        const challengeCalendar = document.getElementById('challenge-calendar');
        const showAllDaysBtn = document.getElementById('show-all-days');
        const challengeDetailsModal = document.getElementById('challenge-details-modal');
        const closeDetailsModalBtn = document.getElementById('close-details-modal');
        const detailTitle = document.getElementById('detail-title');
        const detailDate = document.getElementById('detail-date');
        const detailCategory = document.getElementById('detail-category');
        const detailDescription = document.getElementById('detail-description');
        const detailNotes = document.getElementById('detail-notes');
        const saveNotesBtn = document.getElementById('save-notes-btn');
        const markCompleteBtn = document.getElementById('mark-complete-btn');
        const addChallengeBtn = document.getElementById('add-challenge-btn');
        const customChallengeTitle = document.getElementById('custom-challenge-title');
        const customChallengeDesc = document.getElementById('custom-challenge-desc');
        const customChallengeDate = document.getElementById('custom-challenge-date');
        const customChallengeCategory = document.getElementById('custom-challenge-category');
        const shareSuccessModal = document.getElementById('share-success-modal');
        const closeShareModalBtn = document.getElementById('close-share-modal');
        const shareWhatsappBtn = document.getElementById('share-whatsapp');
        const shareTwitterBtn = document.getElementById('share-twitter');
        const shareInstagramBtn = document.getElementById('share-instagram');
        const gridViewBtn = document.getElementById('grid-view-btn');
        const calendarViewBtn = document.getElementById('calendar-view-btn');
        const calendarNavigation = document.getElementById('calendar-navigation');
        const calendarGrid = document.getElementById('calendar-grid');
        const calendarDays = document.getElementById('calendar-days');
        const currentMonthYear = document.getElementById('current-month-year');
        const prevMonthBtn = document.getElementById('prev-month');
        const nextMonthBtn = document.getElementById('next-month');

        const achievementBadges = document.getElementById('achievement-badges');
        const waterCount = document.getElementById('water-count');
        const waterBtns = document.querySelectorAll('.water-btn');
        const readingBtn = document.getElementById('reading-btn');
        const exerciseBtn = document.getElementById('exercise-btn');
        const meditationBtn = document.getElementById('meditation-btn');
        const exportDataBtn = document.getElementById('export-data');
        const resetProgressBtn = document.getElementById('reset-progress');

        // App State
        let currentUser = null;
        let challenges = [];
        let currentChallenge = null;
        let showAllChallenges = false;
        let currentView = 'grid'; // 'grid' or 'calendar'
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        let habits = {
            water: 0,
            reading: false,
            exercise: false,
            meditation: false
        };
        let achievements = [];
        let userLevel = 1;
        let weeklyScore = 0;
        let monthlyScore = 0;
        let bestStreak = 0;
        let completionRate = 0;
        let activeDays = 0;
        let customTemplates = [];
        let aiSuggestions = [];

        // AI Suggestion Templates
        const aiSuggestionTemplates = [
            {
                condition: (user) => user.streak < 3,
                suggestions: [
                    "Küçük adımlarla başla! 5 dakikalık nefes egzersizi ile güne başla.",
                    "Sabah rutinini güçlendirmek için 10 dakika günlük yazma alışkanlığı edin.",
                    "Günde 1 sayfa kitap okuma hedefi koy - küçük ama tutarlı adımlar!"
                ]
            },
            {
                condition: (user) => user.streak >= 3 && user.streak < 7,
                suggestions: [
                    "Harika gidiyorsun! Şimdi 15 dakikalık meditasyon eklemeye ne dersin?",
                    "Fiziksel aktiviteyi artırmak için günlük 20 dakika yürüyüş ekle.",
                    "Sosyal bağlarını güçlendirmek için bir arkadaşını ara."
                ]
            },
            {
                condition: (user) => user.streak >= 7,
                suggestions: [
                    "Muhteşem bir serin var! Yeni bir beceri öğrenmeye başlama zamanı.",
                    "Yaratıcılığını geliştirmek için günlük 30 dakika sanatsal aktivite yap.",
                    "Liderlik becerilerini geliştirmek için bir topluluk etkinliğine katıl."
                ]
            }
        ];

        // Challenge Templates
        const challengeTemplates = {
            'morning-routine': {
                title: 'Güçlü Sabah Rutini',
                description: 'Erken kalk, su iç, 10 dakika egzersiz yap ve günü planla. Güne enerjik başlamak için mükemmel bir rutin.',
                category: 'productivity',
                difficulty: 'medium'
            },
            'exercise': {
                title: '30 Dakika Egzersiz',
                description: 'Kardiyovasküler sağlığını iyileştirmek ve enerji seviyeni artırmak için 30 dakika fiziksel aktivite yap.',
                category: 'physical',
                difficulty: 'medium'
            },
            'meditation': {
                title: 'Günlük Meditasyon',
                description: 'Zihinsel netlik ve iç huzur için 15 dakika meditasyon pratiği yap. Stres seviyeni düşür.',
                category: 'mental',
                difficulty: 'easy'
            },
            'reading': {
                title: 'Kitap Okuma Saati',
                description: 'Bilgi birikimini artırmak ve kelime dağarcığını geliştirmek için günde 30 dakika kitap oku.',
                category: 'mental',
                difficulty: 'easy'
            },
            'social': {
                title: 'Sosyal Bağlantı',
                description: 'Bir arkadaşını ara, aile üyenle kaliteli zaman geçir veya yeni insanlarla tanış.',
                category: 'social',
                difficulty: 'easy'
            },
            'creativity': {
                title: 'Yaratıcı İfade',
                description: 'Resim çiz, müzik dinle, yazı yaz veya el sanatları yap. Yaratıcılığını serbest bırak.',
                category: 'mental',
                difficulty: 'medium'
            }
        };
        
        // Achievement definitions
        const achievementDefinitions = [
            { id: 'first_day', name: 'İlk Adım', description: 'İlk challenge\'ını tamamladın!', icon: '🎯', condition: (user) => user.completedDays >= 1 },
            { id: 'week_warrior', name: 'Hafta Savaşçısı', description: '7 gün üst üste challenge tamamladın!', icon: '🔥', condition: (user) => user.streak >= 7 },
            { id: 'hydration_hero', name: 'Su Kahramanı', description: 'Günlük su hedefini tamamladın!', icon: '💧', condition: () => habits.water >= 8 },
            { id: 'reading_master', name: 'Okuma Ustası', description: '5 gün okuma alışkanlığını sürdürdün!', icon: '📚', condition: (user) => user.readingStreak >= 5 },
            { id: 'fitness_fanatic', name: 'Fitness Fanatik', description: '10 gün egzersiz yaptın!', icon: '🏃', condition: (user) => user.exerciseDays >= 10 },
            { id: 'zen_master', name: 'Zen Ustası', description: '15 gün meditasyon yaptın!', icon: '🧘', condition: (user) => user.meditationDays >= 15 },
            { id: 'halfway_hero', name: 'Yarı Yol Kahramanı', description: '15 günü tamamladın!', icon: '⭐', condition: (user) => user.completedDays >= 15 },
            { id: 'champion', name: 'Şampiyon', description: '30 günlük challenge\'ı tamamladın!', icon: '🏆', condition: (user) => user.completedDays >= 30 }
        ];
        
        // Initialize the app
        function initApp() {
            // Set today's date for the custom challenge input
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            customChallengeDate.value = formattedDate;
            
            // Check if user is logged in
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                hideAuthModal();
                updateUserInterface();
                loadHabits();
                loadAchievements();
                loadSettings();
                loadCustomTemplates();
                updateAnalytics();
                generateAISuggestions();
            }
            
            // Load challenges
            loadChallenges();
            
            // Render calendar
            renderChallengeCalendar();
            
            // Update today's challenge
            updateTodayChallenge();
            
            // Initialize view
            updateViewButtons();
            showGridView();
        }
        
        // Event Listeners
        showRegisterBtn.addEventListener('click', () => {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });
        
        showLoginBtn.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
        
        loginBtn.addEventListener('click', () => {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Lütfen e-posta ve şifre girin.');
                return;
            }
            
            // Check if user exists (in a real app, this would be a server request)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                loginUser(user);
            } else {
                alert('E-posta veya şifre hatalı.');
            }
        });
        
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            if (!name || !email || !password) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Check if email already exists
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(u => u.email === email)) {
                alert('Bu e-posta adresi zaten kullanılıyor.');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                name,
                email,
                password,
                completedDays: 0,
                streak: 0,
                points: 0,
                notes: {}
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Login the new user
            loginUser(newUser);
        });
        
        demoLoginBtn.addEventListener('click', () => {
            // Create a demo user
            const demoUser = {
                id: 'demo-' + Date.now().toString(),
                name: 'Demo Kullanıcı',
                email: 'demo@example.com',
                completedDays: 0,
                streak: 0,
                points: 0,
                notes: {}
            };
            
            loginUser(demoUser);
        });
        
        profileBtn.addEventListener('click', () => {
            profileModal.classList.remove('hidden');
        });
        
        closeProfileModalBtn.addEventListener('click', () => {
            profileModal.classList.add('hidden');
        });
        
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            currentUser = null;
            profileModal.classList.add('hidden');
            authModal.classList.remove('hidden');
            resetChallenges();
        });
        
        completeBtn.addEventListener('click', showCompletionModal);
        
        closeModalBtn.addEventListener('click', hideCompletionModal);
        
        shareBtn.addEventListener('click', shareAchievement);
        
        showChallengeDetailsBtn.addEventListener('click', () => {
            const today = new Date();
            const todayFormatted = today.toISOString().split('T')[0];
            const todayChallenge = challenges.find(c => c.date === todayFormatted);
            
            if (todayChallenge) {
                showChallengeDetails(todayChallenge);
            }
        });
        
        closeDetailsModalBtn.addEventListener('click', () => {
            challengeDetailsModal.classList.add('hidden');
        });
        
        saveNotesBtn.addEventListener('click', () => {
            if (currentChallenge && currentUser) {
                try {
                    // Save notes to user data
                    if (!currentUser.notes) {
                        currentUser.notes = {};
                    }
                    currentUser.notes[currentChallenge.date] = detailNotes.value;
                    
                    // Update the challenge in the challenges array
                    const challengeIndex = challenges.findIndex(c => c.date === currentChallenge.date);
                    if (challengeIndex !== -1) {
                        if (!challenges[challengeIndex].notes) {
                            challenges[challengeIndex].notes = {};
                        }
                        challenges[challengeIndex].notes[currentUser.id] = detailNotes.value;
                    }
                    
                    // Update local storage
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    saveChallenges();
                    
                    // Update users array if not a demo user
                    if (!currentUser.id.startsWith('demo-')) {
                        const users = JSON.parse(localStorage.getItem('users') || '[]');
                        const userIndex = users.findIndex(u => u.id === currentUser.id);
                        if (userIndex !== -1) {
                            users[userIndex] = currentUser;
                            localStorage.setItem('users', JSON.stringify(users));
                        }
                    }
                    
                    alert('Notlar başarıyla kaydedildi!');
                } catch (error) {
                    console.error('Not kaydetme hatası:', error);
                    alert('Notlar kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
                }
            } else {
                alert('Not kaydetmek için önce giriş yapmalısınız.');
            }
        });
        
        markCompleteBtn.addEventListener('click', () => {
            if (currentChallenge) {
                completeChallenge(currentChallenge);
                challengeDetailsModal.classList.add('hidden');
                showCompletionModal();
            }
        });
        
        showAllDaysBtn.addEventListener('click', () => {
            showAllChallenges = !showAllChallenges;
            renderChallengeCalendar();
            showAllDaysBtn.innerHTML = showAllChallenges ? 
                'Daha Az Göster <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>' : 
                'Tüm Günleri Göster <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
        });
        
        addChallengeBtn.addEventListener('click', () => {
            const title = customChallengeTitle.value.trim();
            const description = customChallengeDesc.value.trim();
            const date = customChallengeDate.value;
            const category = customChallengeCategory.value;
            
            console.log('Challenge ekleme başlatıldı:', { title, description, date, category });
            
            // Validation
            if (!title) {
                alert('Lütfen challenge başlığını girin.');
                customChallengeTitle.focus();
                return;
            }
            
            if (!description) {
                alert('Lütfen challenge açıklamasını girin.');
                customChallengeDesc.focus();
                return;
            }
            
            if (!date) {
                alert('Lütfen tarih seçin.');
                customChallengeDate.focus();
                return;
            }
            
            if (!currentUser) {
                alert('Challenge eklemek için önce giriş yapmalısınız.');
                return;
            }
            
            try {
                // Initialize challenges array if needed
                if (!Array.isArray(challenges)) {
                    challenges = [];
                    console.log('Challenges array başlatıldı');
                }
                
                // Check if a challenge already exists for this date
                const existingIndex = challenges.findIndex(c => c.date === date);
                
                if (existingIndex !== -1) {
                    // Replace existing challenge
                    const existingChallenge = challenges[existingIndex];
                    challenges[existingIndex] = {
                        date,
                        title,
                        description,
                        category,
                        completed: existingChallenge.completed || false,
                        notes: existingChallenge.notes || {}
                    };
                    console.log('Mevcut challenge güncellendi');
                } else {
                    // Add new challenge
                    const newChallenge = {
                        date,
                        title,
                        description,
                        category,
                        completed: false,
                        notes: {}
                    };
                    challenges.push(newChallenge);
                    console.log('Yeni challenge eklendi');
                }
                
                // Sort challenges by date
                challenges.sort((a, b) => new Date(a.date) - new Date(b.date));
                
                // Force save to localStorage
                const challengeKey = `challenges_${currentUser.id}`;
                const challengeData = JSON.stringify(challenges);
                localStorage.setItem(challengeKey, challengeData);
                console.log('Challenge kaydedildi, toplam:', challenges.length);
                
                // Verify save
                const savedData = localStorage.getItem(challengeKey);
                if (savedData) {
                    console.log('Kayıt doğrulandı');
                } else {
                    console.error('Kayıt başarısız!');
                }
                
                // Update UI immediately
                renderChallengeCalendar();
                updateTodayChallenge();
                
                // Clear form
                customChallengeTitle.value = '';
                customChallengeDesc.value = '';
                
                // Success feedback
                alert('✅ Challenge başarıyla eklendi ve kaydedildi!');
                
                // Visual feedback
                addChallengeBtn.style.backgroundColor = '#10b981';
                addChallengeBtn.textContent = '✅ Eklendi!';
                setTimeout(() => {
                    addChallengeBtn.style.backgroundColor = '';
                    addChallengeBtn.textContent = 'Challenge Ekle';
                }, 2000);
                
            } catch (error) {
                console.error('Challenge ekleme hatası:', error);
                alert('❌ Challenge eklenirken hata oluştu: ' + error.message);
            }
        });
        
        closeShareModalBtn.addEventListener('click', () => {
            shareSuccessModal.classList.add('hidden');
        });
        
        // Settings modal
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
        });
        
        closeSettingsModalBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
        
        // Social media sharing
        shareWhatsappBtn.addEventListener('click', () => {
            const message = encodeURIComponent(`🎉 Bugün kişisel gelişim challenge'ımı tamamladım! 30 günlük yolculuğumda ${currentUser?.completedDays || 0} gün tamamladım. Sen de katıl! #KisiselGelisim #Challenge`);
            window.open(`https://wa.me/?text=${message}`, '_blank');
            shareSuccessModal.classList.add('hidden');
        });
        
        shareTwitterBtn.addEventListener('click', () => {
            const message = encodeURIComponent(`🎉 Bugün kişisel gelişim challenge'ımı tamamladım! 30 günlük yolculuğumda ${currentUser?.completedDays || 0} gün tamamladım. #KisiselGelisim #Challenge`);
            window.open(`https://twitter.com/intent/tweet?text=${message}`, '_blank');
            shareSuccessModal.classList.add('hidden');
        });
        
        shareInstagramBtn.addEventListener('click', () => {
            // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
            const message = `🎉 Bugün kişisel gelişim challenge'ımı tamamladım! 30 günlük yolculuğumda ${currentUser?.completedDays || 0} gün tamamladım. #KisiselGelisim #Challenge`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(message).then(() => {
                    alert('Mesaj panoya kopyalandı! Instagram\'da paylaşabilirsin.');
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = message;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Mesaj panoya kopyalandı! Instagram\'da paylaşabilirsin.');
                });
            } else {
                // Fallback for browsers without clipboard API
                const textArea = document.createElement('textarea');
                textArea.value = message;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Mesaj panoya kopyalandı! Instagram\'da paylaşabilirsin.');
            }
            shareSuccessModal.classList.add('hidden');
        });
        
        // View toggle
        gridViewBtn.addEventListener('click', () => {
            currentView = 'grid';
            updateViewButtons();
            showGridView();
        });
        
        calendarViewBtn.addEventListener('click', () => {
            currentView = 'calendar';
            updateViewButtons();
            showCalendarView();
        });
        
        // Calendar navigation
        prevMonthBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateCalendarView();
        });
        
        nextMonthBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendarView();
        });
        

        
        // Habit tracking
        waterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                if (habits.water > index) {
                    // Remove water glasses from this index onwards
                    habits.water = index;
                } else {
                    // Add water glass
                    habits.water = index + 1;
                }
                updateWaterTracker();
                saveHabits();
                checkAchievements();
            });
        });
        
        readingBtn.addEventListener('click', () => {
            habits.reading = !habits.reading;
            updateHabitButton(readingBtn, habits.reading, 'bg-green-500');
            saveHabits();
            if (habits.reading && currentUser) {
                currentUser.readingStreak = (currentUser.readingStreak || 0) + 1;
                updateUserData();
            }
            checkAchievements();
        });
        
        exerciseBtn.addEventListener('click', () => {
            habits.exercise = !habits.exercise;
            updateHabitButton(exerciseBtn, habits.exercise, 'bg-orange-500');
            saveHabits();
            if (habits.exercise && currentUser) {
                currentUser.exerciseDays = (currentUser.exerciseDays || 0) + 1;
                updateUserData();
            }
            checkAchievements();
        });
        
        meditationBtn.addEventListener('click', () => {
            habits.meditation = !habits.meditation;
            updateHabitButton(meditationBtn, habits.meditation, 'bg-purple-500');
            saveHabits();
            if (habits.meditation && currentUser) {
                currentUser.meditationDays = (currentUser.meditationDays || 0) + 1;
                updateUserData();
            }
            checkAchievements();
        });
        
        // Settings functionality
        exportDataBtn.addEventListener('click', () => {
            exportUserData();
            settingsModal.classList.add('hidden');
        });
        
        resetProgressBtn.addEventListener('click', () => {
            if (confirm('Tüm ilerlemenizi sıfırlamak istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
                resetUserProgress();
            }
        });
        
        // Settings checkboxes and selects
        document.getElementById('daily-reminder').addEventListener('change', (e) => {
            saveSettings('dailyReminder', e.target.checked);
        });
        
        document.getElementById('streak-reminder').addEventListener('change', (e) => {
            saveSettings('streakReminder', e.target.checked);
        });
        
        document.getElementById('theme-select').addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            console.log('Tema değiştirildi:', selectedTheme);
            
            // Apply theme immediately
            applyTheme(selectedTheme);
            
            // Show feedback
            const themeSelect = e.target;
            const originalBg = themeSelect.style.backgroundColor;
            themeSelect.style.backgroundColor = '#10b981';
            themeSelect.style.color = '#ffffff';
            
            setTimeout(() => {
                themeSelect.style.backgroundColor = originalBg;
                themeSelect.style.color = '';
            }, 1000);
        });
        
        document.getElementById('language-select').addEventListener('change', (e) => {
            saveSettings('language', e.target.value);
        });

        // Analytics toggle
        document.getElementById('analytics-toggle').addEventListener('click', () => {
            const detailedAnalytics = document.getElementById('detailed-analytics');
            const toggleBtn = document.getElementById('analytics-toggle');
            
            if (detailedAnalytics.classList.contains('hidden')) {
                detailedAnalytics.classList.remove('hidden');
                toggleBtn.textContent = 'Detayları Gizle';
            } else {
                detailedAnalytics.classList.add('hidden');
                toggleBtn.textContent = 'Detayları Göster';
            }
        });

        // AI Suggestions
        document.getElementById('refresh-suggestions').addEventListener('click', generateAISuggestions);

        // Template functionality
        document.getElementById('template-challenge-btn').addEventListener('click', () => {
            const templates = document.getElementById('challenge-templates');
            templates.classList.toggle('hidden');
        });

        // Template cards
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', () => {
                const templateId = card.dataset.template;
                const template = challengeTemplates[templateId];
                
                if (template) {
                    document.getElementById('custom-challenge-title').value = template.title;
                    document.getElementById('custom-challenge-desc').value = template.description;
                    document.getElementById('custom-challenge-category').value = template.category;
                    document.getElementById('challenge-difficulty').value = template.difficulty;
                    
                    // Hide templates
                    document.getElementById('challenge-templates').classList.add('hidden');
                }
            });
        });

        // AI suggestion buttons
        document.getElementById('ai-title-suggest').addEventListener('click', () => {
            const category = document.getElementById('custom-challenge-category').value;
            const difficulty = document.getElementById('challenge-difficulty').value;
            const suggestion = generateAITitle(category, difficulty);
            document.getElementById('custom-challenge-title').value = suggestion;
        });

        document.getElementById('ai-desc-suggest').addEventListener('click', () => {
            const title = document.getElementById('custom-challenge-title').value;
            const category = document.getElementById('custom-challenge-category').value;
            const suggestion = generateAIDescription(title, category);
            document.getElementById('custom-challenge-desc').value = suggestion;
        });

        // Save template
        document.getElementById('save-template-btn').addEventListener('click', () => {
            const title = document.getElementById('custom-challenge-title').value;
            const description = document.getElementById('custom-challenge-desc').value;
            const category = document.getElementById('custom-challenge-category').value;
            const difficulty = document.getElementById('challenge-difficulty').value;
            
            if (title && description) {
                const template = {
                    id: Date.now().toString(),
                    title,
                    description,
                    category,
                    difficulty,
                    createdAt: new Date().toISOString()
                };
                
                customTemplates.push(template);
                saveCustomTemplates();
                alert('Şablon başarıyla kaydedildi!');
            } else {
                alert('Lütfen başlık ve açıklama alanlarını doldurun.');
            }
        });

        // Restore default challenges
        document.getElementById('restore-challenges-btn').addEventListener('click', () => {
            if (confirm('Bu işlem mevcut challenge\'larınızı varsayılan challenge\'larla değiştirecek. Devam etmek istiyor musunuz?')) {
                restoreDefaultChallenges();
            }
        });
        
        // Functions
        function loginUser(user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            hideAuthModal();
            updateUserInterface();
            loadSettings();
        }
        
        function hideAuthModal() {
            authModal.classList.add('hidden');
        }
        
        function updateUserInterface() {
            if (currentUser) {
                usernameDisplay.textContent = currentUser.name;
                welcomeName.textContent = currentUser.name;
                profileName.textContent = currentUser.name;
                profileEmail.textContent = currentUser.email;
                
                // Calculate actual completed challenges
                const actualCompletedDays = challenges.filter(c => c.completed).length;
                currentUser.completedDays = actualCompletedDays;
                
                completedDaysEl.textContent = actualCompletedDays;
                streakCountEl.textContent = currentUser.streak || 0;
                totalPointsEl.textContent = currentUser.points || 0;
            }
        }
        
        function loadChallenges() {
            console.log('Challenge\'lar yükleniyor...');
            
            // Initialize challenges array
            challenges = [];
            
            // Try to load user-specific challenges
            if (currentUser && currentUser.id) {
                try {
                    const challengeKey = `challenges_${currentUser.id}`;
                    const userChallenges = localStorage.getItem(challengeKey);
                    console.log('LocalStorage\'dan challenge verisi:', userChallenges ? 'Bulundu' : 'Bulunamadı');
                    
                    if (userChallenges) {
                        const parsedChallenges = JSON.parse(userChallenges);
                        if (Array.isArray(parsedChallenges)) {
                            challenges = parsedChallenges;
                            console.log('Challenge\'lar yüklendi, toplam:', challenges.length);
                        }
                    }
                } catch (error) {
                    console.error('Challenge yüklenirken hata:', error);
                    challenges = [];
                }
            }
            
            // If we don't have enough challenges, create from defaults
            if (challenges.length === 0) {
                console.log('Varsayılan challenge\'lar oluşturuluyor...');
                const today = new Date();
                challenges = defaultChallenges.map((challenge, index) => {
                    const challengeDate = new Date(today);
                    challengeDate.setDate(today.getDate() + index);
                    return {
                        ...challenge,
                        date: challengeDate.toISOString().split('T')[0],
                        completed: false
                    };
                });
                
                // Save the newly created challenges
                saveChallenges();
                console.log('Varsayılan challenge\'lar kaydedildi');
            } else {
                // Ensure we have at least 30 challenges by filling gaps with defaults
                const today = new Date();
                const existingDates = challenges.map(c => c.date);
                let addedCount = 0;
                
                // Add missing challenges for the next 30 days if they don't exist
                for (let i = 0; i < 30; i++) {
                    const challengeDate = new Date(today);
                    challengeDate.setDate(today.getDate() + i);
                    const dateString = challengeDate.toISOString().split('T')[0];
                    
                    if (!existingDates.includes(dateString)) {
                        const defaultChallenge = defaultChallenges[i % defaultChallenges.length];
                        challenges.push({
                            ...defaultChallenge,
                            date: dateString,
                            completed: false
                        });
                        addedCount++;
                    }
                }
                
                if (addedCount > 0) {
                    console.log(`${addedCount} eksik challenge eklendi`);
                    // Sort challenges by date
                    challenges.sort((a, b) => new Date(a.date) - new Date(b.date));
                    saveChallenges();
                }
            }
            
            console.log('Challenge yükleme tamamlandı, toplam:', challenges.length);
        }
        
        function saveChallenges() {
            if (!currentUser || !currentUser.id) {
                console.error('Kullanıcı bilgisi bulunamadı');
                return false;
            }
            
            if (!Array.isArray(challenges)) {
                console.error('Challenges array geçersiz');
                return false;
            }
            
            try {
                const challengesData = JSON.stringify(challenges);
                localStorage.setItem(`challenges_${currentUser.id}`, challengesData);
                console.log(`${challenges.length} challenge kaydedildi`);
                return true;
            } catch (error) {
                console.error('Challenge kaydetme hatası:', error);
                
                // Try to clear some space and retry
                try {
                    // Clear old data if storage is full
                    const keys = Object.keys(localStorage);
                    keys.forEach(key => {
                        if (key.startsWith('challenges_') && key !== `challenges_${currentUser.id}`) {
                            localStorage.removeItem(key);
                        }
                    });
                    
                    // Retry saving
                    localStorage.setItem(`challenges_${currentUser.id}`, JSON.stringify(challenges));
                    console.log('Challenge\'lar ikinci denemede kaydedildi');
                    return true;
                } catch (retryError) {
                    console.error('İkinci deneme de başarısız:', retryError);
                    alert('Challenge\'lar kaydedilirken bir hata oluştu. Tarayıcı depolama alanı dolu olabilir.');
                    return false;
                }
            }
        }
        
        function resetChallenges() {
            challenges = [];
        }
        
        function updateTodayChallenge() {
            const today = new Date();
            const todayFormatted = today.toISOString().split('T')[0];
            const todayChallenge = challenges.find(c => c.date === todayFormatted);
            
            if (todayChallenge) {
                todayChallengeTitle.textContent = todayChallenge.title;
                todayChallengeDesc.textContent = todayChallenge.description;
                
                // Calculate current day based on challenge start date
                const startDate = new Date(challenges[0].date);
                const diffTime = today.getTime() - startDate.getTime();
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
                const currentDay = Math.max(1, Math.min(diffDays, 30));
                
                currentDayDisplay.textContent = `${currentDay}. gündesin`;
                
                // Update progress based on completed challenges
                const completedChallenges = challenges.filter(c => c.completed).length;
                const totalDays = 30;
                const progress = Math.min((completedChallenges / totalDays) * 100, 100);
                progressBar.style.width = `${progress}%`;
                progressPercentage.textContent = `%${Math.round(progress)}`;
                
                // Update progress ring
                const circumference = 2 * Math.PI * 50;
                const offset = circumference - (progress / 100 * circumference);
                progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
                progressRingCircle.style.strokeDashoffset = offset;
                
                // Update days completed with actual completed challenges
                daysCompletedEl.textContent = completedChallenges;
            }
        }
        
        function renderChallengeCalendar() {
            challengeCalendar.innerHTML = '';
            
            const displayChallenges = showAllChallenges ? challenges : challenges.slice(0, 18);
            
            displayChallenges.forEach(challenge => {
                const card = document.createElement('div');
                card.className = `challenge-card bg-white rounded-xl shadow p-4 cursor-pointer ${challenge.completed ? 'border-l-4 border-green-500' : ''}`;
                
                // Check if it's today's challenge
                const today = new Date();
                const todayFormatted = today.toISOString().split('T')[0];
                
                if (challenge.date === todayFormatted) {
                    card.className = 'challenge-card bg-indigo-50 rounded-xl shadow p-4 border-l-4 border-indigo-500 cursor-pointer ring-2 ring-indigo-500 ring-offset-2';
                }
                
                // Format the date
                const challengeDate = new Date(challenge.date);
                const formattedDate = `${challengeDate.getDate()} ${getMonthName(challengeDate.getMonth())}`;
                
                // Category color
                const categoryColors = {
                    mental: 'bg-purple-100 text-purple-800',
                    physical: 'bg-green-100 text-green-800',
                    productivity: 'bg-blue-100 text-blue-800',
                    social: 'bg-pink-100 text-pink-800'
                };
                
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xl font-bold text-gray-800">${formattedDate}</span>
                        ${challenge.completed ? `
                            <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                        ` : challenge.date === todayFormatted ? `
                            <span class="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">Bugün</span>
                        ` : ''}
                    </div>
                    <p class="text-sm ${challenge.date === todayFormatted ? 'text-indigo-700' : 'text-gray-600'} mb-2">${challenge.title}</p>
                    <span class="text-xs px-2 py-1 rounded-full ${categoryColors[challenge.category] || 'bg-gray-100 text-gray-800'}">${getCategoryName(challenge.category)}</span>
                `;
                
                card.addEventListener('click', () => showChallengeDetails(challenge));
                
                challengeCalendar.appendChild(card);
            });
        }
        
        function updateViewButtons() {
            if (currentView === 'grid') {
                gridViewBtn.classList.remove('bg-gray-200', 'text-gray-700');
                gridViewBtn.classList.add('bg-indigo-600', 'text-white');
                calendarViewBtn.classList.remove('bg-indigo-600', 'text-white');
                calendarViewBtn.classList.add('bg-gray-200', 'text-gray-700');
            } else {
                calendarViewBtn.classList.remove('bg-gray-200', 'text-gray-700');
                calendarViewBtn.classList.add('bg-indigo-600', 'text-white');
                gridViewBtn.classList.remove('bg-indigo-600', 'text-white');
                gridViewBtn.classList.add('bg-gray-200', 'text-gray-700');
            }
        }
        
        function showGridView() {
            challengeCalendar.classList.remove('hidden');
            calendarNavigation.classList.add('hidden');
            calendarGrid.classList.add('hidden');
        }
        
        function showCalendarView() {
            challengeCalendar.classList.add('hidden');
            calendarNavigation.classList.remove('hidden');
            calendarGrid.classList.remove('hidden');
            updateCalendarView();
        }
        
        function updateCalendarView() {
            currentMonthYear.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
            renderCalendarGrid();
        }
        
        function renderCalendarGrid() {
            calendarDays.innerHTML = '';
            
            const firstDay = new Date(currentYear, currentMonth, 1);
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            const startDate = new Date(firstDay);
            startDate.setDate(startDate.getDate() - (firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1));
            
            for (let i = 0; i < 42; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                
                const dayElement = document.createElement('div');
                dayElement.className = 'min-h-[80px] p-2 border border-gray-200 cursor-pointer hover:bg-gray-50 transition duration-300';
                
                const isCurrentMonth = date.getMonth() === currentMonth;
                const isToday = date.toDateString() === new Date().toDateString();
                const dateString = date.toISOString().split('T')[0];
                const challenge = challenges.find(c => c.date === dateString);
                
                if (!isCurrentMonth) {
                    dayElement.classList.add('text-gray-400', 'bg-gray-50');
                }
                
                if (isToday) {
                    dayElement.classList.add('bg-indigo-50', 'border-indigo-300');
                }
                
                dayElement.innerHTML = `
                    <div class="text-sm font-medium ${isToday ? 'text-indigo-600' : isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}">${date.getDate()}</div>
                    ${challenge ? `
                        <div class="mt-1">
                            <div class="text-xs p-1 rounded ${challenge.completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} truncate">
                                ${challenge.title}
                            </div>
                        </div>
                    ` : ''}
                `;
                
                if (challenge) {
                    dayElement.addEventListener('click', () => showChallengeDetails(challenge));
                }
                
                calendarDays.appendChild(dayElement);
            }
        }
        

        
        function getCategoryName(category) {
            const categoryNames = {
                mental: 'Zihinsel',
                physical: 'Fiziksel',
                productivity: 'Üretkenlik',
                social: 'Sosyal'
            };
            return categoryNames[category] || 'Genel';
        }
        
        function getMonthName(month) {
            const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
            return months[month];
        }
        
        function showChallengeDetails(challenge) {
            currentChallenge = challenge;
            
            // Format the date
            const challengeDate = new Date(challenge.date);
            const formattedDate = `${challengeDate.getDate()} ${getMonthName(challengeDate.getMonth())} ${challengeDate.getFullYear()}`;
            
            detailTitle.textContent = challenge.title;
            detailDate.textContent = `Tarih: ${formattedDate}`;
            
            // Set category text
            let categoryText = 'Kategori: ';
            switch (challenge.category) {
                case 'mental':
                    categoryText += 'Zihinsel Gelişim';
                    break;
                case 'physical':
                    categoryText += 'Fiziksel Sağlık';
                    break;
                case 'productivity':
                    categoryText += 'Üretkenlik';
                    break;
                case 'social':
                    categoryText += 'Sosyal Beceriler';
                    break;
                default:
                    categoryText += 'Genel';
            }
            
            detailCategory.textContent = categoryText;
            detailDescription.textContent = challenge.description;
            
            // Load notes if available
            let noteValue = '';
            if (currentUser && currentUser.notes && currentUser.notes[challenge.date]) {
                noteValue = currentUser.notes[challenge.date];
            } else if (challenge.notes && challenge.notes[currentUser?.id]) {
                noteValue = challenge.notes[currentUser.id];
            }
            detailNotes.value = noteValue;
            
            // Update complete button state
            if (challenge.completed) {
                markCompleteBtn.textContent = 'Tamamlandı';
                markCompleteBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                markCompleteBtn.classList.add('bg-gray-400', 'hover:bg-gray-500');
                markCompleteBtn.disabled = true;
            } else {
                markCompleteBtn.textContent = 'Tamamlandı İşaretle';
                markCompleteBtn.classList.remove('bg-gray-400', 'hover:bg-gray-500');
                markCompleteBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                markCompleteBtn.disabled = false;
            }
            
            challengeDetailsModal.classList.remove('hidden');
        }
        
        function showCompletionModal() {
            completionModal.classList.remove('hidden');
            createConfetti();
        }
        
        function hideCompletionModal() {
            completionModal.classList.add('hidden');
        }
        
        function shareAchievement() {
            // In a real app, this would integrate with social media APIs
            completionModal.classList.add('hidden');
            shareSuccessModal.classList.remove('hidden');
        }
        
        function completeChallenge(challenge) {
            // Find the challenge in the array
            const index = challenges.findIndex(c => c.date === challenge.date);
            
            if (index !== -1) {
                challenges[index].completed = true;
                
                // Update user stats
                if (currentUser) {
                    currentUser.completedDays = (currentUser.completedDays || 0) + 1;
                    currentUser.points = (currentUser.points || 0) + 10;
                    
                    // Calculate streak
                    const today = new Date();
                    const yesterday = new Date(today);
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayFormatted = yesterday.toISOString().split('T')[0];
                    
                    const yesterdayChallenge = challenges.find(c => c.date === yesterdayFormatted);
                    
                    if (yesterdayChallenge && yesterdayChallenge.completed) {
                        currentUser.streak = (currentUser.streak || 0) + 1;
                    } else {
                        currentUser.streak = 1;
                    }
                    
                    // Update local storage
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    
                    // Update users array if not a demo user
                    if (!currentUser.id.startsWith('demo-')) {
                        const users = JSON.parse(localStorage.getItem('users') || '[]');
                        const userIndex = users.findIndex(u => u.id === currentUser.id);
                        if (userIndex !== -1) {
                            users[userIndex] = currentUser;
                            localStorage.setItem('users', JSON.stringify(users));
                        }
                    }
                    
                    // Update UI
                    updateUserInterface();
                }
                
                // Save challenges
                saveChallenges();
                
                // Update UI
                renderChallengeCalendar();
            }
        }
        
        function createConfetti() {
            const confettiContainer = document.body;
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confettiContainer.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
        
        function updateWaterTracker() {
            waterCount.textContent = `${habits.water}/8`;
            waterBtns.forEach((btn, index) => {
                if (index < habits.water) {
                    btn.classList.remove('bg-gray-200');
                    btn.classList.add('bg-blue-500');
                } else {
                    btn.classList.remove('bg-blue-500');
                    btn.classList.add('bg-gray-200');
                }
            });
        }
        
        function updateHabitButton(button, completed, activeColor) {
            if (completed) {
                button.classList.remove('bg-gray-200');
                button.classList.add(activeColor);
                button.innerHTML = '✓';
            } else {
                button.classList.remove(activeColor);
                button.classList.add('bg-gray-200');
                button.innerHTML = '';
            }
        }
        
        function saveHabits() {
            if (currentUser) {
                const today = new Date().toISOString().split('T')[0];
                const userHabits = JSON.parse(localStorage.getItem(`habits_${currentUser.id}`) || '{}');
                userHabits[today] = { ...habits };
                localStorage.setItem(`habits_${currentUser.id}`, JSON.stringify(userHabits));
            }
        }
        
        function loadHabits() {
            if (currentUser) {
                const today = new Date().toISOString().split('T')[0];
                const userHabits = JSON.parse(localStorage.getItem(`habits_${currentUser.id}`) || '{}');
                if (userHabits[today]) {
                    habits = { ...userHabits[today] };
                } else {
                    habits = { water: 0, reading: false, exercise: false, meditation: false };
                }
                updateHabitUI();
            }
        }
        
        function updateHabitUI() {
            updateWaterTracker();
            updateHabitButton(readingBtn, habits.reading, 'bg-green-500');
            updateHabitButton(exerciseBtn, habits.exercise, 'bg-orange-500');
            updateHabitButton(meditationBtn, habits.meditation, 'bg-purple-500');
        }
        
        function checkAchievements() {
            if (!currentUser) return;
            
            const newAchievements = [];
            achievementDefinitions.forEach(achievement => {
                if (!achievements.includes(achievement.id) && achievement.condition(currentUser)) {
                    achievements.push(achievement.id);
                    newAchievements.push(achievement);
                }
            });
            
            if (newAchievements.length > 0) {
                showAchievementNotification(newAchievements);
                updateAchievementBadges();
                saveAchievements();
            }
        }
        
        function showAchievementNotification(newAchievements) {
            newAchievements.forEach(achievement => {
                // Create achievement notification
                const notification = document.createElement('div');
                notification.className = 'fixed top-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
                notification.innerHTML = `
                    <div class="flex items-center">
                        <span class="text-2xl mr-3">${achievement.icon}</span>
                        <div>
                            <h4 class="font-bold text-yellow-800">${achievement.name}</h4>
                            <p class="text-yellow-700 text-sm">${achievement.description}</p>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.classList.remove('translate-x-full');
                }, 100);
                
                // Remove after 5 seconds
                setTimeout(() => {
                    notification.classList.add('translate-x-full');
                    setTimeout(() => notification.remove(), 300);
                }, 5000);
            });
        }
        
        function updateAchievementBadges() {
            achievementBadges.innerHTML = '';
            achievements.forEach(achievementId => {
                const achievement = achievementDefinitions.find(a => a.id === achievementId);
                if (achievement) {
                    const badge = document.createElement('span');
                    badge.className = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800';
                    badge.innerHTML = `${achievement.icon} ${achievement.name}`;
                    badge.title = achievement.description;
                    achievementBadges.appendChild(badge);
                }
            });
            
            if (achievements.length === 0) {
                achievementBadges.innerHTML = '<span class="text-gray-500 text-sm">Henüz başarı kazanılmadı</span>';
            }
        }
        
        function saveAchievements() {
            if (currentUser) {
                localStorage.setItem(`achievements_${currentUser.id}`, JSON.stringify(achievements));
            }
        }
        
        function loadAchievements() {
            if (currentUser) {
                achievements = JSON.parse(localStorage.getItem(`achievements_${currentUser.id}`) || '[]');
                updateAchievementBadges();
            }
        }
        
        function updateUserData() {
            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                if (!currentUser.id.startsWith('demo-')) {
                    const users = JSON.parse(localStorage.getItem('users') || '[]');
                    const userIndex = users.findIndex(u => u.id === currentUser.id);
                    if (userIndex !== -1) {
                        users[userIndex] = currentUser;
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                }
            }
        }
        
        function exportUserData() {
            if (!currentUser) return;
            
            const userData = {
                user: currentUser,
                challenges: challenges,
                habits: JSON.parse(localStorage.getItem(`habits_${currentUser.id}`) || '{}'),
                achievements: achievements,
                exportDate: new Date().toISOString()
            };
            
            const dataStr = JSON.stringify(userData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `kisisel-gelisim-verileri-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            URL.revokeObjectURL(url);
            alert('Verileriniz başarıyla dışa aktarıldı!');
        }
        
        function resetUserProgress() {
            if (!currentUser) return;
            
            // Reset user stats
            currentUser.completedDays = 0;
            currentUser.streak = 0;
            currentUser.points = 0;
            currentUser.readingStreak = 0;
            currentUser.exerciseDays = 0;
            currentUser.meditationDays = 0;
            currentUser.notes = {};
            
            // Reset challenges
            challenges.forEach(challenge => {
                challenge.completed = false;
            });
            
            // Reset habits
            habits = { water: 0, reading: false, exercise: false, meditation: false };
            
            // Reset achievements
            achievements = [];
            
            // Clear localStorage
            localStorage.removeItem(`habits_${currentUser.id}`);
            localStorage.removeItem(`achievements_${currentUser.id}`);
            
            // Update UI
            updateUserInterface();
            updateUserData();
            saveChallenges();
            updateHabitUI();
            updateAchievementBadges();
            renderChallengeCalendar();
            updateTodayChallenge();
            
            settingsModal.classList.add('hidden');
            alert('İlerlemeniz başarıyla sıfırlandı!');
        }
        
        function saveSettings(key, value) {
            if (currentUser) {
                const settings = JSON.parse(localStorage.getItem(`settings_${currentUser.id}`) || '{}');
                settings[key] = value;
                localStorage.setItem(`settings_${currentUser.id}`, JSON.stringify(settings));
            }
        }
        
        function loadSettings() {
            if (currentUser) {
                const settings = JSON.parse(localStorage.getItem(`settings_${currentUser.id}`) || '{}');
                
                // Apply saved settings
                if (settings.dailyReminder !== undefined) {
                    document.getElementById('daily-reminder').checked = settings.dailyReminder;
                }
                if (settings.streakReminder !== undefined) {
                    document.getElementById('streak-reminder').checked = settings.streakReminder;
                }
                if (settings.theme) {
                    document.getElementById('theme-select').value = settings.theme;
                    applyTheme(settings.theme);
                }
                if (settings.language) {
                    document.getElementById('language-select').value = settings.language;
                }
            }
        }
        
        function applyTheme(theme) {
            console.log('Tema uygulanıyor:', theme);
            
            // Remove existing theme classes
            document.body.classList.remove('dark-theme', 'light-theme');
            
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                document.body.style.backgroundColor = '#1a1a1a';
                document.body.style.color = '#ffffff';
                
                // Update main containers
                const containers = document.querySelectorAll('.bg-white');
                containers.forEach(container => {
                    container.style.backgroundColor = '#2d2d2d';
                    container.style.color = '#ffffff';
                });
                
                // Update text colors
                const textElements = document.querySelectorAll('.text-gray-800, .text-gray-700, .text-gray-600');
                textElements.forEach(element => {
                    element.style.color = '#e5e5e5';
                });
                
            } else if (theme === 'light') {
                document.body.classList.add('light-theme');
                document.body.style.backgroundColor = '#f8f9ff';
                document.body.style.color = '#1a1a1a';
                
                // Reset containers
                const containers = document.querySelectorAll('.bg-white');
                containers.forEach(container => {
                    container.style.backgroundColor = '#ffffff';
                    container.style.color = '#1a1a1a';
                });
                
                // Reset text colors
                const textElements = document.querySelectorAll('.text-gray-800, .text-gray-700, .text-gray-600');
                textElements.forEach(element => {
                    element.style.color = '';
                });
                
            } else if (theme === 'auto') {
                // Auto theme based on system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                applyTheme(prefersDark ? 'dark' : 'light');
                return;
            }
            
            // Save theme preference
            if (currentUser) {
                saveSettings('theme', theme);
            }
            
            console.log('Tema başarıyla uygulandı:', theme);
        }

        // Advanced Analytics Functions
        function updateAnalytics() {
            if (!currentUser) return;

            // Calculate analytics
            const completedChallenges = challenges.filter(c => c.completed);
            const totalChallenges = challenges.length;
            
            // Update basic stats
            completionRate = totalChallenges > 0 ? Math.round((completedChallenges.length / totalChallenges) * 100) : 0;
            bestStreak = Math.max(currentUser.streak || 0, bestStreak);
            activeDays = completedChallenges.length;
            
            // Calculate level based on points
            userLevel = Math.floor((currentUser.points || 0) / 100) + 1;
            
            // Calculate weekly and monthly scores
            const now = new Date();
            const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
            
            weeklyScore = completedChallenges.filter(c => new Date(c.date) >= weekStart).length * APP_CONFIG.pointSystem.dailyChallenge;
            monthlyScore = completedChallenges.filter(c => new Date(c.date) >= monthStart).length * APP_CONFIG.pointSystem.dailyChallenge;
            
            // Update UI
            document.getElementById('total-points-display').textContent = currentUser.points || 0;
            document.getElementById('best-streak').textContent = bestStreak;
            document.getElementById('completion-rate').textContent = completionRate + '%';
            document.getElementById('active-days').textContent = activeDays;
            document.getElementById('weekly-score').textContent = weeklyScore;
            document.getElementById('monthly-score').textContent = monthlyScore;
            document.getElementById('level-display').textContent = userLevel;
            
            // Update category performance
            updateCategoryPerformance();
            updateWeeklyActivity();
        }

        function updateCategoryPerformance() {
            const categories = ['mental', 'physical', 'productivity', 'social'];
            
            categories.forEach(category => {
                const categoryTotalChallenges = challenges.filter(c => c.category === category).length;
                const categoryCompletedChallenges = challenges.filter(c => c.category === category && c.completed).length;
                const percentage = categoryTotalChallenges > 0 ? Math.round((categoryCompletedChallenges / categoryTotalChallenges) * 100) : 0;
                
                const progressBar = document.getElementById(`${category}-progress`);
                const percentageSpan = document.getElementById(`${category}-percentage`);
                
                if (progressBar && percentageSpan) {
                    progressBar.style.width = percentage + '%';
                    percentageSpan.textContent = percentage + '%';
                }
            });
        }

        function updateWeeklyActivity() {
            const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
            const now = new Date();
            
            days.forEach((day, index) => {
                const dayElement = document.getElementById(`activity-${day}`);
                if (dayElement) {
                    const dayDate = new Date(now);
                    dayDate.setDate(now.getDate() - now.getDay() + index + 1);
                    const dayFormatted = dayDate.toISOString().split('T')[0];
                    
                    const dayChallenge = challenges.find(c => c.date === dayFormatted);
                    
                    if (dayChallenge && dayChallenge.completed) {
                        dayElement.classList.remove('bg-gray-200');
                        dayElement.classList.add('bg-green-500');
                    } else if (dayDate <= now) {
                        dayElement.classList.remove('bg-gray-200', 'bg-green-500');
                        dayElement.classList.add('bg-red-300');
                    } else {
                        dayElement.classList.remove('bg-green-500', 'bg-red-300');
                        dayElement.classList.add('bg-gray-200');
                    }
                }
            });
        }

        // AI Functions
        function generateAISuggestions() {
            if (!currentUser) return;

            const applicableTemplates = aiSuggestionTemplates.filter(template => 
                template.condition(currentUser)
            );

            if (applicableTemplates.length > 0) {
                const randomTemplate = applicableTemplates[Math.floor(Math.random() * applicableTemplates.length)];
                const randomSuggestion = randomTemplate.suggestions[Math.floor(Math.random() * randomTemplate.suggestions.length)];
                
                const suggestionsContainer = document.getElementById('ai-suggestions');
                suggestionsContainer.innerHTML = `
                    <div class="bg-white bg-opacity-10 rounded-lg p-3">
                        <h3 class="font-semibold mb-1">Bugün için önerim:</h3>
                        <p class="text-sm opacity-90">${randomSuggestion}</p>
                        <button class="mt-2 bg-white text-emerald-600 px-3 py-1 rounded text-xs font-medium hover:bg-opacity-90 transition duration-300" onclick="addAISuggestionAsChallenge('${randomSuggestion}')">
                            Challenge Olarak Ekle
                        </button>
                    </div>
                `;
            }
        }

        function addAISuggestionAsChallenge(suggestion) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
            
            // Extract title from suggestion (first sentence)
            const title = suggestion.split('.')[0] || suggestion.substring(0, 50);
            
            document.getElementById('custom-challenge-title').value = title;
            document.getElementById('custom-challenge-desc').value = suggestion;
            document.getElementById('custom-challenge-date').value = tomorrowFormatted;
            
            // Scroll to challenge form
            document.getElementById('custom-challenge-title').scrollIntoView({ behavior: 'smooth' });
        }

        function generateAITitle(category, difficulty) {
            const titleTemplates = {
                mental: {
                    easy: ['5 Dakika Meditasyon', 'Günlük Yazma', 'Pozitif Düşünce', 'Nefes Egzersizi'],
                    medium: ['15 Dakika Okuma', 'Yeni Kelime Öğrenme', 'Hafıza Egzersizi', 'Yaratıcı Yazma'],
                    hard: ['Yeni Dil Öğrenme', 'Karmaşık Problem Çözme', '1 Saat Derin Okuma', 'Analitik Düşünme']
                },
                physical: {
                    easy: ['10 Dakika Yürüyüş', 'Basit Germe', '5 Şınav', 'Merdiven Çıkma'],
                    medium: ['30 Dakika Egzersiz', 'Koşu Antrenmanı', 'Yoga Seansı', 'Bisiklet Sürme'],
                    hard: ['1 Saat Spor', 'Maraton Antrenmanı', 'Ağırlık Kaldırma', 'Yoğun Kardiyovasküler']
                },
                productivity: {
                    easy: ['Günlük Planlama', 'E-posta Temizliği', 'Masa Düzenleme', '5 Dakika Organizasyon'],
                    medium: ['Proje Planlama', 'Zaman Yönetimi', 'Hedef Belirleme', 'Verimlilik Analizi'],
                    hard: ['Büyük Proje Başlatma', 'Sistem Optimizasyonu', 'Stratejik Planlama', 'Liderlik Geliştirme']
                },
                social: {
                    easy: ['Arkadaş Arama', 'Teşekkür Mesajı', 'Gülümseme', 'Nazik Davranış'],
                    medium: ['Yeni Tanışma', 'Grup Aktivitesi', 'Sosyal Etkinlik', 'İletişim Geliştirme'],
                    hard: ['Topluluk Liderliği', 'Sunum Yapma', 'Ağ Kurma', 'Mentorluk']
                }
            };

            const templates = titleTemplates[category]?.[difficulty] || ['Kişisel Gelişim Challenge'];
            return templates[Math.floor(Math.random() * templates.length)];
        }

        function generateAIDescription(title, category) {
            const descriptionTemplates = {
                mental: 'Bu aktivite zihinsel kapasiteni artıracak, odaklanmanı geliştirecek ve bilişsel yeteneklerini güçlendirecek.',
                physical: 'Bu egzersiz fiziksel sağlığını iyileştirecek, enerji seviyeni artıracak ve genel refahını destekleyecek.',
                productivity: 'Bu aktivite verimliliğini artıracak, zaman yönetimini geliştirecek ve hedeflerine ulaşmanda yardımcı olacak.',
                social: 'Bu aktivite sosyal becerilerini geliştirecek, ilişkilerini güçlendirecek ve iletişim yeteneklerini artıracak.'
            };

            const baseDescription = descriptionTemplates[category] || 'Bu challenge kişisel gelişimini destekleyecek.';
            return `${title} ile ${baseDescription} Düzenli pratik yaparak kendini geliştir ve hedeflerine ulaş.`;
        }

        function saveCustomTemplates() {
            if (currentUser) {
                localStorage.setItem(`templates_${currentUser.id}`, JSON.stringify(customTemplates));
            }
        }

        function loadCustomTemplates() {
            if (currentUser) {
                const saved = localStorage.getItem(`templates_${currentUser.id}`);
                if (saved) {
                    customTemplates = JSON.parse(saved);
                }
            }
        }

        function restoreDefaultChallenges() {
            // Keep track of completed challenges
            const completedDates = challenges.filter(c => c.completed).map(c => c.date);
            
            // Create new challenges from defaults starting from today
            const today = new Date();
            challenges = defaultChallenges.map((challenge, index) => {
                const challengeDate = new Date(today);
                challengeDate.setDate(today.getDate() + index);
                const dateString = challengeDate.toISOString().split('T')[0];
                
                return {
                    ...challenge,
                    date: dateString,
                    completed: completedDates.includes(dateString) // Keep completed status if it was completed before
                };
            });
            
            // Save the restored challenges
            saveChallenges();
            
            // Update UI
            renderChallengeCalendar();
            updateTodayChallenge();
            updateAnalytics();
            
            alert('Varsayılan challenge\'lar başarıyla geri yüklendi! Tamamladığınız challenge\'lar korundu.');
        }
        
        // Initialize the app
        initApp();
    
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9570573e50489904',t:'MTc1MTE0NjgwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
