const navbar = document.getElementById('navbar')

const linksAndTitles = {
    'index.html': 'Home',
    'gallery.html': 'Gallery',
    'log.html': 'Log',
}

for (const link in linksAndTitles) {
    const title = linksAndTitles[link]
    const linkElement = document.createElement('a')
    linkElement.href = link
    linkElement.textContent = title
    navbar.append(linkElement)
}