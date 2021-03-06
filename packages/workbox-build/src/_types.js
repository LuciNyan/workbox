/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import './_version.mjs';

/**
 * @typedef {Object} ManifestEntry
 * @property {String} url The URL to the asset in the manifest.
 * @property {String} revision The revision details for the file. This is a
 * hash generated by node based on the file contents.
 *
 * @memberof module:workbox-build
 */

/**
 * @typedef {Object} ManifestTransformResult
 * @property {Array<ManifestEntry>} manifest
 * @property {Array<string>|undefined} warnings
 *
 * @memberof module:workbox-build
 */
