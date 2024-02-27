// get all sections under .items
document.querySelectorAll('.items section').forEach((section) => {
    section.onclick = (e) => {
        document.getElementById('dialog').style.display = 'block';

        // const src = section.querySelector('img').src;
      //  const src = e.currentTarget.querySelector('img').src;
        //console.log(src);
        document.querySelector('#dialog-content img').src = 
        e.currentTarget.querySelector('img').src;

        const detailsSection = document.getElementById('dialog-details');
        detailsSection.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.innerHTML = section.querySelector('h3').innerHTML;
        detailsSection.append(h3);

        const ps = section.querySelectorAll('p');

        ps.forEach((p) => {
            const newP = document.createElement('p');
            newP.innerHTML = p.innerHTML;
            detailsSection.append(newP);
        });

        // const p = document.createElement('p');
        // p.innerHTML = section.querySelector('p').innerHTML;
        // detailsSection.append(p);
    };
});

document.getElementById('dialog-close').onclick = () => {
    document.getElementById('dialog').style.display = 'none';
};