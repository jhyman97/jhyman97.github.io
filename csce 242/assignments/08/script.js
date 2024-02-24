let counter = 0;

const advertisement = () => {
    const section = document.querySelector('#txt-advertisement');
    const adText = [
        'The quality of our images are pristine',
        'Each image has been handpicked by our passionate employees',
        'We utilize top quality cameras in order to create these photos',
        'Different resolutions are available to suit your needs',
        'From lakes to mountains, we capture all the perfect landscapes'
    ];
    section.innerHTML = adText[counter % adText.length];
    ++counter;
};

const showImages = () => {
    const imagesSection = document.getElementById('images');

    let imagesAttributionsPairs = [];
    imagesAttributionsPairs['./images/mountain-lake.jpg'] = '<a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a>';
    imagesAttributionsPairs['./images/golden.jpg'] = '<a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>';
    imagesAttributionsPairs['./images/garden.jpg'] = '<a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>';
    imagesAttributionsPairs['./images/small-house.jpg'] = '<a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>';
    imagesAttributionsPairs['./images/snow.jpg'] = '<a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>';

    for(let i in imagesAttributionsPairs) {
        const img = document.createElement('img');
        const p = document.createElement('p');
        img.src = i;
        p.innerHTML = imagesAttributionsPairs[i] + ' on Freepik';
        imagesSection.append(img);
        imagesSection.append(p);
    }
};

showImages();
advertisement();
setInterval(advertisement, 2000);