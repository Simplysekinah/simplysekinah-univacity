# IconicIntern

Clone the repository
```bash
git clone https://github.com/Simplysekinah/simplysekinah-univacity.git
cd simplysekinah-univacity
npm install

## Development server
To run the project locally 
```bash
ng serve

##Component Architecture
app--------->Model->ProgramModel---TypeScript interface defining the structure of a program object
            |Pages->Layout(ProgramSearchPage): Displays a searchable list of programs with filter options.
                  ->Details(ProgramDetailPage): Detailed view of a selected program.
            |Service->program.service: Provides mock data and filtering logic.
            |Shared->DetailsCard:For the details card displayed in the program search page
                    |filteredModal: Detailed view of the filtered modal
                    |instituteModal: Detailed view of the institute modal
                    |UpperNav: Detailed view of the program search page navigation
            |Utils->This is the folder that mock.data.json is stored

app/
├── Model/
│   └── ProgramModel.ts         # Defines the structure of a program object
├── Pages/
│   ├── Layout/                 # ProgramSearchPage: searchable list with filters
│   └── Details/                # ProgramDetailPage: detailed view of a selected program
├── Service/
│   └── program.service.ts      # Provides mock data and filtering logic
├── Shared/
│   ├── DetailsCard/            # Card component for displaying program info
│   ├── filteredModal/          # Modal for filtering programs
│   ├── instituteModal/         # Modal for viewing institute campuses
│   └── UpperNav/               # Navigation bar for the search page
└── Utils/
    └── mock-data.json          # Static mock data used throughout the app


IONIC COMPONENTS WAS USED FOR UI CONSISTENCY

##Routing
Routing was done using Angular router


##Assumption and designs decison

Mock data was used instead of using a live api fetching
modal components are standalone for further reuseability
Responsive design was prioritized

##Limitations
No backend integration all datas are static


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
