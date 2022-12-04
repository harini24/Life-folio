# Life-Folio

## A clean, cool yet quirky portfolio template for Developers

<h2 align="center">
  <img src="https://github.com/harini24/Life-folio/blob/main/demo/Life-folio.gif" alt=" Life-folio" width="600px" />
  <br>
</h2>

To view the above gif, **[click here](https://github.com/harini24/Life-folio/blob/main/demo/Life-folio.gif)**

---

## Getting Started with Life-Folio

Following these instructions will help you set up and run a copy of the project in your local system.

### Prerequisites

You'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) installed on your computer.

```
node@v10.16.0 or higher
yarn@v1.21.1 or higher
git@2.17.1 or higher
```

Also, you can use [NPM](http://npmjs.com) instead of yarn ☝️

```
npm@6.9.0 or higher
```

---

## How To Use 🔧

From your command line, first clone Life-Folio:

```bash
# Clone this repository
$ git clone https://github.com/harini24/Life-folio.git

# Go into the repository
$ cd Life-folio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn start
```

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/harini24/Life-folio/blob/main/demo/initial_page.png" alt="Life-folio" width="100%">
</h2>

---

## Instructions:

### Step 1 - Setting up Header

By befault the header element would be displaying "(Lif)E - portfolio of Your Name".\
To replace "your Name" with expected text, Go to `src\data\constants.tsx` and under the Constants change value of USERNAME with expected text.

```javascript
export enum Constants {
  USERNAME = "Your Name",
}
```

### Step 2 - Setting up Footer

Go to `src\data\Contact.json` and provide the required contact infomation data in the respective fields

```javascript
{
  "emailId": "userName@gmail.com",
  "linkedIn": "https://www.linkedin.com/",
  "twitter": "https://twitter.com/home",
  "github": "https://github.com/"
}
```

### Step 3 - Setting up sections

Go to `src\data\sections.json`, this file contains list of the Life-folio sections for which the informations can be set.\
To Disable any section as per requirement, the hide property have be set to true.\
For example if, Projects sections is to be disabled

```javascript
{
  "name": "Projects",
  "key": "projects",
  "hide": true
}
```

### Step 4 - Setting up the data of sections

Under `src\data`, you will find multiple json files named `AboutMe.json`, `Experience.json`, `Education.json`, `Projects.json`, `Skills.json` and `Certifications.json`.\
Each respective to About Me, Experience, Education, Projects, Skills and Certification sections of the Life-folio.

#### AboutMe.json

Fill in the json with your date.

```javascript
{
  "aboutMe": ""
}
```

**_Note_**: To replace the image and resume in About me section with your image own image and resume, under `src\assets` replace the `pic.png` and `resume.pdf` file.

#### Experience.json

Fill in the json with your date.

```javascript
[
  {
    span: "Year Month -  current",
    company: "",
    linkedIn: "",
    twitter: "",
    location: "City, State",
    progress: [
      {
        role: "Role Name",
        span: "Year Month - Current",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          "In commodi consequatur quidem? Nemo officiis inventore praesentium hic saepe ut delectus",
        ],
      },
    ],
  },
];
```
**_Note_**: To add the image of companies you have been employed with in the Employment section, place those files under `src\assets` folder, following the naming convenstion such that `<company-name>.<format>`. Then in the `src\data\constants.tsx` file, import the added files and map them accordingly with company name.

Example, if company name is Google

```javascript
import Google from "../assets/google.jpg";

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported name 
export const logo: Map = {
  google: Google,
  verizon: Verizon,
};
```
#### Education.json

Fill in the json with your date.

```javascript
[
  {
    name: "Institute name",
    location: "City, State",
    course: "Course Name",
    span: "year - year",
    specialization: "major name",
    score: "",
  },
];
```

#### Projects.json

Fill in the json with your date.

```javascript
[
  {
    name: "Project name 1",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    sourceCode: "",
    demoLink: "",
  },
];
```

**_Note_**: To add the image or gifs of your projects in the Project section, place the files under `src\assets` following the naming convenstion such that `<project-name>.<format>`. Then in the `src\data\constants.tsx` file, import the added files and map them accordingly with project name.

```javascript
import ProjectImg from "../assets/project.jpg";
// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "project name 1": ProjectImg,
};
```

#### Skills.json

Fill in the json with your date.

```javascript
{
  softSkills: [
    "Skill name",
    "Skill name",
    "Skill name",
  ],
  hardSkills: [
    "Skill name",
    "Skill name",
    "Skill name",
  ]
}
```

#### Certifications.json

Fill in the json with your date.

```javascript
[
  {
    name: "Certificate Name 1",
    org: "Issued Org name",
    issued: "month year",
    expiry: "",
    credentialId: "",
    credentialUrl: "",
    url: "",
  },
];
```
---
## Deployment 

Once you have done with your setup. You need to put your website online!

I have used [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

## Technologies used

- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Typescript](https://www.typescriptlang.org/) - Super set of JavaScript.
- [Mui](https://mui.com/) - Intuitive React UI tools
- [Redux](https://redux.js.org/) - State Container for JS Apps

## Authors

- **Harini Sivakumar** - [https://github.com/harini24](https://github.com/harini24)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/72a45bc2-6c04-427b-84a0-b37f143ee68c/deploy-status)](https://app.netlify.com/sites/lifefolio/deploys)

## License 

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/harini24/Life-folio/blob/main/License.md) file for details
