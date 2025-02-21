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
                <option value="0.134">Olive Oil</option>
                <option value="0.136">Coconut Oil</option>
                <option value="0.139">Palm Oil</option>
                <option value="0.132">Castor Oil</option>
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
