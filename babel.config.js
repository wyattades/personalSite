const iconsPrefix = {
  ai: 'Ai',
  bi: 'Bi',
  bs: 'Bs',
  cg: 'Cg',
  di: 'Di',
  fa: 'Fa',
  fc: 'Fc',
  fi: 'Fi',
  gi: 'Gi',
  go: 'Go',
  gr: 'Gr',
  hi: 'Hi',
  im: 'Im',
  io: 'IoIos',
  io5: 'Io',
  md: 'Md',
  ri: 'Ri',
  si: 'Si',
  ti: 'Ti',
  vsc: 'Vsc',
  wi: 'Wi',
};

// const threeModules = [
//   ...require('fs')
//     .readFileSync('node_modules/three/src/Three.js', 'utf8')
//     .matchAll(/export \{\s*(\w+(?:,\s*\w+)*)\s*\} from '\.\/([\w/-]+)\.js';/gm),
// ].reduce((obj, m) => {
//   for (const key of m[1].split(/,\s*/)) obj[key] = m[2];
//   return obj;
// }, {});
// console.log(threeModules);

// [
//   'import',
//   {
//     libraryName: 'three',
//     camel2DashComponentName: false,
//     transformToDefaultImport: false,
//     customName: (name) => {
//       if (name.endsWith('Material'))
//         return `three/src/materials/${name}.js`;
//       if (name.endsWith('Geometry'))
//         return `three/src/geometries/${name}.js`;
//       return `three/src/${threeModules[name] || name}.js`;
//     },
//   },
//   'import-three',
// ],

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: '@react-icons',
        camel2DashComponentName: false,
        transformToDefaultImport: false,
        customName: (name) => {
          const prefix = '@react-icons/all-files';

          for (const dir in iconsPrefix) {
            if (name.startsWith(iconsPrefix[dir])) {
              return prefix + `/${dir}/` + name + '.js';
            }
          }
          return prefix;
        },
      },
      'import-react-icons',
    ],
    [
      'import',
      {
        libraryName: 'react-use',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
      'import-react-use',
    ],
  ],
};
