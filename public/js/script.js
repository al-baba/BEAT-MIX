// Drum Arrays should all have a length of 16 and be filled with false
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

//
function getDrumArrayByName(name) {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

// function called toggleDrum 

function toggleDrum(drumArrayName, index) {
    const drumString = getDrumArrayByName(drumArrayName);
    if (!drumString || index > 15 || index < 0) {
        return;
    } 
    drumString[index] = !drumString[index];
};   


// function named clear 

function clear(drumArray) {
    const drumString = getDrumArrayByName(drumArray);
    if (drumString) {
        drumString.fill(false);
    }
};


// function named invert

function invert(drumArray) {
    const drumString = getDrumArrayByName(drumArray);
    if (!drumString) {
        return;
    }
    for (let i =0; i < drumString.length; i++) {
        drumString[i] = !drumString[i];
    }
};

// bonus function to play multiple synthesizer tones at once

function getNeighborPads(x, y, size) {
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return neighborPads;
    }
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >=0 && val < size;
        })
    })
}