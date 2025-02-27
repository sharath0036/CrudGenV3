#!/bin/bash

# Navigate to the crudFrontEnd directory
cd ../crudFrontEnd

# Run the Dashboard npm script
npm run Dashboard

# Copy the AllTables directory to the target directory in CrudGenV3
rsync -av --progress ./publicDir/AllTables/ ../CrudGenV3/public/crudFrontEnd/AllTables

# Navigate to the CrudGenV3 directory
cd ../CrudGenV3

