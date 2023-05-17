const LINKS_AND_TITLES = {
    'index.html': 'Home',
    'gallery.html': 'Gallery',
    'log.html': 'Log',
}

const navbar = document.getElementById('navbar')

for (const link in LINKS_AND_TITLES) {
    const title = LINKS_AND_TITLES[link]
    const linkElement = document.createElement('a')
    linkElement.href = link
    linkElement.textContent = title
    navbar.append(linkElement)
}