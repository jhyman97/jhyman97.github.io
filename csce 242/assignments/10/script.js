const getHousePlans = async() => {
    try {
        return (await fetch('https://portiaportia.github.io/json/house-plans.json')).json();
    } catch (error) {
        console.log(error);
    }
};

const showHousePlans = async() => {
    const housePlans = await getHousePlans();

    housePlans.forEach((housePlan) => {
        const allHPsSection = document.getElementById('house-plans-section');
        const housePlanSection = document.createElement('section');
        housePlanSection.classList.add('house-plan');
        allHPsSection.append(housePlanSection);

        // title
        const h3 = document.createElement('h3');
        h3.innerHTML = housePlan.name;
        housePlanSection.append(h3);

        // house picture + features
        const previewSection = document.createElement('section');
        previewSection.classList.add('preview-section');

        // house picture within preview section
        const housePic = document.createElement('img');
        housePic.classList.add('house-pic');
        housePic.src = 'https://portiaportia.github.io/json/images/house-plans/' + housePlan.main_image;
        previewSection.append(housePic);

        // house description/features within preview section
        const houseDesc = document.createElement('section');
        houseDesc.classList.add('house-desc');
        houseDesc.append(printLabel('Size', `${housePlan.size} square feet`));
        houseDesc.append(printLabel('Bedrooms', housePlan.bedrooms));
        houseDesc.append(printLabel('Bathrooms', housePlan.bathrooms));
        houseDesc.append(printFeatures(housePlan.features));
        previewSection.append(houseDesc);

        // section to hold floor plans
        const floorPlans = document.createElement('section');
        floorPlans.classList.add('floor-plan-section');

        // floor plans
        housePlan.floor_plans.forEach((floorPlan) => {
            const floorPlanSection = document.createElement('section');
            floorPlanSection.classList.add('floor-plan');
            
            const h4 = document.createElement('h4');
            h4.innerHTML = floorPlan.name;
            floorPlanSection.append(h4);

            const floorPlanImg = document.createElement('img');
            floorPlanImg.src = 'https://portiaportia.github.io/json/images/house-plans/' + floorPlan.image;
            floorPlanSection.append(floorPlanImg);

            floorPlans.append(floorPlanSection);

        });

        // append preview section
        housePlanSection.append(previewSection);
        // append floor plans
        housePlanSection.append(floorPlans);
    });
    
};

const printLabel = (label, info) => {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${label}:</strong> ${info}`;
    return p;
};

const printFeatures = (features) => {
    const p = document.createElement('p');
    features.forEach((feature) => {
        p.innerHTML += `* ${feature} `;
    });
    return p;
};

showHousePlans();