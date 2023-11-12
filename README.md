# GDSC Workshop 7 (Angular + Typescript)
## Hosted by: Daniel Henricks
All starter code is written by the GDSC Tech Leads.

## About Angular
View Angular's website here: https://angular.dev/

Angular is a widely-used open-source web application framework developed and maintained by Google. Angular simplifies the process of building dynamic web applications by providing a structured framework for creating maintainable code. Its key features include two-way data binding (as covered today) and the particular structure of components.

Angular utilizes TypeScript. TypeScript is essentially JavaScript code with more strict type checking. We won't go too into detail about it during this workshop, but there will be noticable syntax differences.

## Prerequisites:
- You have Node.js installed

## How to start this workshop:
1) You must install Angular's command-line interface (CLI). Run the following command: 
```bash
npm install -g @angular/cli
```
2) Test to make sure the installation worked by running the command:
```bash
ng --help
```

## What will we learn today?
1) Why using Angular would make development easier.
2) How to create an Angular component using the command 
```bash
ng generate component [component-name]
```
3) ``` ngModel, *ngIf, *ngFor```. To be seen in our form.component files.
4) The structure of Angular's typescript files and what the ```app.module.ts``` file does.
5) (If time permits) Deploying an app to GitHub Pages (a 'real' website!)

## How do I install to gh-pages?
1) Run ```ng build --configuration=production```
2) Add the option baseHref into the angular.json
3) ng deploy