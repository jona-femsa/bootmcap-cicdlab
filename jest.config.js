module.exports = {
  preset: 'react-native',
  "setupFiles": ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    '\\.png$': 'jest-transform-stub',
    '\\.svg$': 'jest-transform-stub',  // Si también usas SVG
    '\\.jpg$': 'jest-transform-stub',  // Para imágenes JPG
    '\\.jpeg$': 'jest-transform-stub', // Para imágenes JPEG
  },
};
