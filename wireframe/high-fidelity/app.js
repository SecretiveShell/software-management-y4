(() => {
    'use strict';

    /* ---------------------------------------------------------
       Icons
       --------------------------------------------------------- */

    const ICON_PATHS = {
        help: '<circle cx="12" cy="12" r="9"/><path d="M9.7 9.2a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1.1.9-1.1 1.8"/><path d="M12 16.8h.01"/>',
        bag: '<path d="M6.5 8.5h11l1 11.5h-13z"/><path d="M9 9V6.5a3 3 0 0 1 6 0V9"/>',
        menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
        plus: '<path d="M12 5v14M5 12h14"/>',
        minus: '<path d="M5 12h14"/>',
        x: '<path d="M6 6 18 18M18 6 6 18"/>',
        check: '<path d="m5 12 4 4L19 6"/>',
        package: '<path d="m12 3-8 4.5v9L12 21l8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
        spool: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.2"/>',
        printer: '<path d="M7 8V4h10v4"/><rect x="4" y="8" width="16" height="8" rx="2"/><path d="M7 16h10v4H7z"/>',
        'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
        truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
        return: '<path d="M9 7 4 12l5 5"/><path d="M4 12h10a5 5 0 0 1 5 5v1"/>',
        headset: '<path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4z"/><path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3z"/>',
        more: '<circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
        phone: '<path d="M8 4h3l1.5 4-2 1.5a13 13 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z"/>',
        'phone-off': '<path d="m4 4 16 16"/><path d="M8 4h3l1.5 4-2 1.5a13 13 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z"/>',
        download: '<path d="M12 4v10M8 11l4 4 4-4M5 20h14"/>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        flag: '<path d="M5 21V4"/><path d="M5 5h11l-1.5 3L16 11H5"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
        sparkle: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
        mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
        play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
        pause: '<path d="M9 5v14M15 5v14"/>',
        refresh: '<path d="M20 11a8 8 0 1 0-2.4 5.7"/><path d="M20 4v7h-7"/>',
        layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
        waveform: '<path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4"/>',
        star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z" fill="currentColor" stroke="none"/>',
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        'arrow-up-right': '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5H5V6h5"/>',
        shield: '<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
        user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
        trash: '<path d="M4 7h16M10 11v6M14 11v6"/><path d="m6 7 1 14h10l1-14M9 7V4h6v3"/>',
        paperclip: '<path d="m8.5 12.5 6.4-6.4a3 3 0 0 1 4.2 4.2l-7.6 7.6a5 5 0 0 1-7.1-7.1l7.5-7.5"/>',
        send: '<path d="m4 12 16-8-6 16-2.5-6.5z"/><path d="m11.5 13.5 3-3"/>',
        'thumb-up': '<path d="M7 10v10H4V10z"/><path d="M7 10l3.5-6a2 2 0 0 1 3.4 2l-1.2 4H18a2 2 0 0 1 2 2.2l-1 6H7"/>',
        'thumb-down': '<path d="M17 14V4h3v10z"/><path d="M17 14l-3.5 6a2 2 0 0 1-3.4-2l1.2-4H6a2 2 0 0 1-2-2.2l1-6h12"/>',
        message: '<path d="M4 5h16v11H9l-5 4z"/>',
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        gift: '<path d="M4 10h16v10H4z"/><path d="M12 10v10M3 10h18V7H3z"/><path d="M12 7H8.5a2.5 2.5 0 1 1 0-5H12zM12 7h3.5a2.5 2.5 0 1 0 0-5H12z"/>',
        'arrow-left': '<path d="M19 12H5M11 6l-6 6 6 6"/>'
    };

    function iconSvg(name) {
        const paths = ICON_PATHS[name] || ICON_PATHS.info;
        return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
    }

    function ico(name) {
        return `<span data-icon="${name}" aria-hidden="true">${iconSvg(name)}</span>`;
    }

    function hydrateIcons(root = document) {
        root.querySelectorAll('[data-icon]').forEach((el) => {
            if (!el.querySelector('svg')) {
                el.innerHTML = iconSvg(el.dataset.icon);
            }
        });
    }

    /* ---------------------------------------------------------
       Data
       --------------------------------------------------------- */

    const products = {
        basic: {
            name: 'Basic PLA',
            tag: 'Best seller',
            meta: 'Onyx Black · 1.75 mm · 1 kg',
            price: 19.99,
            stock: 'In stock',
            stockClass: '',
            rating: '4.6',
            reviews: 1032,
            color: '#1c1c1c',
            desc: 'A dependable everyday PLA for prototypes, models and functional parts. Consistent diameter and a smooth, forgiving print profile.'
        },
        matte: {
            name: 'Matte PLA',
            tag: 'Low sheen',
            meta: 'Onyx Black · 1.75 mm · 1 kg',
            price: 22.99,
            stock: 'In stock',
            stockClass: '',
            rating: '4.8',
            reviews: 214,
            color: '#262626',
            desc: 'A soft matte finish that hides layer lines beautifully. Ideal for display pieces, props and clean architectural models.'
        },
        plaplus: {
            name: 'PLA+',
            tag: 'Tough',
            meta: 'Onyx Black · 1.75 mm · 1 kg',
            price: 24.99,
            stock: 'Low stock',
            stockClass: 'low',
            rating: '4.9',
            reviews: 88,
            color: '#1f1f1f',
            desc: 'Stronger layer adhesion and improved impact resistance. A good step up for functional prints that need a little more toughness.'
        },
        petg: {
            name: 'PETG',
            tag: 'Weather resistant',
            meta: 'Clear · 1.75 mm · 1 kg',
            price: 23.99,
            stock: 'In stock',
            stockClass: '',
            rating: '4.7',
            reviews: 156,
            color: '#b9c6cc',
            desc: 'Tough, slightly flexible and resistant to moisture. A practical choice for outdoor parts, brackets and containers.'
        },
        abs: {
            name: 'ABS',
            tag: 'Heat resistant',
            meta: 'White · 1.75 mm · 1 kg',
            price: 21.99,
            stock: 'In stock',
            stockClass: '',
            rating: '4.4',
            reviews: 92,
            color: '#dddddd',
            desc: 'A durable engineering plastic with good heat resistance. Best used with an enclosure and good ventilation.'
        },
        tpu: {
            name: 'TPU',
            tag: 'Flexible',
            meta: 'Black · 1.75 mm · 0.5 kg',
            price: 27.99,
            stock: 'In stock',
            stockClass: '',
            rating: '4.5',
            reviews: 61,
            color: '#1f1f1f',
            desc: 'A flexible filament for phone cases, gaskets and wearables. Print slowly and use a direct-drive extruder where possible.'
        }
    };

    const faqs = [
        {
            cat: 'Orders',
            q: 'Where is my order?',
            a: 'You can track any order from the confirmation email or the Track order link in the header. Most UK orders arrive within 2–3 working days. If your tracking has not updated for 48 hours, ask JJ Assistant to check it for you.'
        },
        {
            cat: 'Orders',
            q: 'Can I change my delivery address?',
            a: 'We can change an address before an order is dispatched. Once a parcel is in transit, a human agent needs to contact the courier. Ask JJ Assistant to transfer you with your order number ready.'
        },
        {
            cat: 'Orders',
            q: 'What are your delivery options?',
            a: 'Standard UK delivery is free over £40 and takes 2–3 working days. Express delivery is £4.95 and arrives the next working day if ordered before 2pm. Collection from our Bristol store is free.'
        },
        {
            cat: 'Filament',
            q: 'Which filament should I use for a beginner?',
            a: 'Basic PLA is the easiest place to start. It prints at 200–210°C with a 60°C bed, tolerates most printers and comes in a wide range of colours. Move to PLA+ when you need more strength or heat resistance.'
        },
        {
            cat: 'Filament',
            q: 'How should I store PLA?',
            a: 'Keep filament dry and out of direct sunlight. Store spools in an airtight box with a silica gel pack. Wet filament is the most common cause of stringing, popping and weak layer adhesion.'
        },
        {
            cat: 'Filament',
            q: 'What is the difference between PLA and PLA+?',
            a: 'PLA+ is a modified PLA with better layer adhesion and impact resistance. It prints at similar temperatures but is less brittle. Use PLA+ for functional parts and basic PLA for decorative models and prototypes.'
        },
        {
            cat: 'Printing',
            q: 'Why do my prints keep failing halfway through?',
            a: 'The most common causes are a loose X/Y belt, a partial nozzle clog, or the print detaching from the bed. Check belt tension first, then clean the build plate and inspect the first layer. If the failure is always at the same height, check the Z rod for binding.'
        },
        {
            cat: 'Printing',
            q: 'How do I fix stringing?',
            a: 'Dry the filament, lower the nozzle temperature by 5–10°C, and increase retraction distance slightly. Print a small retraction test after each change so you can compare results.'
        },
        {
            cat: 'Returns',
            q: 'What is your returns policy?',
            a: 'Unopened products can be returned within 30 days of delivery. Opened filament can be returned if it is faulty. Start a return from your account or ask JJ Assistant and we will email a prepaid label.'
        },
        {
            cat: 'Returns',
            q: 'How long do refunds take?',
            a: 'Once your return reaches our warehouse, refunds are processed within 3–5 working days. Your bank may take a further 2–5 days to show the credit.'
        },
        {
            cat: 'Support',
            q: 'When are human agents available?',
            a: 'Human support is available Monday to Friday, 09:00–17:00. Outside those hours, JJ Assistant can still help and can take your email for a next-day reply.'
        },
        {
            cat: 'Support',
            q: 'Can I speak to a human?',
            a: 'Yes. Ask JJ Assistant to talk to a human and it will transfer the full conversation. If no agents are online, you can leave an email address and the team will reply within 24 hours.'
        }
    ];

    const scenarios = [
        { id: 'welcome', title: 'Welcome', desc: 'Empty state with suggested prompts', icon: 'sparkle' },
        { id: 'chat', title: 'Live chat', desc: 'Order lookup and suggested replies', icon: 'message' },
        { id: 'products', title: 'Product results', desc: 'Rich filament cards and detail view', icon: 'spool' },
        { id: 'no-answer', title: 'No reliable answer', desc: 'Rephrase, FAQ and handoff options', icon: 'help' },
        { id: 'transferring', title: 'Transferring', desc: 'Human queue with cancel action', icon: 'headset' },
        { id: 'human-joined', title: 'Human joined', desc: 'Agent takeover with full history', icon: 'user' },
        { id: 'humans-offline', title: 'Humans offline', desc: 'Out-of-hours email capture', icon: 'clock' },
        { id: 'offline', title: 'Assistant offline', desc: 'Retry and help-centre fallback', icon: 'info' },
        { id: 'voice', title: 'Voice call', desc: 'Connected voice support state', icon: 'phone' },
        { id: 'faq', title: 'Help centre', desc: 'Searchable FAQ articles', icon: 'search' },
        { id: 'address', title: 'Transfer unable', desc: 'Address change after dispatch', icon: 'truck' },
        { id: 'returns', title: 'Returns', desc: 'Return eligibility and next steps', icon: 'return' },
        { id: 'video', title: 'Video answer', desc: 'Troubleshooting video player', icon: 'play' }
    ];

    const defaultHeader = {
        name: 'John Jones Printers',
        status: 'Support assistant · Online',
        dot: 'online',
        avatar: 'JJ',
        agent: false
    };

    const defaultNote = 'AI support is available 24/7. For urgent issues, ask to speak with a human agent.';

    const state = {
        mode: 'bot',
        welcome: true,
        attachment: null,
        cart: readStoredCart(),
        product: null,
        productQty: 1,
        quickReplies: [],
        timeouts: new Set(),
        intervals: new Set(),
        transferTimer: null,
        transferUnavailable: false,
        lastFocus: null,
        voice: { connected: false, muted: false, seconds: 0, timer: null, connectTimer: null },
        video: { playing: false, progress: 0, timer: null }
    };

    /* ---------------------------------------------------------
       DOM shortcuts
       --------------------------------------------------------- */

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const messages = $('#messages');
    const quickReplies = $('#quickReplies');
    const composer = $('#composer');
    const messageInput = $('#messageInput');
    const sendBtn = $('#sendBtn');
    const attachBtn = $('#attachBtn');
    const fileInput = $('#fileInput');
    const attachmentPreview = $('#attachmentPreview');
    const chatTitle = $('#chatTitle');
    const chatStatus = $('#chatStatus');
    const chatAvatar = $('#chatAvatar');
    const chatMenu = $('#chatMenu');
    const chatMenuBtn = $('#chatMenuBtn');
    const sidebar = $('#sidebar');
    const sidebarScrim = $('#sidebarScrim');
    const menuBtn = $('#menuBtn');
    const toastEl = $('#toast');

    const productModal = $('#productModal');
    const productModalVisual = $('#productModalVisual');
    const productTag = $('#productTag');
    const productTitle = $('#productTitle');
    const productRating = $('#productRating');
    const productDescription = $('#productDescription');
    const productPrice = $('#productPrice');
    const productQty = $('#productQty');
    const productStock = $('#productStock');

    const faqModal = $('#faqModal');
    const faqList = $('#faqList');
    const faqSearch = $('#faqSearch');

    const cartModal = $('#cartModal');
    const cartBody = $('#cartBody');
    const cartSubtotal = $('#cartSubtotal');
    const checkoutBtn = $('#checkoutBtn');
    const cartCount = $('#cartCount');

    const voiceModal = $('#voiceModal');
    const voiceStatus = $('#voiceStatus');
    const callTimer = $('#callTimer');
    const muteBtn = $('#muteBtn');
    const voiceOrb = $('#voiceOrb');

    const videoModal = $('#videoModal');
    const playBtn = $('#playBtn');
    const videoToggle = $('#videoToggle');
    const videoProgress = $('#videoProgress');
    const videoTime = $('#videoTime');

    const prototypeModal = $('#prototypeModal');
    const prototypeGrid = $('#prototypeGrid');

    /* ---------------------------------------------------------
       Helpers
       --------------------------------------------------------- */

    const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[character]));

    const money = (value) => `£${Number(value).toFixed(2)}`;

    const nowTime = () => new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
    });

    function formatBytes(bytes = 0) {
        if (!bytes) return '0 KB';
        if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    function formatDuration(seconds = 0) {
        const minutes = Math.floor(seconds / 60);
        const remainder = seconds % 60;
        return `${minutes}:${String(remainder).padStart(2, '0')}`;
    }

    function later(callback, delay) {
        const id = window.setTimeout(() => {
            state.timeouts.delete(id);
            callback();
        }, delay);
        state.timeouts.add(id);
        return id;
    }

    function every(callback, delay) {
        const id = window.setInterval(callback, delay);
        state.intervals.add(id);
        return id;
    }

    function clearAsync() {
        state.timeouts.forEach((id) => window.clearTimeout(id));
        state.intervals.forEach((id) => window.clearInterval(id));
        state.timeouts.clear();
        state.intervals.clear();
    }

    function scrollToBottom() {
        window.requestAnimationFrame(() => {
            messages.scrollTop = messages.scrollHeight;
        });
    }

    function toast(message) {
        toastEl.textContent = message;
        toastEl.classList.add('show');
        window.clearTimeout(toast._timer);
        toast._timer = window.setTimeout(() => {
            toastEl.classList.remove('show');
        }, 2800);
    }

    function setHeader({ name, status, dot, avatar, agent }) {
        chatTitle.textContent = name;
        chatStatus.innerHTML = `<span class="status-dot ${dot}" aria-hidden="true"></span> ${status}`;
        chatAvatar.textContent = avatar;
        chatAvatar.classList.toggle('agent-avatar', Boolean(agent));
    }

    function setComposerEnabled(enabled, placeholder) {
        messageInput.disabled = !enabled;
        attachBtn.disabled = !enabled;
        composer.classList.toggle('is-disabled', !enabled);
        if (placeholder) messageInput.placeholder = placeholder;
        updateComposerState();
    }

    function setComposerNote(note) {
        $('#composerNote').textContent = note;
    }

    function updateComposerState() {
        const hasText = messageInput.value.trim().length > 0;
        sendBtn.disabled = messageInput.disabled || (!hasText && !state.attachment);
    }

    function autoResize() {
        messageInput.style.height = 'auto';
        messageInput.style.height = `${Math.min(messageInput.scrollHeight, 112)}px`;
    }

    function starsHTML(rating) {
        const filled = Math.round(Number(rating));
        return `<span class="stars" aria-label="${rating} out of 5">${Array.from({ length: 5 }, (_, index) => (
            `<span style="opacity:${index < filled ? 1 : 0.22}">${iconSvg('star')}</span>`
        )).join('')}</span>`;
    }

    /* ---------------------------------------------------------
       Messages
       --------------------------------------------------------- */

    function welcomeHTML() {
        return `
            <div class="welcome" id="welcome">
                <div class="welcome-avatar" aria-hidden="true">JJ</div>
                <h2>Hi, I'm JJ Assistant.</h2>
                <p>I can help with orders, filament, printer setup and returns. What can I do for you?</p>
                <div class="suggestions">
                    <button class="suggestion" type="button" data-prompt="Where is my order?">
                        <span class="suggestion-icon">${ico('package')}</span>
                        Where is my order?
                    </button>
                    <button class="suggestion" type="button" data-prompt="I'm looking for black PLA filament">
                        <span class="suggestion-icon">${ico('spool')}</span>
                        Which filament should I use?
                    </button>
                    <button class="suggestion" type="button" data-prompt="My print keeps failing halfway through">
                        <span class="suggestion-icon">${ico('printer')}</span>
                        My print keeps failing
                    </button>
                    <button class="suggestion" type="button" data-prompt="I need to speak to a human">
                        <span class="suggestion-icon">${ico('headset')}</span>
                        Talk to a human
                    </button>
                </div>
                <p class="welcome-meta">${ico('clock')} Available 24/7 · Average reply under 2 minutes</p>
            </div>
        `;
    }

    function hideWelcome() {
        const welcome = $('#welcome');
        if (welcome) welcome.remove();
        state.welcome = false;
    }

    function toolsHTML(source = '') {
        return `
            <div class="msg-tools">
                ${source ? `<button class="source-chip" type="button" data-action="source" data-source="${escapeHTML(source)}">${ico('shield')} ${escapeHTML(source)}</button>` : ''}
                <div class="feedback">
                    <span class="feedback-label">Helpful?</span>
                    <button class="feedback-btn" type="button" data-feedback="up" aria-label="Mark answer helpful" aria-pressed="false">${ico('thumb-up')}</button>
                    <button class="feedback-btn" type="button" data-feedback="down" aria-label="Mark answer not helpful" aria-pressed="false">${ico('thumb-down')}</button>
                </div>
            </div>
        `;
    }

    function addMessage({
        role,
        text = '',
        html = '',
        attachment = null,
        tools = false,
        source = '',
        time = nowTime(),
        wide = false
    }) {
        const article = document.createElement('article');
        article.className = `message ${role}${wide ? ' wide' : ''}`;

        const avatar = role === 'user'
            ? '<div class="msg-avatar user-avatar" aria-hidden="true">JD</div>'
            : role === 'agent'
                ? '<div class="msg-avatar agent-avatar" aria-hidden="true">A</div>'
                : '<div class="msg-avatar" aria-hidden="true">JJ</div>';

        const sender = role === 'agent'
            ? '<span class="sender">Alex · Human support</span>'
            : role === 'bot'
                ? '<span class="sender">JJ Assistant</span>'
                : '';

        const body = html || `<p>${escapeHTML(text).replace(/\n/g, '<br>')}</p>`;

        const attachmentHTML = attachment
            ? `<div class="attachment-preview" style="margin:8px 0 0">${ico('paperclip')}<strong>${escapeHTML(attachment.name)}</strong><span>${formatBytes(attachment.size)}</span></div>`
            : '';

        const meta = `
            <div class="msg-meta">
                <span class="time">${time}</span>
                ${role === 'user' ? '<span class="delivered">Delivered ✓✓</span>' : ''}
            </div>
        `;

        article.innerHTML = `${avatar}<div class="bubble">${sender}<div class="msg-content">${body}${attachmentHTML}</div>${meta}${tools ? toolsHTML(source) : ''}</div>`;
        messages.append(article);
        hydrateIcons(article);
        scrollToBottom();
        return article;
    }

    function addUser(text, attachment = null) {
        hideWelcome();
        return addMessage({ role: 'user', text, attachment });
    }

    function addBot(html, { source = '', tools = true, quickReplies: replies = [], wide = false } = {}) {
        hideWelcome();
        const message = addMessage({ role: 'bot', html, tools, source, wide });
        setQuickReplies(replies);
        return message;
    }

    function setQuickReplies(replies = []) {
        state.quickReplies = replies;
        if (state.mode === 'offline' || state.mode === 'transferring') {
            quickReplies.innerHTML = '';
            return;
        }
        quickReplies.innerHTML = replies.map((reply, index) => (
            `<button class="quick-reply" type="button" data-quick-index="${index}">${escapeHTML(reply.label)}</button>`
        )).join('');
    }

    function clearQuickReplies() {
        state.quickReplies = [];
        quickReplies.innerHTML = '';
    }

    function showTyping(label = 'JJ Assistant is typing', role = 'bot') {
        if ($('#typing')) return;
        const article = document.createElement('article');
        article.className = `message ${role} typing`;
        article.id = 'typing';
        const avatar = role === 'agent'
            ? '<div class="msg-avatar agent-avatar" aria-hidden="true">A</div>'
            : '<div class="msg-avatar" aria-hidden="true">JJ</div>';
        article.innerHTML = `${avatar}<div class="bubble" role="status" aria-label="${escapeHTML(label)}"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
        messages.append(article);
        scrollToBottom();
    }

    function hideTyping() {
        $('#typing')?.remove();
    }

    /* ---------------------------------------------------------
       Rich answers
       --------------------------------------------------------- */

    function orderAnswerHTML() {
        return `
            <p>Yes — order <strong>JJ-10482</strong> is on its way. It left our Bristol warehouse this morning and is due <strong>Thursday 5 November</strong>.</p>
            <div class="order-card">
                <div class="order-head">
                    <div>
                        <span class="eyebrow">Order JJ-10482</span>
                        <strong>Matte PLA · Onyx Black</strong>
                    </div>
                    <span class="pill success">In transit</span>
                </div>
                <div class="order-body">
                    <div class="order-product">
                        <div class="mini-spool" aria-hidden="true">PLA</div>
                        <div>
                            <strong>2 × Matte PLA</strong>
                            <span>1.75 mm · 1 kg · £45.98</span>
                        </div>
                    </div>
                    <div class="timeline" aria-hidden="true">
                        <span class="timeline-step done"></span>
                        <span class="timeline-step done"></span>
                        <span class="timeline-step done"></span>
                        <span class="timeline-step"></span>
                    </div>
                    <div class="timeline-labels">
                        <span class="is-done">Ordered</span>
                        <span class="is-done">Packed</span>
                        <span class="is-done">In transit</span>
                        <span>Delivered</span>
                    </div>
                    <p class="order-note">${ico('truck')} Last scan: Bristol MC · 08:42 today. Tracking updates every 15 minutes.</p>
                </div>
            </div>
            <p>Would you like me to let you know when it is out for delivery?</p>
        `;
    }

    function productCardHTML(id) {
        const product = products[id];
        return `
            <article class="product-card">
                <div class="product-visual">
                    <span class="product-tag">${product.tag}</span>
                    <div class="spool" style="--spool:${product.color}" aria-hidden="true"></div>
                </div>
                <div class="product-body">
                    <div class="product-top">
                        <h3>${product.name}</h3>
                        <span class="rating">${ico('star')} ${product.rating}</span>
                    </div>
                    <p class="product-meta">${product.meta}</p>
                    <div class="product-foot">
                        <span class="product-price">${money(product.price)}</span>
                        <span class="stock ${product.stockClass}">${product.stock}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-secondary" type="button" data-action="product" data-product="${id}">View</button>
                        <button class="btn btn-primary" type="button" data-action="add-cart" data-product="${id}">Add</button>
                    </div>
                </div>
            </article>
        `;
    }

    function productGridHTML(ids = ['basic', 'matte', 'plaplus']) {
        return `<div class="product-grid">${ids.map(productCardHTML).join('')}</div>`;
    }

    function filamentAnswerHTML() {
        return `
            <p>Yes — here are three black PLA options that are in stock and ready to ship today.</p>
            ${productGridHTML()}
            <p>All three print at 200–210°C with a 60°C bed. PLA+ is the toughest of the three if the part needs to take a knock.</p>
        `;
    }

    function troubleshootAnswerHTML() {
        return `
            <p>Let's narrow it down. A failure at roughly the same height usually points to a mechanical issue rather than the model.</p>
            <div class="answer-card">
                <div class="answer-head">
                    <div class="answer-head-icon">${ico('printer')}</div>
                    <div>
                        <strong>Check these three things first</strong>
                        <span>About 5 minutes · no tools needed</span>
                    </div>
                </div>
                <div class="answer-body">
                    <ul class="check-list">
                        <li>${ico('check')} Check the X/Y belt tension — it should twang, not sag.</li>
                        <li>${ico('check')} Clean the build plate with warm soapy water and dry it fully.</li>
                        <li>${ico('check')} Lower outer wall speed to 35 mm/s and re-slice the model.</li>
                    </ul>
                </div>
            </div>
            <button class="video-card" type="button" data-action="video">
                <span class="video-thumb">${ico('play')}</span>
                <span>
                    <strong>Watch: fixing layer shifts</strong>
                    <span>1:42 · printer care guide</span>
                </span>
            </button>
        `;
    }

    function addressAnswerHTML() {
        return `
            <p>I'm sorry — I can't change a delivery address once a parcel is in transit. I don't want to promise something the courier can't do.</p>
            <p>I'll pass this to a human agent who can contact the courier and check whether a redirect is still possible.</p>
        `;
    }

    function returnsAnswerHTML() {
        return `
            <p>You're within the 30-day returns window, so I can help with this. The quickest option is a prepaid return label by email.</p>
            <div class="answer-card">
                <div class="answer-head">
                    <div class="answer-head-icon">${ico('return')}</div>
                    <div>
                        <strong>Return summary</strong>
                        <span>Order JJ-10482 · delivered 28 October</span>
                    </div>
                </div>
                <div class="answer-body">
                    <ul class="check-list">
                        <li>${ico('check')} Unopened products can be returned within 30 days.</li>
                        <li>${ico('check')} Opened filament can be returned if it is faulty.</li>
                        <li>${ico('check')} Refunds are processed within 3–5 working days.</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function noAnswerHTML() {
        return `
            <p>I couldn't find a reliable answer for <strong>E0427</strong> in the approved support sources. I don't want to guess and send you down the wrong path.</p>
            <div class="answer-card">
                <div class="answer-head">
                    <div class="answer-head-icon">${ico('help')}</div>
                    <div>
                        <strong>What would you like to do?</strong>
                        <span>You can try a different wording or ask a person.</span>
                    </div>
                </div>
                <div class="answer-body">
                    <p>Rephrasing the error code, the printer model and what the printer was doing usually helps. A human agent can also look at the full error log with you.</p>
                </div>
            </div>
        `;
    }

    function transferCardHTML(reason) {
        return `
            <div class="transfer-card" id="transferCard" role="status">
                <div class="transfer-icon">${ico('headset')}</div>
                <div class="transfer-info">
                    <strong>Connecting to a human agent</strong>
                    <span>Estimated wait: 2–4 minutes${reason ? ` · ${escapeHTML(reason)}` : ''} <span class="queue-dots" aria-hidden="true"><span></span><span></span><span></span></span></span>
                </div>
                <button class="btn btn-secondary" type="button" data-action="cancel-transfer">Cancel</button>
            </div>
        `;
    }

    function joinedCardHTML() {
        return `
            <div class="joined-card" role="status">
                <div class="joined-icon">${ico('check')}</div>
                <div class="joined-info">
                    <strong>Alex joined the chat</strong>
                    <span>Human support agent · has read the conversation</span>
                </div>
            </div>
        `;
    }

    function humanUnavailableHTML() {
        return `
            <div class="unavailable-card" id="humanUnavailableCard">
                <div class="unavailable-head">
                    <div class="unavailable-icon">${ico('clock')}</div>
                    <div>
                        <strong>No human agents available right now</strong>
                        <span>Human support hours are Monday to Friday, 09:00–17:00. Leave your email and the team will reply within 24 hours.</span>
                    </div>
                </div>
                <form class="email-form" data-form="email">
                    <label class="sr-only" for="offlineEmail">Email address</label>
                    <input id="offlineEmail" name="email" type="email" placeholder="you@example.com" required>
                    <button class="btn btn-primary" type="submit">Send</button>
                </form>
            </div>
        `;
    }

    function offlineHTML() {
        return `
            <div class="offline-panel">
                <div class="offline-icon">${ico('info')}</div>
                <h2>The support assistant is unavailable</h2>
                <p>We're having trouble connecting to the automated assistant. Your conversation is safe — try again in a few moments, or use the help centre in the meantime.</p>
                <button class="btn btn-primary" type="button" data-action="retry">${ico('refresh')} Try again</button>
                <button class="btn btn-secondary" type="button" data-action="faq">${ico('help')} Open help centre</button>
            </div>
        `;
    }

    /* ---------------------------------------------------------
       Conversation engine
       --------------------------------------------------------- */

    function detectIntent(text) {
        const value = text.toLowerCase();

        if (/\b(human|agent|person|representative|someone|speak to)\b/.test(value)) return 'human';
        if (/\b(change|update|amend|edit)\b.*\b(address|delivery address)\b/.test(value) || /\baddress\b.*\b(change|update|amend|edit)\b/.test(value)) return 'address';
        if (/\b(refund|return|exchange|send back)\b/.test(value)) return 'returns';
        if (/\b(fail|failed|failing|string|warp|layer|nozzle|clog|error|e0|print|prints|printing)\b/.test(value)) return 'troubleshoot';
        if (/\b(filament|pla|petg|abs|tpu|spool|material|colour|color|black)\b/.test(value)) return 'filament';
        if (/\b(order|track|tracking|delivery|parcel|shipped|shipping|arrive|where is)\b/.test(value)) return 'order';
        if (/\b(faq|help centre|help center|article|guide)\b/.test(value)) return 'faq';

        return 'unknown';
    }

    function respond(text) {
        const intent = detectIntent(text);
        showTyping();

        later(() => {
            hideTyping();
            if (state.mode !== 'bot') return;

            switch (intent) {
                case 'human':
                    addBot('<p>Of course — I\'m connecting you with a member of the support team now. They will see this conversation and everything you have already shared.</p>', { tools: false });
                    later(() => startTransfer({ reason: 'Customer request' }), 600);
                    break;

                case 'order':
                    addBot(orderAnswerHTML(), {
                        source: 'Royal Mail tracking · updated 2 min ago',
                        quickReplies: [
                            { label: 'Something else', action: 'focus-composer' },
                            { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                        ]
                    });
                    break;

                case 'filament':
                    addBot(filamentAnswerHTML(), {
                        source: 'John Jones filament guide · updated today',
                        wide: true,
                        quickReplies: [
                            { label: 'Compare PLA and PLA+', prompt: 'Can you compare PLA and PLA+' },
                            { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                        ]
                    });
                    break;

                case 'troubleshoot':
                    addBot(troubleshootAnswerHTML(), {
                        source: 'Printer care guide · section 4',
                        quickReplies: [
                            { label: 'It is warping', prompt: 'My prints are warping at the corners' },
                            { label: 'It has stringing', prompt: 'My prints have stringing' },
                            { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                        ]
                    });
                    break;

                case 'address':
                    addBot(addressAnswerHTML(), { tools: false });
                    later(() => startTransfer({ reason: 'Delivery address change' }), 850);
                    break;

                case 'returns':
                    addBot(returnsAnswerHTML(), {
                        source: 'Returns policy · 30-day window',
                        quickReplies: [
                            { label: 'Start a return', action: 'start-return' },
                            { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                        ]
                    });
                    break;

                case 'faq':
                    openFaq();
                    break;

                default:
                    addBot(noAnswerHTML(), {
                        quickReplies: [
                            { label: 'Try rephrasing', action: 'focus-composer' },
                            { label: 'Search help centre', action: 'faq' },
                            { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                        ]
                    });
                    break;
            }
        }, 850 + Math.random() * 550);
    }

    function humanReply(text) {
        const value = text.toLowerCase();

        if (/\b(order|delivery|parcel|track)\b/.test(value)) {
            return 'I\'ve got the order up now. It is with the courier and due Thursday — I\'ll keep an eye on it with you.';
        }
        if (/\b(print|fail|layer|string|warp|nozzle)\b/.test(value)) {
            return 'Thanks. Let\'s start with the belt tension and the first layer. Can you send a photo of the failed print?';
        }
        if (/\b(refund|return|exchange)\b/.test(value)) {
            return 'I can help with that. I\'ll need the order number and a quick photo of the item, then I can start the return.';
        }
        if (/\b(thanks|thank you|great|perfect)\b/.test(value)) {
            return 'Happy to help. I\'ll stay in the chat for a few more minutes in case anything else comes up.';
        }
        return 'Thanks — I\'ve got that. Let me take a look and I\'ll come back to you in a moment.';
    }

    function respondAsHuman(text) {
        showTyping('Alex is typing', 'agent');

        later(() => {
            hideTyping();
            if (state.mode !== 'human') return;
            addMessage({ role: 'agent', html: `<p>${escapeHTML(humanReply(text))}</p>` });
            setQuickReplies([
                { label: 'Thanks, Alex', prompt: 'Thanks, Alex' },
                { label: 'End chat', action: 'end-chat' }
            ]);
        }, 900 + Math.random() * 500);
    }

    function sendUserMessage(rawText) {
        const text = String(rawText || '').trim();

        if (state.mode === 'offline') {
            toast('The assistant is offline. Try again first.');
            return;
        }
        if (state.mode === 'transferring') {
            toast('A human agent is joining. Please wait a moment.');
            return;
        }
        if (!text && !state.attachment) return;

        addUser(text || 'Attached a file', state.attachment);
        state.attachment = null;
        renderAttachment();
        messageInput.value = '';
        autoResize();
        updateComposerState();
        clearQuickReplies();

        if (state.mode === 'human') {
            respondAsHuman(text);
        } else if (state.mode === 'bot') {
            respond(text);
        }
    }

    function sendSeedMessage(text) {
        if (state.mode === 'offline') {
            toast('The assistant is offline. Try again first.');
            return;
        }
        if (state.mode === 'transferring') {
            toast('A human agent is joining. Please wait a moment.');
            return;
        }
        if (state.mode === 'human') {
            resetChat();
        }
        sendUserMessage(text);
    }

    function startPrompt(prompt) {
        if (state.mode === 'offline') {
            toast('The assistant is offline. Try again first.');
            return;
        }
        if (state.mode === 'transferring') {
            toast('A human agent is joining. Please wait a moment.');
            return;
        }
        closeSidebar();
        sendUserMessage(prompt);
    }

    /* ---------------------------------------------------------
       Transfer flow
       --------------------------------------------------------- */

    function startTransfer({ unavailable = false, reason = '' } = {}) {
        if (state.mode === 'human') {
            toast('You are already chatting with Alex.');
            return;
        }
        if (state.mode === 'offline') {
            toast('The assistant is offline. Try again first.');
            return;
        }
        if (state.mode === 'transferring') {
            toast('A transfer is already in progress.');
            return;
        }

        if (state.welcome) {
            hideWelcome();
            addMessage({ role: 'user', text: 'I need to speak to a human, please.' });
            addMessage({ role: 'bot', html: '<p>Of course — I\'m connecting you with a member of the support team now.</p>', tools: false });
        }

        state.mode = 'transferring';
        state.transferUnavailable = unavailable;
        clearQuickReplies();
        $('#transferCard')?.remove();
        setHeader({ name: 'Connecting you', status: 'Connecting to a human agent', dot: 'pending', avatar: 'JJ', agent: false });
        setComposerEnabled(false, 'A human agent will join this chat shortly...');
        setComposerNote('You are in the support queue. Please keep this chat open.');

        const card = document.createElement('div');
        card.className = 'transfer-card';
        card.id = 'transferCard';
        card.setAttribute('role', 'status');
        card.innerHTML = `
            <div class="transfer-icon">${ico('headset')}</div>
            <div class="transfer-info">
                <strong>Connecting to a human agent</strong>
                <span>Estimated wait: 2–4 minutes${reason ? ` · ${escapeHTML(reason)}` : ''} <span class="queue-dots" aria-hidden="true"><span></span><span></span><span></span></span></span>
            </div>
            <button class="btn btn-secondary" type="button" data-action="cancel-transfer">Cancel</button>
        `;
        messages.append(card);
        hydrateIcons(card);
        scrollToBottom();

        state.transferTimer = later(() => {
            state.transferTimer = null;
            if (state.mode !== 'transferring') return;
            if (state.transferUnavailable) showHumanUnavailable();
            else joinHuman();
        }, 4300);
    }

    function cancelTransfer() {
        if (state.mode !== 'transferring') return;
        if (state.transferTimer) window.clearTimeout(state.transferTimer);
        state.transferTimer = null;
        state.transferUnavailable = false;
        $('#transferCard')?.remove();
        state.mode = 'bot';
        setHeader(defaultHeader);
        setComposerEnabled(true, 'Message JJ Assistant...');
        setComposerNote(defaultNote);
        addBot('<p>No problem — I\'ve cancelled the transfer. I\'m still here if you need anything else.</p>', {
            tools: false,
            quickReplies: [
                { label: 'Where is my order?', prompt: 'Where is my order?' },
                { label: 'Talk to a human', prompt: 'I need to speak to a human' }
            ]
        });
        toast('Transfer cancelled');
    }

    function joinHuman() {
        if (state.transferTimer) window.clearTimeout(state.transferTimer);
        state.transferTimer = null;
        $('#transferCard')?.remove();
        hideWelcome();

        state.mode = 'human';
        setHeader({ name: 'Alex · Customer Support', status: 'Human agent · Online', dot: 'online', avatar: 'A', agent: true });
        setComposerEnabled(true, 'Message Alex...');
        setComposerNote('You are now chatting with a human support agent.');
        clearQuickReplies();

        const card = document.createElement('div');
        card.className = 'joined-card';
        card.setAttribute('role', 'status');
        card.innerHTML = `
            <div class="joined-icon">${ico('check')}</div>
            <div class="joined-info">
                <strong>Alex joined the chat</strong>
                <span>Human support agent · has read the conversation</span>
            </div>
        `;
        messages.append(card);
        hydrateIcons(card);
        scrollToBottom();
        toast('Alex joined the chat');

        later(() => {
            if (state.mode !== 'human') return;
            showTyping('Alex is typing', 'agent');
            later(() => {
                hideTyping();
                if (state.mode !== 'human') return;
                addMessage({
                    role: 'agent',
                    html: '<p>Hi Jamie, I\'m Alex. I\'ve read the conversation so far — let\'s pick this up together. Can you send a photo of the failed print?</p>'
                });
                setQuickReplies([
                    { label: 'Send a photo', action: 'focus-composer' },
                    { label: 'End chat', action: 'end-chat' }
                ]);
            }, 850);
        }, 650);
    }

    function showHumanUnavailable() {
        if (state.transferTimer) window.clearTimeout(state.transferTimer);
        state.transferTimer = null;
        $('#transferCard')?.remove();
        hideWelcome();

        state.mode = 'bot';
        state.transferUnavailable = false;
        setHeader(defaultHeader);
        setComposerEnabled(true, 'Ask another question...');
        setComposerNote('The automated assistant is still available.');
        addBot(humanUnavailableHTML(), {
            tools: false,
            quickReplies: [
                { label: 'Open help centre', action: 'faq' },
                { label: 'Ask another question', action: 'focus-composer' }
            ]
        });
        toast('No human agents are available right now');
    }

    function showOffline() {
        hideWelcome();
        state.mode = 'offline';
        clearQuickReplies();
        setHeader({ name: 'JJ Assistant', status: 'Support assistant unavailable', dot: 'offline', avatar: 'JJ', agent: false });
        setComposerEnabled(false, 'The support assistant is temporarily unavailable...');
        setComposerNote('Please try again shortly.');
        messages.innerHTML = offlineHTML();
        hydrateIcons(messages);
        scrollToBottom();
    }

    function retryAssistant() {
        resetChat();
        toast('Reconnected to JJ Assistant');
        addBot('<p>We\'re back — sorry about that. What can I help you with?</p>', {
            quickReplies: [
                { label: 'Where is my order?', prompt: 'Where is my order?' },
                { label: 'Which filament?', prompt: 'I\'m looking for black PLA filament' },
                { label: 'Talk to a human', prompt: 'I need to speak to a human' }
            ]
        });
    }

    function endChat() {
        resetChat();
        toast('Chat ended. Start a new conversation any time.');
    }

    /* ---------------------------------------------------------
       Cart
       --------------------------------------------------------- */

    function readStoredCart() {
        try {
            const stored = JSON.parse(localStorage.getItem('jj-cart') || '{}');
            return stored && typeof stored === 'object' ? stored : {};
        } catch {
            return {};
        }
    }

    function persistCart() {
        try {
            localStorage.setItem('jj-cart', JSON.stringify(state.cart));
        } catch {
            /* storage can be unavailable on some file:// setups */
        }
    }

    function cartCountValue() {
        return Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
    }

    function cartTotalValue() {
        return Object.entries(state.cart).reduce((total, [id, quantity]) => (
            total + (products[id]?.price || 0) * quantity
        ), 0);
    }

    function addToCart(id, quantity = 1) {
        const product = products[id];
        if (!product) return;

        state.cart[id] = (state.cart[id] || 0) + quantity;
        persistCart();
        renderCart();
        bumpCart();
        toast(`${quantity > 1 ? `${quantity} × ` : ''}${product.name} added to cart`);
    }

    function bumpCart() {
        cartCount.classList.remove('bump');
        void cartCount.offsetWidth;
        cartCount.classList.add('bump');
    }

    function renderCart() {
        const count = cartCountValue();
        cartCount.textContent = String(count);
        cartCount.hidden = count === 0;
        cartSubtotal.textContent = money(cartTotalValue());
        checkoutBtn.disabled = count === 0;

        const entries = Object.entries(state.cart);

        if (!entries.length) {
            cartBody.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty-icon">${ico('bag')}</div>
                    <strong>Your cart is empty</strong>
                    <p>Ask JJ Assistant for a filament recommendation to get started.</p>
                    <button class="btn btn-secondary" type="button" data-action="browse-filament">Browse filament</button>
                </div>
            `;
            return;
        }

        cartBody.innerHTML = entries.map(([id, quantity]) => {
            const product = products[id];
            if (!product) return '';
            return `
                <div class="cart-item">
                    <div class="mini-spool" aria-hidden="true">PLA</div>
                    <div class="cart-item-copy">
                        <strong>${product.name}</strong>
                        <span>${product.meta}</span>
                        <div class="cart-item-controls">
                            <button type="button" data-cart-action="dec" data-product="${id}" aria-label="Decrease ${product.name} quantity">${ico('minus')}</button>
                            <span>${quantity}</span>
                            <button type="button" data-cart-action="inc" data-product="${id}" aria-label="Increase ${product.name} quantity">${ico('plus')}</button>
                            <button type="button" data-cart-action="remove" data-product="${id}" aria-label="Remove ${product.name}">${ico('trash')}</button>
                        </div>
                    </div>
                    <span class="cart-item-price">${money(product.price * quantity)}</span>
                </div>
            `;
        }).join('');
    }

    function handleCartAction(action, id) {
        if (!state.cart[id]) return;

        if (action === 'inc') state.cart[id] += 1;
        if (action === 'dec') {
            state.cart[id] -= 1;
            if (state.cart[id] <= 0) delete state.cart[id];
        }
        if (action === 'remove') delete state.cart[id];

        persistCart();
        renderCart();
    }

    function openCart() {
        closeSidebar();
        renderCart();
        openModal(cartModal);
    }

    /* ---------------------------------------------------------
       Product detail
       --------------------------------------------------------- */

    function openProduct(id) {
        if (!products[id]) return;
        state.product = id;
        state.productQty = 1;
        renderProduct();
        openModal(productModal);
    }

    function renderProduct() {
        const product = products[state.product];
        if (!product) return;

        productModalVisual.innerHTML = `
            <span class="product-tag">${product.tag}</span>
            <div class="spool" style="--spool:${product.color}" aria-hidden="true"></div>
        `;
        productTag.textContent = 'John Jones filament';
        productTitle.textContent = product.name;
        productRating.innerHTML = `${starsHTML(product.rating)} <span>${product.rating} · ${product.reviews} reviews</span>`;
        productDescription.textContent = product.desc;
        productPrice.textContent = money(product.price);
        productQty.textContent = String(state.productQty);
        productStock.textContent = product.stock === 'Low stock'
            ? 'Low stock · 6 left · dispatched today'
            : 'In stock · dispatched today';
    }

    function changeProductQty(direction) {
        if (direction === 'up') state.productQty = Math.min(9, state.productQty + 1);
        if (direction === 'down') state.productQty = Math.max(1, state.productQty - 1);
        productQty.textContent = String(state.productQty);
    }

    /* ---------------------------------------------------------
       Help centre
       --------------------------------------------------------- */

    function renderFaq(query = '') {
        const value = query.trim().toLowerCase();
        const filtered = faqs.filter((item) => (
            `${item.cat} ${item.q} ${item.a}`.toLowerCase().includes(value)
        ));

        if (!filtered.length) {
            faqList.innerHTML = `
                <div class="faq-empty">
                    No articles match “${escapeHTML(query)}”. Try a different search or ask JJ Assistant.
                </div>
            `;
            return;
        }

        faqList.innerHTML = filtered.map((item, index) => `
            <details class="faq-item"${index === 0 && value ? ' open' : ''}>
                <summary><span class="faq-category">${item.cat}</span>${item.q}</summary>
                <div class="faq-answer">${item.a}</div>
            </details>
        `).join('');
    }

    function openFaq() {
        renderFaq(faqSearch.value);
        openModal(faqModal);
    }

    /* ---------------------------------------------------------
       Voice
       --------------------------------------------------------- */

    function openVoice() {
        if (state.mode === 'offline') {
            toast('The assistant is offline. Try again first.');
            return;
        }
        if (state.mode === 'transferring') {
            toast('A human agent is joining. Please wait a moment.');
            return;
        }

        stopVideo();
        state.voice.connected = false;
        state.voice.muted = false;
        state.voice.seconds = 0;
        state.voice.timer = null;
        state.voice.connectTimer = null;
        voiceStatus.textContent = 'Connecting securely…';
        callTimer.textContent = '00:00';
        muteBtn.classList.remove('is-muted');
        muteBtn.setAttribute('aria-pressed', 'false');
        muteBtn.innerHTML = ico('mic');
        voiceOrb.style.opacity = '0.72';
        openModal(voiceModal);

        state.voice.connectTimer = later(() => {
            state.voice.connectTimer = null;
            state.voice.connected = true;
            voiceStatus.textContent = 'Connected · ask me anything';
            voiceOrb.style.opacity = '1';
            state.voice.timer = every(() => {
                state.voice.seconds += 1;
                callTimer.textContent = formatDuration(state.voice.seconds);
            }, 1000);
        }, 1400);
    }

    function stopVoice({ announce = true } = {}) {
        const wasConnected = state.voice.connected;
        const seconds = state.voice.seconds;

        if (state.voice.connectTimer) window.clearTimeout(state.voice.connectTimer);
        if (state.voice.timer) window.clearInterval(state.voice.timer);
        state.voice.connectTimer = null;
        state.voice.timer = null;
        state.voice.connected = false;
        state.voice.muted = false;
        state.voice.seconds = 0;
        closeModal(voiceModal);

        if (announce && wasConnected && state.mode !== 'offline') {
            addMessage({
                role: 'bot',
                html: `<p>Voice call ended${seconds ? ` after ${formatDuration(seconds)}` : ''}. Would you like to continue by text?</p>`,
                tools: false
            });
            setQuickReplies([
                { label: 'Continue by text', action: 'focus-composer' },
                { label: 'Talk to a human', prompt: 'I need to speak to a human' }
            ]);
        }
    }

    function toggleMute() {
        if (!state.voice.connected) return;
        state.voice.muted = !state.voice.muted;
        muteBtn.classList.toggle('is-muted', state.voice.muted);
        muteBtn.setAttribute('aria-pressed', String(state.voice.muted));
        muteBtn.innerHTML = ico(state.voice.muted ? 'phone-off' : 'mic');
        muteBtn.setAttribute('aria-label', state.voice.muted ? 'Unmute microphone' : 'Mute microphone');
        voiceStatus.textContent = state.voice.muted ? 'Muted · still connected' : 'Connected · ask me anything';
        toast(state.voice.muted ? 'Microphone muted' : 'Microphone unmuted');
    }

    /* ---------------------------------------------------------
       Video
       --------------------------------------------------------- */

    function openVideo() {
        stopVoice({ announce: false });
        state.video.playing = false;
        state.video.progress = 0;
        if (state.video.timer) window.clearInterval(state.video.timer);
        state.video.timer = null;
        playBtn.innerHTML = ico('play');
        videoToggle.innerHTML = ico('play');
        videoProgress.style.width = '0%';
        videoTime.textContent = '0:00 / 1:42';
        openModal(videoModal);
    }

    function toggleVideo() {
        if (state.video.playing) {
            state.video.playing = false;
            if (state.video.timer) window.clearInterval(state.video.timer);
            state.video.timer = null;
            playBtn.innerHTML = ico('play');
            videoToggle.innerHTML = ico('play');
            videoToggle.setAttribute('aria-label', 'Play video');
            return;
        }

        state.video.playing = true;
        playBtn.innerHTML = ico('pause');
        videoToggle.innerHTML = ico('pause');
        videoToggle.setAttribute('aria-label', 'Pause video');

        state.video.timer = every(() => {
            state.video.progress = Math.min(100, state.video.progress + 1.5);
            videoProgress.style.width = `${state.video.progress}%`;
            const seconds = Math.round((state.video.progress / 100) * 102);
            videoTime.textContent = `${formatDuration(seconds)} / 1:42`;

            if (state.video.progress >= 100) {
                state.video.playing = false;
                window.clearInterval(state.video.timer);
                state.video.timer = null;
                playBtn.innerHTML = ico('play');
                videoToggle.innerHTML = ico('play');
                videoToggle.setAttribute('aria-label', 'Play video');
            }
        }, 500);
    }

    function stopVideo() {
        state.video.playing = false;
        state.video.progress = 0;
        if (state.video.timer) window.clearInterval(state.video.timer);
        state.video.timer = null;
    }

    /* ---------------------------------------------------------
       Modals
       --------------------------------------------------------- */

    function openModal(modal) {
        if (!modal) return;
        state.lastFocus = document.activeElement;
        closeAllModals(modal);
        modal.hidden = false;
        document.body.classList.add('modal-open');
        const focusable = modal.querySelector('button:not(:disabled), [href], input:not(:disabled), textarea:not(:disabled), summary');
        if (focusable) window.setTimeout(() => focusable.focus({ preventScroll: true }), 40);
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.hidden = true;
        if (!document.querySelector('.modal-backdrop:not([hidden])')) {
            document.body.classList.remove('modal-open');
        }
        if (state.lastFocus && document.contains(state.lastFocus)) {
            state.lastFocus.focus({ preventScroll: true });
        }
        state.lastFocus = null;
    }

    function closeAllModals(except = null) {
        $$('.modal-backdrop').forEach((modal) => {
            if (modal !== except) modal.hidden = true;
        });
        if (!except) document.body.classList.remove('modal-open');
    }

    function openSidebar() {
        if (!sidebar) return;
        sidebar.classList.add('is-open');
        if (sidebarScrim) sidebarScrim.hidden = false;
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('is-open');
        if (sidebarScrim) sidebarScrim.hidden = true;
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    }

    function openChatMenu() {
        chatMenu.hidden = false;
        chatMenuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeChatMenu() {
        chatMenu.hidden = true;
        chatMenuBtn.setAttribute('aria-expanded', 'false');
    }

    /* ---------------------------------------------------------
       Actions
       --------------------------------------------------------- */

    function handleAction(action, element) {
        switch (action) {
            case 'home':
                closeSidebar();
                setScenario('welcome');
                break;

            case 'shop':
                toast('The shop is outside this prototype. Use the product cards in chat to explore filament.');
                break;

            case 'track':
                startPrompt('Where is my order?');
                break;

            case 'account':
                toast('Signed in as Jamie Doyle · jamie@example.com');
                break;

            case 'new-chat':
                closeSidebar();
                setScenario('welcome');
                toast('New conversation started');
                break;

            case 'faq':
                closeSidebar();
                openFaq();
                break;

            case 'transfer':
                closeSidebar();
                startTransfer({ reason: 'Customer request' });
                break;

            case 'cancel-transfer':
                cancelTransfer();
                break;

            case 'retry':
                retryAssistant();
                break;

            case 'product':
                openProduct(element.dataset.product);
                break;

            case 'add-cart':
                addToCart(element.dataset.product);
                break;

            case 'video':
                openVideo();
                break;

            case 'download-transcript':
                closeChatMenu();
                downloadTranscript();
                break;

            case 'email-transcript':
                closeChatMenu();
                toast('Transcript sent to jamie@example.com');
                break;

            case 'report':
                closeChatMenu();
                toast('Thanks — a human will review this conversation.');
                break;

            case 'source':
                toast(`Source: ${element.dataset.source}`);
                break;

            case 'track-parcel':
                toast('Opening Royal Mail tracking for JJ-10482…');
                break;

            case 'start-return':
                startReturn();
                break;

            case 'email-label':
                toast('Prepaid return label sent to jamie@example.com');
                break;

            case 'focus-composer':
                focusComposer();
                break;

            case 'end-chat':
                endChat();
                break;

            case 'browse-filament':
                closeModal(cartModal);
                startPrompt('I\'m looking for black PLA filament');
                break;

            default:
                break;
        }
    }

    function startReturn() {
        addBot(`
            <p>I've started a return for <strong>Basic PLA</strong> from order <strong>JJ-10482</strong>.</p>
            <div class="answer-card">
                <div class="answer-head">
                    <div class="answer-head-icon">${ico('check')}</div>
                    <div>
                        <strong>Return RMA-8841 created</strong>
                        <span>Prepaid label by email · drop off within 14 days</span>
                    </div>
                </div>
                <div class="answer-body">
                    <p>Take the parcel to any Post Office. Keep the proof of postage until the refund appears.</p>
                </div>
            </div>
        `, {
            source: 'Returns policy · 30-day window',
            quickReplies: [
                { label: 'Email me the label', action: 'email-label' },
                { label: 'Talk to a human', prompt: 'I need to speak to a human' }
            ]
        });
        toast('Return started');
    }

    function focusComposer() {
        clearQuickReplies();
        messageInput.focus();
        messageInput.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        toast('Type your question below');
    }

    function downloadTranscript() {
        const transcript = [
            'John Jones Printers — support transcript',
            `Generated ${new Date().toLocaleString('en-GB')}`,
            '',
            ...Array.from(messages.children).map((element) => element.innerText.trim()).filter(Boolean)
        ].join('\n\n');

        const blob = new Blob([transcript], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jj-support-transcript.txt';
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        toast('Transcript downloaded');
    }

    /* ---------------------------------------------------------
       Feedback and attachments
       --------------------------------------------------------- */

    function handleFeedback(button) {
        const tools = button.closest('.msg-tools');
        if (!tools) return;

        const buttons = $$('[data-feedback]', tools);
        buttons.forEach((item) => {
            item.disabled = true;
            item.classList.remove('is-selected');
            item.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('is-selected');
        button.setAttribute('aria-pressed', 'true');

        const label = $('.feedback-label', tools);
        if (label) label.textContent = button.dataset.feedback === 'up' ? 'Thanks!' : 'Sorry';

        toast(button.dataset.feedback === 'up'
            ? 'Thanks for the feedback'
            : 'Thanks — we will use this to improve answers');
    }

    function renderAttachment() {
        if (!state.attachment) {
            attachmentPreview.hidden = true;
            attachmentPreview.innerHTML = '';
            return;
        }

        attachmentPreview.hidden = false;
        attachmentPreview.innerHTML = `
            ${ico('paperclip')}
            <strong>${escapeHTML(state.attachment.name)}</strong>
            <span>${formatBytes(state.attachment.size)}</span>
            <button type="button" data-remove-attachment aria-label="Remove attachment">${ico('x')}</button>
        `;
    }

    /* ---------------------------------------------------------
       Scenarios
       --------------------------------------------------------- */

    function resetChat() {
        clearAsync();
        hideTyping();
        closeAllModals();
        closeChatMenu();
        closeSidebar();

        state.mode = 'bot';
        state.welcome = true;
        state.attachment = null;
        state.product = null;
        state.productQty = 1;
        state.transferTimer = null;
        state.transferUnavailable = false;

        messages.innerHTML = welcomeHTML();
        hydrateIcons(messages);
        clearQuickReplies();
        renderAttachment();
        messageInput.value = '';
        autoResize();
        setHeader(defaultHeader);
        setComposerEnabled(true, 'Message JJ Assistant...');
        setComposerNote(defaultNote);
        updateComposerState();
        scrollToBottom();
    }

    function setScenario(name) {
        stopVoice({ announce: false });
        stopVideo();
        resetChat();

        switch (name) {
            case 'welcome':
                break;

            case 'chat':
                hideWelcome();
                addUser('I need help with an order I placed yesterday.');
                addBot('<p>I can help with that. I can see one recent order on your account: <strong>JJ-10482</strong>. Is that the one you mean?</p>', {
                    quickReplies: [
                        { label: 'Yes, order JJ-10482', prompt: 'Where is order JJ-10482?' },
                        { label: 'No, another order', prompt: 'I need help with a different order' },
                        { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                    ]
                });
                break;

            case 'products':
                hideWelcome();
                addUser('I\'m looking for black PLA filament. Do you have any in stock?');
                addBot(filamentAnswerHTML(), {
                    source: 'John Jones filament guide · updated today',
                    wide: true,
                    quickReplies: [
                        { label: 'Compare PLA and PLA+', prompt: 'Can you compare PLA and PLA+' },
                        { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                    ]
                });
                break;

            case 'no-answer':
                hideWelcome();
                addUser('My printer is showing error code E0427. What does it mean?');
                addBot(noAnswerHTML(), {
                    quickReplies: [
                        { label: 'Try rephrasing', action: 'focus-composer' },
                        { label: 'Search help centre', action: 'faq' },
                        { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                    ]
                });
                break;

            case 'transferring':
                hideWelcome();
                addUser('Could I speak to a human agent, please?');
                addMessage({ role: 'bot', html: '<p>Of course — I\'m connecting you with a member of the support team now.</p>', tools: false });
                later(() => startTransfer({ reason: 'Customer request' }), 500);
                break;

            case 'human-joined':
                hideWelcome();
                addUser('My prints keep failing halfway through.');
                addMessage({ role: 'bot', html: '<p>I\'m sorry to hear that. I\'ll pass you to Alex, who can look at the print settings with you.</p>', tools: false });
                later(joinHuman, 650);
                break;

            case 'humans-offline':
                hideWelcome();
                addUser('I need to speak to a human agent, please.');
                addMessage({ role: 'bot', html: '<p>I\'m sorry — no human agents are available right now. Human support hours are Monday to Friday, 09:00–17:00.</p>', tools: false });
                later(showHumanUnavailable, 650);
                break;

            case 'offline':
                showOffline();
                break;

            case 'voice':
                hideWelcome();
                addUser('I\'d like to ask about filament compatibility.');
                addMessage({ role: 'bot', html: '<p>Of course — let\'s talk it through. I\'m starting a voice call now.</p>', tools: false });
                later(openVoice, 600);
                break;

            case 'faq':
                openFaq();
                break;

            case 'address':
                hideWelcome();
                addUser('Can I change the delivery address on my order? It has already shipped.');
                addBot(addressAnswerHTML(), { tools: false });
                later(() => startTransfer({ reason: 'Delivery address change' }), 900);
                break;

            case 'returns':
                hideWelcome();
                addUser('I\'d like to return an item from order JJ-10482.');
                addBot(returnsAnswerHTML(), {
                    source: 'Returns policy · 30-day window',
                    quickReplies: [
                        { label: 'Start a return', action: 'start-return' },
                        { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                    ]
                });
                break;

            case 'video':
                hideWelcome();
                addUser('My print keeps failing halfway through.');
                addBot(troubleshootAnswerHTML(), {
                    source: 'Printer care guide · section 4',
                    quickReplies: [
                        { label: 'Play the video', action: 'video' },
                        { label: 'Talk to a human', prompt: 'I need to speak to a human' }
                    ]
                });
                later(openVideo, 650);
                break;

            default:
                break;
        }

        closeSidebar();
    }

    function renderPrototype() {
        if (!prototypeGrid) return;
        prototypeGrid.innerHTML = scenarios.map((scenario) => `
            <button class="prototype-tile" type="button" data-scenario="${scenario.id}">
                <span class="prototype-icon">${ico(scenario.icon)}</span>
                <strong>${scenario.title}</strong>
                <span>${scenario.desc}</span>
            </button>
        `).join('');
    }

    /* ---------------------------------------------------------
       Events
       --------------------------------------------------------- */

    function handleQuickReply(index) {
        const reply = state.quickReplies[index];
        if (!reply) return;

        if (reply.action === 'focus-composer') {
            focusComposer();
            return;
        }
        if (reply.action === 'faq') {
            openFaq();
            return;
        }
        if (reply.action === 'start-return') {
            startReturn();
            return;
        }
        if (reply.action === 'end-chat') {
            endChat();
            return;
        }
        if (reply.action === 'video') {
            openVideo();
            return;
        }
        if (reply.action === 'email-label') {
            toast('Prepaid return label sent to jamie@example.com');
            return;
        }

        sendUserMessage(reply.prompt || reply.label);
    }

    function bindEvents() {
        composer.addEventListener('submit', (event) => {
            event.preventDefault();
            sendUserMessage(messageInput.value);
        });

        messageInput.addEventListener('input', () => {
            autoResize();
            updateComposerState();
        });

        messageInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                if (!sendBtn.disabled) composer.requestSubmit();
            }
        });

        attachBtn.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', () => {
            const file = fileInput.files?.[0];
            if (!file) return;
            if (file.size > 10 * 1024 * 1024) {
                toast('Please choose a file smaller than 10 MB');
                fileInput.value = '';
                return;
            }
            state.attachment = { name: file.name, size: file.size };
            renderAttachment();
            updateComposerState();
            toast(`${file.name} attached`);
        });

        attachmentPreview.addEventListener('click', (event) => {
            if (event.target.closest('[data-remove-attachment]')) {
                state.attachment = null;
                fileInput.value = '';
                renderAttachment();
                updateComposerState();
            }
        });

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                if (sidebar?.classList.contains('is-open')) closeSidebar();
                else openSidebar();
            });
        }

        if (sidebarScrim) sidebarScrim.addEventListener('click', closeSidebar);

        const faqButton = $('#faqBtn');
        if (faqButton) faqButton.addEventListener('click', openFaq);

        const cartButton = $('#cartBtn');
        if (cartButton && cartButton.tagName === 'BUTTON') {
            cartButton.addEventListener('click', openCart);
        }
        $('#voiceBtn').addEventListener('click', openVoice);
        const prototypeButton = $('#prototypeBtn');
        if (prototypeButton) prototypeButton.addEventListener('click', () => openModal(prototypeModal));

        chatMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            if (chatMenu.hidden) openChatMenu();
            else closeChatMenu();
        });

        $('#faqSearch').addEventListener('input', (event) => {
            renderFaq(event.target.value);
        });

        $('#faqAsk').addEventListener('click', () => {
            closeModal(faqModal);
            focusComposer();
        });

        $('#checkoutBtn').addEventListener('click', () => {
            toast('Checkout is outside this prototype.');
        });

        $('#productAdd').addEventListener('click', () => {
            if (!state.product) return;
            addToCart(state.product, state.productQty);
            closeModal(productModal);
        });

        const resetPrototype = $('#resetPrototype');
        if (resetPrototype) {
            resetPrototype.addEventListener('click', () => {
                closeModal(prototypeModal);
                setScenario('welcome');
                toast('Prototype reset to welcome');
            });
        }

        $('#muteBtn').addEventListener('click', toggleMute);
        $('#endCallBtn').addEventListener('click', () => stopVoice());
        $('#playBtn').addEventListener('click', toggleVideo);
        $('#videoToggle').addEventListener('click', toggleVideo);

        voiceModal.querySelector('[data-close]').addEventListener('click', (event) => {
            event.stopPropagation();
            stopVoice({ announce: false });
        });

        videoModal.querySelector('[data-close]').addEventListener('click', (event) => {
            event.stopPropagation();
            stopVideo();
            closeModal(videoModal);
        });

        $$('.modal-backdrop').forEach((modal) => {
            modal.addEventListener('click', (event) => {
                if (event.target !== modal) return;
                if (modal === voiceModal) {
                    stopVoice({ announce: false });
                    return;
                }
                if (modal === videoModal) stopVideo();
                closeModal(modal);
            });
        });

        messages.addEventListener('submit', (event) => {
            if (!event.target.matches('[data-form="email"]')) return;
            event.preventDefault();
            const form = event.target;
            const email = form.querySelector('input')?.value.trim();
            if (!email) return;

            form.outerHTML = `<p>Thanks — I've passed <strong>${escapeHTML(email)}</strong> to the support team. They'll reply within 24 hours.</p>`;
            hydrateIcons(messages);
            toast('Email request sent');
        });

        document.addEventListener('click', (event) => {
            const close = event.target.closest('[data-close]');
            if (close) {
                const modal = close.closest('.modal-backdrop');
                if (modal) {
                    if (modal === voiceModal) stopVoice({ announce: false });
                    if (modal === videoModal) stopVideo();
                    closeModal(modal);
                }
                return;
            }

            const seed = event.target.closest('[data-seed-message]');
            if (seed) {
                sendSeedMessage(seed.dataset.seedMessage);
                return;
            }

            const quickReply = event.target.closest('[data-quick-index]');
            if (quickReply) {
                handleQuickReply(Number(quickReply.dataset.quickIndex));
                return;
            }

            const feedback = event.target.closest('[data-feedback]');
            if (feedback) {
                handleFeedback(feedback);
                return;
            }

            const qty = event.target.closest('[data-qty]');
            if (qty) {
                changeProductQty(qty.dataset.qty);
                return;
            }

            const cartAction = event.target.closest('[data-cart-action]');
            if (cartAction) {
                handleCartAction(cartAction.dataset.cartAction, cartAction.dataset.product);
                return;
            }

            const scenario = event.target.closest('[data-scenario]');
            if (scenario) {
                closeModal(prototypeModal);
                setScenario(scenario.dataset.scenario);
                return;
            }

            const prompt = event.target.closest('[data-prompt]');
            if (prompt) {
                startPrompt(prompt.dataset.prompt);
                return;
            }

            const action = event.target.closest('[data-action]');
            if (action) {
                event.preventDefault();
                handleAction(action.dataset.action, action);
                return;
            }

            if (!event.target.closest('.chat-menu-wrap')) closeChatMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') return;

            const openModal = Array.from($$('.modal-backdrop:not([hidden])')).pop();
            if (openModal) {
                if (openModal === voiceModal) {
                    stopVoice({ announce: false });
                    return;
                }
                if (openModal === videoModal) stopVideo();
                closeModal(openModal);
                return;
            }

            if (!chatMenu.hidden) {
                closeChatMenu();
                return;
            }

            if (sidebar?.classList.contains('is-open')) closeSidebar();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) closeSidebar();
        });
    }

    /* ---------------------------------------------------------
       Init
       --------------------------------------------------------- */

    function init() {
        hydrateIcons();
        bindEvents();
        renderCart();
        renderFaq();
        renderPrototype();

        const requested = new URLSearchParams(window.location.search).get('scenario');
        const scenario = scenarios.some((item) => item.id === requested) ? requested : 'welcome';
        setScenario(scenario);
    }

    init();
})();
