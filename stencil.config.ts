import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'FindMe',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      // Ajoutez ici des options pour gérer les fichiers d'entrée
      copy: [
        {
          src: '**/*.entry.js',  // Assurez-vous que les fichiers sont bien copiés
          dest: 'build',
        },
      ],
    },
  ],
};
