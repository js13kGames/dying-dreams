

// Tileset
const TILESET_BLOCK_1 = [ 
    0,
    0b100101,
    0b000110,
    0b011011
];
const TILESET_BLOCK_2 = [ 
    0,
    0b100101,
    0b111001,
    -1
];
const TILESET_BLOCK_3 = [ 
    0,
    0b010101,
    0b101010,
    -1
];
const TILESET_BLOCK_4 = [ 
    0,
    0b100101,
    0b111001,
    0b011011
];
const TILESET_BLOCK_5 = [ 
    0,
    0b100101,
    0b111001,
    0b000110
];
const TILESET_BLOCK_6 = [ 
    0,
    -1,
    0b000110,
    0b011011
];
const TILESET_BLOCK_7 = [ 
    0,
    0b100100,
    0b111001,
    -1
];


// Figures
const FIGURE_BLOCK = [ 
    0,
    0b101011,
    0b111111,
    -1
];


// Flame
const FLAME_1 = [

    0,
    0b110100,
    0b111000,
    -1
];
const FLAME_2 = [

    0,
    0b111101,
    0b111000,
    -1
];



// TODO: Lines 3-6 could be filled with... well, fill. Would save some bytes
export const PALETTE1 = [

    // Line 1
    TILESET_BLOCK_1, TILESET_BLOCK_1, TILESET_BLOCK_1, TILESET_BLOCK_2, 
    TILESET_BLOCK_5, TILESET_BLOCK_4, TILESET_BLOCK_6, TILESET_BLOCK_3, 
    TILESET_BLOCK_7, TILESET_BLOCK_1,
    // Line 2
    TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_2, 
    TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_6, TILESET_BLOCK_3,  
    TILESET_BLOCK_7, TILESET_BLOCK_1,

    // Line 3
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK,

    // Line 4
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK,

    // Line 5
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FLAME_1, FLAME_1,

    // Line 6
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FLAME_2, FLAME_1,
];
