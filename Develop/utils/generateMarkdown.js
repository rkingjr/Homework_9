// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseType = license;
//   let yourLicense = ''
//   if(licenseType === 'MIT') {
//     yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//     return yourLicense
//   } else if (licenseType === 'GPLv3') {
//     yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
//     return yourLicense
//   } else if (licenseType === 'GPL') {
//     yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
//     return yourLicense
//   } else {
//     license.license = "N/A"
//     return yourLicense
//   }
//   return yourLicense;
// };
// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents:
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Testing](#testing)
  [Questions](#questions)
  [License](#license)
  [Application Image](#application-image)

  ## Description:
  ${data.describe}

  ## Installation:
  ${data.install}

  ## Usage:
  ${data.use}

  ## Contributing:
  ${data.contribute}

  ## Testing:
  ${data.test}

  ## Questions:
  Please don't try to contact me.

  ## License:
  None

  ## Application Image:
`;
}

module.exports = generateMarkdown;
