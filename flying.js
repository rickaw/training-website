const imageSources = [
    'static/airfield1.jpeg',
    'static/bflu1.jpeg',
    'static/bhai1.jpeg',
    'static/bhai2.jpeg',
    'static/bhai3.jpeg',
    'static/bhai4.jpeg',
    'static/cockpit1.jpeg',
]

const createListElementForImage = (imageSource) => {
    const li = document.createElement('li')
    const imageElement = document.createElement('img')
    li.append(imageElement)
    imageElement.src = imageSource
    imageElement.alt = imageSource
    return li
}

const listElementsForImages = imageSources.map(imageSource => createListElementForImage(imageSource))

const flyingGallery = document.getElementById('flyingGallery')
flyingGallery.append(...listElementsForImages)
