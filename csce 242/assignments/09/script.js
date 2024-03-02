class Character {
    constructor(name, position, type, species, birthdate, region, desc, image) {
        this.name = name;
        this.position = position;
        this.type = type;
        this.species = species;
        this.birthdate = birthdate;
        this.region = region;
        this.desc = desc;
        this.image = image;
    }

    get section() {
        const section = document.createElement('section');
        section.classList.add('character');
        section.classList.add('col-1-of-4');
        section.classList.add('preview-flex');

        const h3 = document.createElement('h3');
        h3.innerHTML = this.name;
        section.append(h3);

        const img = document.createElement('img');
        img.src = this.image;
        img.classList.add('img-preview');
        section.append(img);

        section.onclick = this.expandedSection.bind(this);

        return section;
    }

    expandedSection(e) {
        document.getElementById('dialog').style.display = 'block';

        const characterDetails = document.getElementById('dialog-details');
        characterDetails.innerHTML = '';
        characterDetails.append(this.fullName(this.name));
        characterDetails.append(this.attribute('Position', this.position));
        characterDetails.append(this.attribute('Type', this.type));
        characterDetails.append(this.attribute('Species', this.species));
        characterDetails.append(this.attribute('Birthdate', this.birthdate));
        characterDetails.append(this.attribute('Region', this.region));
        characterDetails.append(this.description(this.desc));

        const modalImage = document.querySelector('#dialog-content img');
        modalImage.src = e.currentTarget.querySelector('img').src;
        modalImage.width = 300;
    }

    fullName(name) {
        const nameTitlePairs = new Map([
            ['Hwei', 'the Visionary'],
            ['Seraphine', 'the Starry-Eyed Songstress'],
            ['Smolder', 'the Fiery Fledgling'],
            ['Naafiri', 'the Hound of a Hundred Bites']
        ]);
        const h2 = document.createElement('h2');
        h2.innerHTML = name + ', ' + nameTitlePairs.get(name);
        return h2;
    }

    attribute(attr, info) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${attr}:</strong> ${info}`;
        return p;
    }

    description(info) {
        // return document.createElement('p').innerHTML = info;
        const p = document.createElement('p');
        p.innerHTML = info;
        return p;
    }

}

const characters = [];
characters.push(new Character('Hwei', 'Middle', 'Artillery Mage', 'Human', '962 AN - 967 AN (approx. 30 - 35 years old)', 'Ionia',
                'Hwei is a brooding painter who creates brilliant art in order to confront Ionia\'s criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories of his temple\'s massacre. Hwei seeks to understand this light and dark, which drives him inevitably toward the artist who unraveled him. With paintbrush and palette, Hwei shapes endless possibilities as he draws ever closer to earning closure or embracing despair.',
                './images/hwei.jpg'));
characters.push(new Character('Seraphine', 'Support/Middle', 'Enchanter', 'Human', '979 AN (18 years old)', 'Piltover',
                'Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She performs for the sister cities to remind their citizens that they\'re not alone, that they\'re stronger together, and that, in her eyes, their potential is limitless.',
                './images/seraphine.jpg'));
characters.push(new Character('Smolder', 'Bottom', 'Marksman', 'Dragon', 'Earlier than 977 AN (at least 20 years old)', 'Camavor',
                'Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to practice his burgeoning abilities. Though he\'s still a fledgling, his skills are nothing to sneeze at, easily setting fire to anything that burns.',
                './images/smolder.jpg'));
characters.push(new Character('Naafiri', 'Middle', 'Assassin', 'Darkin', '5000 BN - 2530 BN (approx. 3528 - 5998 years old)', 'Shurima',
                'Across the sands of Shurima, a chorus of howls rings out. It is the call of the dune hounds, voracious predators who form packs and compete for the right to hunt in these barren lands. Among them, one pack stands above all, for they are driven not only by canine instincts, but by the ancient power of the Darkin.',
                './images/naafiri.jpg'));

characters.forEach((character) => {
    document.getElementById('main').append(character.section);
});

document.getElementById('dialog-close').onclick = () => {
    document.getElementById('dialog').style.display = 'none';
};