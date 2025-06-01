// Smooth scroll for year headers
const yearHeaders = document.querySelectorAll('.year-section h2');
yearHeaders.forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
        header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Tooltip for project links
const projectLinks = document.querySelectorAll('.year-section a');
projectLinks.forEach(link => {
    link.title = 'Click to view project';
    link.addEventListener('mousedown', () => {
        link.classList.add('active-link');
    });
    link.addEventListener('mouseup', () => {
        setTimeout(() => link.classList.remove('active-link'), 150);
    });
});

// Back to Top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑ Back to Top';
backToTopBtn.id = 'backToTopBtn';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Project data for popups
const projectData = {
    // Year 3
    'tomorrows-web': {
        title: 'Tomorrows Web Website',
        desc: 'A modern web project exploring the future of web technologies, design, and interactivity.',
        images: ['https://lh3.googleusercontent.com/d/'],
        link: '#'
    },
    'physical-computing': {
        title: 'Physical Computing Portfolio',
        desc: 'A portfolio of hands-on projects integrating hardware and software for creative solutions.',
        images: ['https://lh3.googleusercontent.com/d/'],
        link: '#'
    },
    'creative-incubator': {
        title: 'Creative Incubator Project',
        desc: 'A collaborative project fostering innovation and creativity in a team environment.',
        images: ['https://lh3.googleusercontent.com/d/19lZhaRQUC0k7wvOHgSRXTzF693Wv-7zS'],
        link: 'https://ari-me.itch.io/ecocommand'
    },
    'ml-final': {
        title: 'Machine Learning Final Experiment',
        desc: 'A comprehensive experiment applying machine learning techniques to real-world data.',
        images: ['https://lh3.googleusercontent.com/d/19b7jFM_YC9kTAuOIcKWg5-SCK5kmCjyJ'],
        link: 'https://docs.google.com/document/d/1TbHRpF2RRSXVKCa4GnVLZuqrkXbzL0Vj/edit?usp=sharing&ouid=111713133259899129903&rtpof=true&sd=true'
    },
    'ml-small': {
        title: 'Machine Learning Small Experiments',
        desc: 'A series of small-scale experiments exploring various ML algorithms and datasets.',
        images: ['https://lh3.googleusercontent.com/d/17Ne6LH9H88Da3lFqOuPAG9wZa4R4ZhhP'],
        link: 'https://docs.google.com/document/d/1uPjJYaIRQfao8hszPOJjrlVIH1xKHeBw/edit?usp=sharing&ouid=111713133259899129903&rtpof=true&sd=true'
    },
    'research-viva': {
        title: 'Research Project (Research and Presentation VIVA)',
        desc: 'A research project culminating in a presentation and VIVA assessment.',
        images: ['https://lh3.googleusercontent.com/d/1maqQE2FkcpqiBel5UigX51c4r_ChNpj4'],
        link: 'https://drive.google.com/drive/folders/1xBagmm-_7nDHom79iWY0J48N6tiRcGm0?usp=sharing'
    },
    'cyber-security': {
        title: 'Cyber Security Report',
        desc: 'A detailed report on cyber security concepts, threats, and mitigation strategies.',
        images: ['https://lh3.googleusercontent.com/d/15V8xKmblGVXMRi_Num8QRu54sJ0sTTge'],
        link: 'https://docs.google.com/document/d/19Jdmf9lPAx4M0BLxVEs1W1fmzisjX5MEh4qqruGo8Ls/edit?usp=sharing'
    },

    // Year 2
    'tech-assessment': {
        title: 'Emerging Technology 2nd Assessment (Data Visualization and Chatbot AI)',
        desc: 'A project combining data visualization and chatbot AI to solve real-world problems.',
        images: ['https://lh3.googleusercontent.com/d/1pKp2PsPmN0qR9_k3LkPsXi06FwD0-yky'],
        link: 'https://sway.cloud.microsoft/k6zLrII5K1MUVlkz?ref=Link'
    },
    'mobile-multi': {
        title: 'Mobile App Development Multi-View',
        desc: 'A health app project consisting of multiple views and navigation patterns.',
        images: ['https://lh3.googleusercontent.com/d/1ta318h5TTAlXOuWnSwfh1St2SmCRU4o8'],
        link: 'https://drive.google.com/drive/folders/1f5rY0E26tAdLkgmq1VAptshfcRwnv8X3?usp=sharing'
    },
    'mobile-single': {
        title: 'Mobile App Development Single-View',
        desc: 'A single-view mobile BMI calculator app.',
        images: ['https://lh3.googleusercontent.com/d/1OadeOt0-c9qa9izIWCl415vnB5wp25Qg'],
        link: 'https://drive.google.com/drive/folders/1lensHTA692HtMADC4EPByUrx7VdoQywZ?usp=sharing'
    },
    'tkinter': {
        title: 'Advanced Programming Tkinter',
        desc: 'A programming project using Python Tkinter for GUI development.',
        images: ['https://lh3.googleusercontent.com/d/1MvwLCyLmzWhwuMdSOwE1CpW-Xcltor_U'],
        link: 'https://docs.google.com/document/d/13dv7hAHodVu-y9WZWhsHqVcCS942qdNh/edit?usp=sharing&ouid=111713133259899129903&rtpof=true&sd=true'
    },
    'game-dev': {
        title: 'Game Development',
        desc: 'A game development project. A rhythm game was made.',
        images: ['https://lh3.googleusercontent.com/d/1RGc9MBGZh2OPpOSyIuGEt-VO3QpCMqns'],
        link: 'https://annziyo.itch.io/precussion-hero-x'
    },
    'responsive-web': {
        title: 'Responsive Website',
        desc: 'A simple website project for showcase responsive website design',
        images: ['https://lh3.googleusercontent.com/d/10XSxOXzzbz3Y9rfK8L6eBfVqWgxldZq1'],
        link: 'https://drive.google.com/drive/folders/1ZyP-Y4NffgV9i8wUi2GDixoGVST3L-e9?usp=sharing'
    },

    // Year 1
    'makey-makey': {
        title: 'Makey Makey Project',
        desc: 'A creative project using the Makey Makey invention kit. Made a dance exercise game',
        images: ['https://lh3.googleusercontent.com/d/1HqS2GYP0u56LE_YepN1JJ6wy8NqXUVon'],
        link: 'https://drive.google.com/drive/folders/1WMzinXep-3Tm5rw9HGebXoZ8HV4kSsYN?usp=sharing'
    },
    'web-prog': {
        title: 'Web Programming Website Project',
        desc: 'A foundational web programming project covering HTML, CSS, and JavaScript.',
        images: ['https://lh3.googleusercontent.com/d/1yrfYtLTc6OIthv5t2wLtvpF4jvVdtHIb'],
        link: 'https://drive.google.com/drive/folders/1xuGWV35-IYyAOmIgF35OthrO7khggkzm?usp=sharing'
    },
    'ux-design': {
        title: 'UX Design Designed Project (Mobile App Design)',
        desc: 'A UX design project focused on mobile app user experience and interface.',
        images: ['https://lh3.googleusercontent.com/d/13QM813WCbqrf-UKuuzchZDj16L7c5DuW'],
        link: 'https://drive.google.com/drive/folders/1XcdLaXRkylGWr_0vcoU878kA4ceZZ0q5?usp=sharing'
    },
    'storytelling': {
        title: 'Digital Storytelling Portfolio',
        desc: 'A digital storytelling portfolio using Microsoft Sway.',
        images: ['https://lh3.googleusercontent.com/d/146MV-y00YrgFhQ_gtPp7TtlDITQ2PVuz'],
        link: 'https://sway.cloud.microsoft/tiH7SsueFW5AAqZ5?ref=Link'
    },
    'visual-design': {
        title: 'Visual Design Portfolio',
        desc: 'Sway portfolio showcasing visual design skills.',
        images: ['https://lh3.googleusercontent.com/d/1XTHZp6tMHYIbtt8JF2rU_Cv5bKVSLeJK'],
        link: 'https://sway.cloud.microsoft/yNJBxvezQCz0uvkN?ref=Link'
    },
    'vending-machine': {
        title: 'Intro to Programming Vending Machine',
        desc: 'A programming project simulating a vending machine system.',
        images: ['https://lh3.googleusercontent.com/d/1A1PUjzMEIoNH8vdKL-LYKKTJtHeXcbgD'],
        link: 'https://drive.google.com/drive/folders/1DtchJZ-BbYGzjnIKG0RAw_5kPzRkAto5?usp=sharing'
    },
    
};

// Popup logic
const popupOverlay = document.getElementById('projectPopupOverlay');
const popup = document.getElementById('projectPopup');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const popupMedia = document.getElementById('popupMedia');
const popupDriveLink = document.getElementById('popupDriveLink');
const popupCloseBtn = document.getElementById('popupCloseBtn');

function openProjectPopup(projectKey) {
    const data = projectData[projectKey];
    if (!data) return;
    popupTitle.textContent = data.title;
    popupDesc.textContent = data.desc;
    popupMedia.innerHTML = '';
    if (data.video) {
        const vid = document.createElement('video');
        vid.src = data.video;
        vid.controls = true;
        popupMedia.appendChild(vid);
    }
    if (data.images && data.images.length) {
        data.images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = data.title + ' image';
            popupMedia.appendChild(img);
        });
    }
    popupDriveLink.href = data.link;
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectPopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Attach event listeners to project links (avoid redeclaration)
const popupProjectLinks = document.querySelectorAll('.project-link');
popupProjectLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const key = link.getAttribute('data-project');
        openProjectPopup(key);
    });
});
popupCloseBtn.addEventListener('click', closeProjectPopup);
popupOverlay.addEventListener('click', e => {
    if (e.target === popupOverlay) closeProjectPopup();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectPopup();
});
