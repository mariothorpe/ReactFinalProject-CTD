# Coaster Credit Counter

Coaster Credit Counter is a React-based web application designed to help roller coaster enthusiasts keep track of the roller coasters they have ridden. Users can log their coaster credits, view statistics, and share their progress with others.

##Setting Up Airtable/Backend

1. Go to www.airtable.com and create a new airtable base.
2. Create one table:
    - Your newly created base should have one table
      - Coasters - for storing information about each roller coaster
3. Add fields:
   1. Coasters table fields should be:
      1. name(single line text)
      2. park(single line text)
      3. type(single line text)
      4. height(single line text)
      5. speed(single line text)
      6. inversions(single line text)
      7. minimumheightreq(single line text)
4. Import Data From CSV
   1. You can import data using airtable's CSV Import feature.
      1. In each table click the dropdown -> "Import Data" -> "CSV File"
      2. The CSV files will be in the /data folder at the root of the projcet
      3. Upload the correct CSV file for each table
         1. Coasters.csv (imports all data for the Coasters table)
5. Configure Environment Variables
   1. Create a .env.local file in the root of the project based on the example provided below:

VITE_PAT = your_airtable_personal_access_token
VITE_BASE_ID = your_airtbale_base_id
VITE_TABLE_COASTERS = coasters 

VITE_PAT: Create a personal access token at https://airtable.com/account under Developer Hub -> Tokens
VITE_BASE_ID: The base ID is found in the URL of your Airtable base (airtable.com/appXXXXXXXXXXX/)
VITE_TABLE_COASTERS: The name of the table you created in step 2.


## Features

- **Add Coaster Credits**: Easily add roller coasters to your personal list.
- **View Statistics**: Track the total number of coasters ridden and other fun stats.
- **Search and Filter**: Quickly find coasters by name, park, or type.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **State Management**: React Context API or Redux (depending on implementation)
- **Styling**: CSS Modules or Styled Components
- **Backend (Optional)**: Airtable

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ReactFinalProject-CTD.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CoasterCreditCounter
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Add your coaster credits by filling out the form.
3. Explore your stats and enjoy tracking your coaster adventures!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the roller coaster enthusiast community for the inspiration.
- Special thanks to Code The Dream for their support.
