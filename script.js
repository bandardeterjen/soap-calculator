document.addEventListener('DOMContentLoaded', () => {
    const addOilButton = document.getElementById('add-oil');
    const calculateButton = document.getElementById('calculate');
    const oilInputsContainer = document.getElementById('oil-inputs');
    const lyeResult = document.getElementById('lye-result');

    // Add another oil entry
    addOilButton.addEventListener('click', () => {
        const newOilEntry = document.createElement('div');
        newOilEntry.classList.add('oil-entry');

        newOilEntry.innerHTML = `
            <label for="oil">Oil Type:</label>
            <select class="oil-type">
                <option value="0.136">Almond (Sweet)</option>
                    <option value="0.135">Apricot kernel</option>
                    <option value="0.136">Arachis</option>
                    <option value="0.133">Avocado</option>
                    <option value="0.175">Babassu</option>
                    <option value="0.1405">Beef Tallow</option>
                    <option value="0.136">Borage Oil</option>
                    <option value="0.175">Brazil Nut Oil</option>
                    <option value="0.1619">Butterfat (cow)</option>
                    <option value="0.1672">Butterfat (goat)</option>
                    <option value="0.136">Camelia oil</option>
                    <option value="0.1286">Castor</option>
                    <option value="0.1389">Chicken fat</option>
                    <option value="0.135">Chinese Bean</option>
                    <option value="0.137">Cocoa Butter</option>
                    <option value="0.190">Coconut (refined)</option>
                    <option value="0.1946">Coconut (virgin)</option>
                    <option value="0.1326">Cod Liver Oil</option>
                    <option value="0.130">Coffee Seed Oil</option>
                    <option value="0.124">Colza</option>
                    <option value="0.136">Corn (Maize)</option>
                    <option value="0.1386">Cottonseed</option>
                    <option value="0.1379">Deer Tallow</option>
                    <option value="0.136">Earthnut</option>
                    <option value="0.135">Emu oil</option>
					<option value="0.136">Evening Primrose</option>
                    <option value="0.1357">Flaxseed</option>
                    <option value="0.133">Gigely Tree</option>
                    <option value="0.1383">Goat Tallow</option>
                    <option value="0.1369">Goose Fat</option>
                    <option value="0.1265">Grapeseed</option>
                    <option value="0.123">Grapefruit Seed Oil</option>
                    <option value="0.1356">Hazelnut</option>
                    <option value="0.1345">Hemp Seed</option>
                    <option value="0.136">Herring Oil</option>
                    <option value="0.136">Illippe Butter</option>
                    <option value="0.069">Jojoba</option>
                    <option value="0.137">Kapok</option>
                    <option value="0.136">Katchung</option>
                    <option value="0.134">Kokum Butter</option>
                    <option value="0.135">Kukui Nut</option>
                    <option value="0.138">Lard</option>
					<option value="0.1357">Linseed</option>
                    <option value="0.134">Loccu</option>
                    <option value="0.139">Macadamia Nut</option>
                    <option value="0.135">Mango Butter</option>
                    <option value="0.140">Mink Oil</option>
                    <option value="0.136">Moringa</option>
                    <option value="0.1241">Mustard Seed Oil</option>
                    <option value="0.069">Myrtle oil</option>
                    <option value="0.1359">Neat’s Foot Oil</option>
                    <option value="0.1387">Neem</option>
                    <option value="0.1355">Niger Seed Oil</option>
                    <option value="0.116">Nutmeg Butter</option>
                    <option value="0.134">Olive Oil</option>
                    <option value="0.185">Olive Butter:</option>
                    <option value="0.156">Palm Kernel</option>
                    <option value="0.141">Palm</option>
                    <option value=" 0.136">Peanut</option>
					<option value="0.1369">Perilla</option>
                    <option value="0.135">Pistachio Oil</option>
                    <option value="0.1383">Poppy Seed Oil</option>
                    <option value="0.138">Pork Tallow</option>
                    <option value="0.1331">Pumpkin Seed</option>
                    <option value="0.124">Ramic</option>
                    <option value="0.124">Rape Seed (Canola)</option>
                    <option value="0.128">Rice Bran</option>
                    <option value="0.1286">Ricinus</option>
                    <option value="0.136">Safflower</option>
                    <option value="0.135">Sardine Oil</option>
                    <option value="0.133">Sesame Seed</option>
                    <option value="0.134">Sunflower</option>
                    <option value="0.128">Shea (Karite) Butter</option>
                    <option value="0.1383">Sheeps Tallow</option>
                    <option value="0.135">Soybean</option>
                    <option value="0.134">Sunflower</option>
					<option value="0.1377">Tung</option>
                    <option value="0.136">Vegetable Shortening</option>
                    <option value="0.139">Venison Fat</option>
                    <option value="0.1353">Walnut</option>
                    <option value="0.131">Wheatgerm</option>
                    <option value="0.069">Beeswax</option>
                    <option value="0.069">Carnauba Wax</option>
                    <option value="0.0741">Lanolin</option>
            </select>
            <label for="weight">Weight (grams):</label>
            <input type="number" class="oil-weight" placeholder="Enter weight">
        `;

        oilInputsContainer.appendChild(newOilEntry);
    });

    // Calculate lye
    calculateButton.addEventListener('click', () => {
        let totalLye = 0;

        const oilEntries = document.querySelectorAll('.oil-entry');
        oilEntries.forEach(entry => {
            const oilType = entry.querySelector('.oil-type').value;
            const oilWeight = entry.querySelector('.oil-weight').value;

            if (oilWeight > 0) {
                totalLye += parseFloat(oilType) * parseFloat(oilWeight);
            }
        });

        lyeResult.textContent = `${totalLye.toFixed(2)} g`;
    });
});
